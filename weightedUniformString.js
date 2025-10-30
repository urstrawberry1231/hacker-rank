function weightedUniformStrings(s, queries) {
    const weights = new Set();
    let prevChar = '';
    let count = 0;

    for (let char of s) {
        if (char === prevChar) {
            count++;
        } else {
            count = 1;
            prevChar = char;
        }

        const weight = (char.charCodeAt(0) - 96) * count;
        weights.add(weight);
    }

    return queries.map(q => weights.has(q) ? "Yes" : "No");
}
