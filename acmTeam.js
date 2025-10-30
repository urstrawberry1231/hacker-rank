function acmTeam(topic) {
    let maxTopics = 0;
    let teamCount = 0;

    for (let i = 0; i < topic.length; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            let combined = 0;
            for (let k = 0; k < topic[i].length; k++) {
                if (topic[i][k] === '1' || topic[j][k] === '1') {
                    combined++;
                }
            }
            if (combined > maxTopics) {
                maxTopics = combined;
                teamCount = 1;
            } else if (combined === maxTopics) {
                teamCount++;
            }
        }
    }

    return [maxTopics, teamCount];
}

const topic = ["10101", "11100", "11010", "00101"];
const result = acmTeam(topic);
console.log(result[0]);
console.log(result[1]); 