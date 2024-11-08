const balance = await .getBalance();
if (balance < 3000000) { // Adjust as needed based on expected fees
  console.error("Error: Wallet balance is insufficient for deployment.");
  return;
}
