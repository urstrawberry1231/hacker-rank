function birthdayCakeCandles(candles){
    let tallest = 0;
    let max = candles[0];
    for (let i of candles){
        if(i>max){
            max = i;
            tallest = 1;
        }else if(i === max){
            tallest++;
        }
    }
    return tallest;
}