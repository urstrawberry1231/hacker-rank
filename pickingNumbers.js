function pickingNumbers(a) {
    let maxLength = 0;
    for(let i = 0; i < a.length; i++){
        let count = 0;
        for (let j = 0; j< a.length; j++){
            if(a[j] === a[i] || a[j]===a[i] + 1 ){
                count++;
            }
        }
        if(count>maxLength){
            maxLength = count;
        }
    }
    return maxLength;
}