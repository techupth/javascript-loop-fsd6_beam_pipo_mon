// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here

console.log(companyName[0]);
console.log(companyName.length);
console.log(companyName[14]);

console.log(reversedCompanyName);
for (let char in companyName) {
  // name = reversedCompanyName + ลำดับของชื่อเรียงจาก ((ลำดับทั้งหมดที่มี ลบด้วย char(ตอนแรกจะเป็น0)) -1)
  reversedCompanyName =
    reversedCompanyName + companyName[companyName.length - char - 1];
  // (15-char)-1 = 15-1 = 14 = ตัว้ทายสุด (d)
  console.log(companyName[char]);
  console.log(reversedCompanyName);
}
console.log(reversedCompanyName);
