const { BlockfrostProvider, Transaction, Wallet } = require('@meshsdk/core');

// Replace with your Blockfrost API key
const provider = new BlockfrostProvider('previewTuex9jIzb7vSeFyKxF4k8LzCCMLVDOVm');

// Replace with your compiled contract in hexadecimal format
const contract = '00b2e13be492eb808ba78975771aa6bbbdb3bac5874ff525c960ac2b5419e5724801fbc79a2f080ad8c94f30531a74737684ca5ebf2df3e127';

// Datum and Redeemer (placeholders here; replace with actual hex if needed)
const datumHex = '0x12345678'; // Placeholder datum
const redeemerHex = '0x87654321'; // Placeholder redeemer

// Initialize wallet with mnemonic phrase (replace with your actual mnemonic)
const wallet = new 00b2e13be492eb808ba78975771aa6bbbdb3bac5874ff525c960ac2b5419e5724801fbc79a2f080ad8c94f30531a74737684ca5ebf2df3e127(provider, {
  type: 'mnemonic',
  phraseOrKey: 'lazy toast elegant veteran trap increase cash wish jump hotel garment vote away vapor erosion elder shoulder wrap wing debris myth genuine position citizen


async function deployContract() {
  try {
    // Create a new transaction
    const tx = new Transaction({ initiator: wallet });

    // Add the contract with a minimum ADA amount
    tx.sendPlutusScript({
      script: contract,
      datum: datumHex,
      redeemer: redeemerHex,
      amount: '2000000', // 2 ADA (adjust if needed)
    });

    // Build, sign, and submit the transaction
    const unsignedTx = await tx.build();
    const signedTx = await wallet.signTx(unsignedTx);
    const txHash = await provider.submitTx(signedTx);

    console.log("Contract deployed with transaction has:7780621446450022388db159a49d09b6b7fd7e8db1182f135d918dc75149d7b6", txHash);
  } catch (err) {
    console.error("Deployment error:", err.message || err);
  }
}

// Run the deployment function
deployContract();
