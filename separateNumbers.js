function separateNumbers(s) {
    const n = s.length;

    for (let len = 1; len <= Math.floor(n / 2); len++) {
        let firstNum = BigInt(s.slice(0, len));
        let current = firstNum;
        let built = '';

        while (built.length < n) {
            built += current.toString();
            current += 1n;
        }

        if (built === s) {
            console.log(`YES ${firstNum}`);
            return;
        }
    }

    console.log("NO");
}
