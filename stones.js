function stones(n, a, b) {
    const result = new Set();
    
    for (let i = 0; i < n; i++) {
        const value = (n - 1 - i) * a + i * b;
        result.add(value);
    }
    return Array.from(result).sort((x, y) => x - y);
}