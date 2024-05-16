// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";

// Start coding here

for (let letter in companyName) {
  letter++;
  console.log("Number " + letter + " character is " + companyName[letter - 1]);
}
