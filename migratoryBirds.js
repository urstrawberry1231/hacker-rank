function migratoryBirds(arr) {
     const counts = {};

  for (let t of arr) {
    counts[t] = (counts[t] || 0) + 1;
  }

  let answerId = arr[0];
  let maxFreq = counts[answerId]; 

  for (let id in counts) {
    const freq = counts[id];
    const birdId = parseInt(id);

    if (freq > maxFreq || (freq === maxFreq && birdId < answerId)) {
      maxFreq = freq;
      answerId = birdId;
    }
  }

  return answerId;

}