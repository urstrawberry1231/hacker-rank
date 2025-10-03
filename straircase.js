function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";

        for (let k = 0; k < n - i; k++) {
            row += " ";
        }

        for (let h = 0; h < i; h++) {
            row += "#";
        }

        console.log(row);
    }
}
