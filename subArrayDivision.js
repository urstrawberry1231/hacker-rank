function birthday(s, d, m) {
    let count = 0;
    let currentSum = 0;

    // Compute sum of first m elements
    for (let i = 0; i < m; i++) {
        currentSum += s[i];
    }

    // Check if the first segment matches
    if (currentSum === d) count++;

    // Slide the window across the array
    for (let i = m; i < s.length; i++) {
        currentSum = currentSum - s[i - m] + s[i];
        if (currentSum === d) count++;
    }

    return count;
}

// Example usage:
console.log(birthday([1, 2, 1, 3, 2], 3, 2)); // Output: 2
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2)); // Output: 0
console.log(birthday([4], 4, 1)); // Output: 1
