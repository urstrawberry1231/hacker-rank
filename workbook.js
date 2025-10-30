function workbook(n, k, arr) {
    let page = 1;       
    let specialCount = 0; 

    for (let i = 0; i < n; i++) {
        const problems = arr[i];
        for (let p = 1; p <= problems; p++) {
            if (p === page) {
                specialCount++;
            }
            if (p % k === 0 || p === problems) {
                page++;
            }
        }
    }

    return specialCount;
}