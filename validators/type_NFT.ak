type NFT {
    id: ByteString
    owner: Address
    royalty: Int    -- Percentage (e.g., 5% royalty would be 5)
    auctionEndTime: Option<Timestamp>  -- End time of auction
    highestBid: Option<Int>           -- Highest bid during auction
    highestBidder: Option<Address>     -- Address of highest bidder
}
