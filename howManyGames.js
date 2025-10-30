function howManyGames(p, d, m, s) {
    let games = 0;
    let currentPrice = p;

    while (s >= currentPrice) {
        s -= currentPrice;
        games++;
        currentPrice = Math.max(currentPrice - d, m);
    }

    return games;
}