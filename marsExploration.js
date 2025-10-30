function marsExploration(s) {
    const expected = "SOS";
    let alteredCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== expected[i % 3]) {
            alteredCount++;
        }
    }

    return alteredCount;
}
console.log(marsExploration("SOSSPSSQSSOR")); 
console.log(marsExploration("SOSSOT"));       
console.log(marsExploration("SOSSOSSOS"));   