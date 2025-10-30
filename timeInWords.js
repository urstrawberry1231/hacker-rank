function timeInWords(h, m) {
    const numbers = [
        "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "quarter", "sixteen", "seventeen",
        "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three",
        "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight",
        "twenty nine", "half"
    ];

    if (m === 0) {
        return `${numbers[h]} o' clock`;
    } else if (m === 15) {
        return `quarter past ${numbers[h]}`;
    } else if (m === 30) {
        return `half past ${numbers[h]}`;
    } else if (m === 45) {
        return `quarter to ${numbers[h + 1]}`;
    } else if (m < 30) {
        const minuteWord = m === 1 ? "minute" : "minutes";
        return `${numbers[m]} ${minuteWord} past ${numbers[h]}`;
    } else {
        const minuteWord = (60 - m) === 1 ? "minute" : "minutes";
        return `${numbers[60 - m]} ${minuteWord} to ${numbers[h + 1]}`;
    }
}
