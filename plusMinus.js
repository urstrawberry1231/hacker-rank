function plusMinus(arr){
    let negative = 0;
    let positive = 0;
    let zero = 0;
    let arraySize = arr.length;

    for(let element of arr){
        if(element > 0){
            positive++;
        }
        else if(element < 0){
            negative++;
        }else{
            zero++;
        }
    }
    let plusRatio = positive/arraySize;
    let negativeRatio = negative/arraySize;
    let zeroRatio = zero/arraySize;
    console.log(plusRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}