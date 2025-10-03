function viralAdvertising(n) {
   let count = 0;
   let shared = 5;
   for(let i = 1; i<=n;i++){
        let liked = Math.floor(shared/2);
        count += liked;
        shared = liked * 3;
   }
   return count;
}