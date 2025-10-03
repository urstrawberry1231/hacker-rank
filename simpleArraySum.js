function simpleArraySum(ar){
    let sum = 0;
    for(let element of ar){
        sum += element;
    }
    return sum;
}
console.log(simpleArraySum([1, 2, 3, 4, 10, 11])); 