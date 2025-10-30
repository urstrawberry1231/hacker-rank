function squares(a, b) {
    let start = Math.ceil(Math.sqrt(a));
    let end = Math.floor(Math.sqrt(b));
    return Math.max(0, end - start + 1);
}

let testCases = [
    [3, 9],
    [17, 24]
];

for (let [a, b] of testCases) {
    console.log(squares(a, b));
}