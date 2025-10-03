function getTotalX(a, b) {
    // helper: gcd
    function gcd(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    // helper: lcm
    function lcm(x, y) {
        return (x * y) / gcd(x, y);
    }

    // Step 1: find LCM of array a
    let lcmA = a.reduce((acc, val) => lcm(acc, val));

    // Step 2: find GCD of array b
    let gcdB = b.reduce((acc, val) => gcd(acc, val));

    // Step 3: count multiples of lcmA that divide gcdB
    let count = 0;
    let multiple = lcmA;

    while (multiple <= gcdB) {
        if (gcdB % multiple === 0) {
            count++;
        }
        multiple += lcmA;
    }

    return count;
}