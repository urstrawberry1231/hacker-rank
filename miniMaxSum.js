function miniMaxSum(arr){
    let sum = 0;
    let max = arr [0];
    let min = arr [0];

    for (let num of arr){
        sum += num;
        if(num > max){
            max = num;
        }
        if(num < min){
            min = num;
        }
    }
    let minSum = sum - max;
    let maxSum = sum - min;

    console.log(minSum, maxSum);
}
