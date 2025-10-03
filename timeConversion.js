function timeConversion(s) {
    let hour = parseInt(s.slice(0, 2));
    let mins = s.slice(3, 5);
    let secs = s.slice(6, 8);
    let period = s.slice(8, 10);

    if (period === "AM") {
        if (hour === 12) {
            hour = 0;
        }
    } else {
        if (hour !== 12) {
            hour += 12;
        }
    }

    let hourStr = String(hour).padStart(2, '0');
    return `${hourStr}:${mins}:${secs}`;
}
