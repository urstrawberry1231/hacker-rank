function pageCount(n, p) {
    const fromFront = Math.floor(p / 2);

    const fromBack = Math.floor(n / 2) - Math.floor(p / 2);

    return Math.min(fromFront, fromBack);
}

console.log(pageCount(6, 2)); 
console.log(pageCount(5, 4)); 