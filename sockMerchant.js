function sockMerchant(n, ar) {
    let pairs = 0;
    let seen = new Set();
    
    for(let sock of ar){
        if(seen.has(sock)){
            pairs++;
            seen.delete(sock);
        }else{
            seen.add(sock);
        }
    }
    return pairs;
}