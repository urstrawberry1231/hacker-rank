function designerPdfViewer(h, word) {
    let maxHeight = 0;

    for (let i = 0; i < word.length; i++) {
        let index = word.charCodeAt(i) - 97;

        if (h[index] > maxHeight) {
            maxHeight = h[index];
        }
    }

    return maxHeight * word.length;
}

console.log(designerPdfViewer(
    [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    "abc"
)); 

console.log(designerPdfViewer(
    [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7],
    "zaba"
));