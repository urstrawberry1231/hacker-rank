function equalizeArray(arr) {
    let frequency = {};
    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    let maxFreq = Math.max(...Object.values(frequency));
    return arr.length - maxFreq;
}

console.log(equalizeArray([3, 3, 2, 1, 3])); 