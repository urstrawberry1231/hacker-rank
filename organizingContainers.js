function organizingContainers(container) {
    const n = container.length;
    const containerCapacity = container.map(row => row.reduce((a, b) => a + b, 0));
    const typeCount = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            typeCount[j] += container[i][j];
        }
    }

    containerCapacity.sort((a, b) => a - b);
    typeCount.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (containerCapacity[i] !== typeCount[i]) {
            return "Impossible";
        }
    }
    return "Possible";
}