function hurdleRace(k, height) {
    let maxHeight = Math.max(...height);
    
    return maxHeight > k ? maxHeight - k : 0;
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2])); 

console.log(hurdleRace(7, [2, 5, 4, 5, 2])); 