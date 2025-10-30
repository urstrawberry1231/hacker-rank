function cavityMap(grid) {
    let n = grid.length;
    let result = [...grid];
    
    result = result.map(row => row.split(''));
    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            let current = grid[i][j];
            let top = grid[i - 1][j];
            let bottom = grid[i + 1][j];
            let left = grid[i][j - 1];
            let right = grid[i][j + 1];
            if (
                current > top &&
                current > bottom &&
                current > left &&
                current > right
            ) {
                result[i][j] = 'X';
            }
        }
    }
    return result.map(row => row.join(''));
}