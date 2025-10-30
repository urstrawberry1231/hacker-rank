function permutationEquation(p) {
    let result = [];
    for (let x = 1; x <= p.length; x++) {
        let firstIndex = p.indexOf(x) + 1;
        let secondIndex = p.indexOf(firstIndex) + 1;
        result.push(secondIndex);
    }
    return result;
}