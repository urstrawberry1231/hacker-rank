function appendAndDelete(s, t, k) {
    let commonLength = 0;
    for (let i = 0; i < Math.min(s.length, t.length); i++) {
        if (s[i] === t[i]) {
            commonLength++;
        } else {
            break;
        }
    }

    let totalOperations = (s.length - commonLength) + (t.length - commonLength);
    
    if (totalOperations > k) {
        return "No";
    } else if ((k - totalOperations) % 2 === 0 || k >= s.length + t.length) {
        return "Yes";
    } else {
        return "No";
    }
}

console.log(appendAndDelete("hackerhappy", "hackerrank", 9));
console.log(appendAndDelete("aba", "aba", 7)); 
console.log(appendAndDelete("ashley", "ash", 2));