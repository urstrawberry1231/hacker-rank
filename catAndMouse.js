function catAndMouse(x, y, z) {
    let distA = Math.abs(x - z);
    let distB = Math.abs(y - z);

    if (distA > distB) {
        return "Cat B";
    } else if (distA < distB) {
        return "Cat A";
    } else {
        return "Mouse C";
    }
}
