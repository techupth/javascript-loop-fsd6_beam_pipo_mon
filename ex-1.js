// Exercise #1: Decrease the Student Scores
let scores = [89, 70, 60, 50, 100, 71];
let newScores = [];

// Start coding here
for (let score of scores) {
  //   console.log(score);
  score = score - 10;
  //   console.log(score);
  newScores.push(score);
}

console.log(newScores);
