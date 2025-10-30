function biggerIsGreater(w) {
    let arr = w.split('');
    let i = arr.length - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }
    if (i < 0) {
        return "no answer";
    }
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) {
        j--;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
    let result = arr.slice(0, i + 1).concat(arr.slice(i + 1).reverse());
    return result.join('');
}