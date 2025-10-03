function getMoneySpent(keyboards, drives, b) {
    let maxSpent = -1;
    for(let i = 0; i < keyboards.length; i++){
        for(let j = 0; j < drives.length; j++){
            let total = keyboards[i] + drives[j];
            
            if(total <= b && total > maxSpent){
                maxSpent = total;
            }
        }
    }
    return maxSpent;
}