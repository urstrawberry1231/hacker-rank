function encryption(s) {
    s = s.replace(/\s+/g, '');
    const L = s.length;
    const sqrtL = Math.sqrt(L);
    let rows = Math.floor(sqrtL);
    let cols = Math.ceil(sqrtL);
    if (rows * cols < L) {
        rows += 1;
    }
    const grid = [];
    for (let i = 0; i < L; i += cols) {
        grid.push(s.slice(i, i + cols));
    }
    let encrypted = [];
    for (let c = 0; c < cols; c++) {
        let word = '';
        for (let r = 0; r < grid.length; r++) {
            if (grid[r][c]) word += grid[r][c];
        }
        encrypted.push(word);
    }
    return encrypted.join(' ');
}