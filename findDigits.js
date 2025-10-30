function findDigits(n) {
    let count = 0;
    let digits = n.toString().split('');  
    
    for (let d of digits) {
        let digit = parseInt(d);
        if (digit !== 0 && n % digit === 0) {
            count++;
        }
    }
    
    return count;
}