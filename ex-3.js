// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here

console.log(Math.min(...scores));
for (let score in scores) {
  if ((scores[score] = Math.min(...scores))) {
    minScore = scores[score];
    break;
  }
}
console.log(minScore);
