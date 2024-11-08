placeBid(nft: NFT, bidAmount: Int, bidder: Address) -> NFT {
    assert(current_time <= nft.auctionEndTime.getOrElse(0), "Auction ended")
    assert(bidAmount > nft.highestBid.getOrElse(0), "Bid must be higher")
    assert(bidder != nft.owner, "Owner cannot bid on their NFT")

    nft {
        highestBid: Some(bidAmount),
        highestBidder: Some(bidder)
    }
}
