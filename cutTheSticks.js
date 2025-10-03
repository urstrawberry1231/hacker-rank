function cutTheSticks(arr){
    let result = [];

    while(arr.length > 0){
        result.push(arr.length);
        let minStick = Math.min(...arr);
        arr=arr.map(stick=>stick - minStick).filter(stick=>stick>0);
    }
    return result;
}