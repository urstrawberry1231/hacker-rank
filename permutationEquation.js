function permutationEquation(p) {
    let n = p.length;
    let result = [];
    
    for(let x= 1 ; x<=n;x++){
        let pos1 = 0;
        for(let i = 0; i<=n;i++){
            if(p[i] === x){
                pos1 =i+1;
                break;
            }
        }
        
    let pos2 = 0;
    for(let j = 0; j<n;j++){
        if(p[j] === pos1){
            pos2 = j +1 ;
            break;
        }
    }
        result.push(pos2);
    }
    return result;
}