function kaprekarNumbers(p, q) {
    let result = [];

    for (let n = p; n <= q; n++) {
        let square = (n * n).toString();
        let d = n.toString().length;
        let right = square.slice(-d); 
        let left = square.slice(0, square.length - d); 
        let leftNum = left === "" ? 0 : parseInt(left);
        let rightNum = right === "" ? 0 : parseInt(right);
        if (leftNum + rightNum === n) {
            result.push(n);
        }
    }
    if (result.length > 0) {
        console.log(result.join(" "));
    } else {
        console.log("INVALID RANGE");
    }
}
