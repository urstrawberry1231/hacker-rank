function aVeryBigSum(arr){
    let sum = 0;
    for(let element of arr){
        sum += element;
    }
    return sum;
}
let arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log("The sum of the array elements is:", aVeryBigSum(arr));