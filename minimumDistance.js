function minimumDistances(a) {
    let minDist = Infinity;
    const indexMap = {};

    for (let i = 0; i < a.length; i++) {
        if (indexMap[a[i]] !== undefined) {
            const dist = i - indexMap[a[i]];
            minDist = Math.min(minDist, dist);
        }
        indexMap[a[i]] = i;
    }

    return minDist === Infinity ? -1 : minDist;
}