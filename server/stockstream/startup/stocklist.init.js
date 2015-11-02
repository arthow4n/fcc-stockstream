if (Stocklist.find().count() === 0) {
    Stocklist.insert({name: "stocklist", list: ["MSFT", "AAPL"]});
}