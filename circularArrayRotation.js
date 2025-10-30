function circularArrayRotation(a, k, queries) {
    let n = a.length;
    let result = [];

    k = k % n;

    for (let i = 0; i < queries.length; i++) {
        let index = (queries[i] - k + n) % n;
        result.push(a[index]);
    }

    return result;
}

let a = [1, 2, 3];
let k = 2;
let queries = [0, 1, 2];

console.log(circularArrayRotation(a, k, queries));