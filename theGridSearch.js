function gridSearch(G, P) {
  const R = G.length;     
  const r = P.length;   

  for (let i = 0; i <= R - r; i++) {  
    let startIndex = G[i].indexOf(P[0]);  

    while (startIndex !== -1) { 
      let found = true;
      for (let j = 1; j < r; j++) {
        if (G[i + j].substring(startIndex, startIndex + P[j].length) !== P[j]) {
          found = false;
          break;
        }
      }

      if (found) return "YES"; 
      startIndex = G[i].indexOf(P[0], startIndex + 1);
    }
  }

  return "NO"; 
}