function hackerrankInString(s) {
    const target = "hackerrank";
    let i = 0;

    for (let char of s) {
        if (char === target[i]) {
            i++;
        }
        if (i === target.length) {
            return "YES";
        }
    }

    return "NO";
}
console.log(hackerrankInString("hereiamstackerrank"));
console.log(hackerrankInString("hackerworld"));        
console.log(hackerrankInString("hhaacckkekraraannk")); 
