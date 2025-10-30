function queensAttack(n, k, r_q, c_q, obstacles) {

    const obstacleSet = new Set(obstacles.map(o => `${o[0]}-${o[1]}`));
    const directions = [
        [1, 0],  
        [-1, 0],  
        [0, 1], 
        [0, -1], 
        [1, 1], 
        [1, -1], 
        [-1, 1], 
        [-1, -1] 
    ];

    let attackableSquares = 0;
    for (let [dr, dc] of directions) {
        let r = r_q + dr;
        let c = c_q + dc;
        while (r >= 1 && r <= n && c >= 1 && c <= n && !obstacleSet.has(`${r}-${c}`)) {
            attackableSquares++;
            r += dr;
            c += dc;
        }
    }

    return attackableSquares;
}
console.log(queensAttack(4, 0, 4, 4, [])); 
console.log(queensAttack(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3]]));
console.log(queensAttack(1, 0, 1, 1, []));
