function nonDivisibleSubset(k, S) {
    let remainderCount = new Array(k).fill(0);

    for (let num of S) {
        remainderCount[num % k]++;
    }
    let count = Math.min(remainderCount[0], 1);
    
    for (let i = 1; i <= Math.floor(k / 2); i++) {
        if (i !== k - i) {
            count += Math.max(remainderCount[i], remainderCount[k - i]);
        } else {
            count += 1;
        }
    }

    return count;
}

let k = 3;
let S = [1, 7, 2, 4];

console.log(nonDivisibleSubset(k, S));
