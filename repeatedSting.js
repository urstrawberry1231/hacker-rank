function repeatedString(s, n) {
    let countInS = 0;
    for (let char of s) {
        if (char === 'a') countInS++;
    }
    let fullRepeats = Math.floor(n / s.length);
    let remainder = n % s.length;
    let countInRemainder = 0;
    for (let i = 0; i < remainder; i++) {
        if (s[i] === 'a') countInRemainder++;
    }
    return (countInS * fullRepeats) + countInRemainder;
}

console.log(repeatedString("aba", 10)); 
console.log(repeatedString("a", 1000000000000)); 
