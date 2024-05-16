// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for (let i = companyName.length; i > 0; i--) {
  console.log(companyName[i - 1]);
  reversedCompanyName += companyName[i - 1];
}

console.log(reversedCompanyName);
