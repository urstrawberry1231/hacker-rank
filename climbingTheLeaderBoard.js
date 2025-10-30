function climbingLeaderboard(ranked, player) {
    let uniqueRanked = [...new Set(ranked)];
    let result = [];
    let index = uniqueRanked.length - 1; 

    for (let i = 0; i < player.length; i++) {
        let score = player[i];

        while (index >= 0 && score >= uniqueRanked[index]) {
            index--;
        }
        result.push(index + 2);
    }

    return result;
}

let ranked1 = [100, 100, 50, 40, 40, 20, 10];
let player1 = [5, 25, 50, 120];
console.log(climbingLeaderboard(ranked1, player1)); 

let ranked2 = [100, 90, 90, 80, 75, 60];
let player2 = [50, 65, 77, 90, 102];
console.log(climbingLeaderboard(ranked2, player2)); 