// Exercise #1: Decrease the Student Scores
let scores = [89, 70, 60, 50, 100, 71];

// Start coding here
for (let value in scores) {
  scores[value] = scores[value] - 10;
}
console.log(scores);
