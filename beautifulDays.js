function beautifulDays(i, j, k) {
    let count = 0;
    
    for(let day = i; day <= j; day++){
        let reversed = parseInt(day.toString().split("").reverse().join(""));
        
        let diff = Math.abs(day - reversed);
        
        if (diff % k ===0){
            count++;
        }
    }
    return count;

}