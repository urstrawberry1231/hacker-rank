function superReducedString(s) {
    const stack = [];

    for (let char of s) {
        if (stack.length && stack[stack.length - 1] === char) {
            stack.pop(); 
        } else {
            stack.push(char); 
        }
    }

    return stack.length ? stack.join('') : 'Empty String';
}
