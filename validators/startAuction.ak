startAuction(nft: NFT, duration: Int) -> NFT {
    assert(nft.owner == caller, "Only the owner can start an auction")

    nft {
        auctionEndTime: Some(current_time + duration)
    }
}
