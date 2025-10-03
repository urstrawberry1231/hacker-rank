function flatlandSpaceStations(n, c) {
    c.sort((a, b) => a - b);

    let left = c[0];
    let right = (n - 1) - c[c.length - 1];

    let middle = 0;
    for (let i = 0; i < c.length - 1; i++) {
        let gap = c[i + 1] - c[i];
        middle = Math.max(middle, Math.floor(gap / 2));
    }
    return Math.max(left, right, middle);

}