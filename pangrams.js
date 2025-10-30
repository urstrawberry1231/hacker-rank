function pangrams(s) {
    const alphabetSet = new Set();
    const lower = s.toLowerCase();

    for (let char of lower) {
        if (char >= 'a' && char <= 'z') {
            alphabetSet.add(char);
        }
    }

    return alphabetSet.size === 26 ? "pangram" : "not pangram";
}
console.log(pangrams("We promptly judged antique ivory buckles for the next prize"));
console.log(pangrams("We promptly judged antique ivory buckles for the prize"));    