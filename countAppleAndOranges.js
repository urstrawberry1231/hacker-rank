function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    for (let d of apples) {
        let position = a + d; // landing spot of the apple
        if (position >= s && position <= t) {
            appleCount++;
        }
    }

    for (let d of oranges) {
        let position = b + d; // landing spot of the orange
        if (position >= s && position <= t) {
            orangeCount++;
        }
    }

    console.log(appleCount);
    console.log(orangeCount);
}