function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 < y2 || (y1 === y2 && m1 < m2) || (y1 === y2 && m1 === m2 && d1 <= d2)) {
        return 0;
    }
    if (y1 === y2 && m1 === m2 && d1 > d2) {
        return 15 * (d1 - d2);
    }
    if (y1 === y2 && m1 > m2) {
        return 500 * (m1 - m2);
    }
    if (y1 > y2) {
        return 10000;
    }
}

console.log(libraryFine(9, 6, 2015, 6, 6, 2015)); 
console.log(libraryFine(1, 1, 2018, 31, 12, 2017)); 
console.log(libraryFine(5, 7, 2024, 1, 6, 2024)); 
console.log(libraryFine(10, 6, 2025, 10, 6, 2025)); 