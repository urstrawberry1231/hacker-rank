function saveThePrisoner(n, m, s) {
    return ((s + m - 2) % n) + 1;
}

const t = 2; 
const testCases = [
    [5, 2, 1],
    [5, 2, 2]
];

for (let i = 0; i < t; i++) {
    const [n, m, s] = testCases[i];
    console.log(saveThePrisoner(n, m, s));
}
