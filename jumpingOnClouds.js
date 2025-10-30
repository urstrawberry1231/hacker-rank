function jumpingOnClouds(c, k) {
    let energy = 100;
    let i = 0;

    do {
        i = (i + k) % c.length;
        energy -= 1;

        if (c[i] === 1) {
            energy -= 2;
        }

    } while (i !== 0); 

    return energy;
}
