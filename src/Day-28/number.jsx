const fs = require("fs");

// Numbers
const numbers = `
09898989898
919890989878
+91-9876789876
9199889892
989191919191
`;

// Method to format indian phone no
const formatIndianPhoneNumber = (phoneNumber = "") => {
  if (!phoneNumber) return "";

  // Remove all non-numeric characters
  let cleanedNumber = phoneNumber.replace(/[^\d]/g, "");

  // If number starts with '91' and has more than 10 digits, remove '91'
  if (cleanedNumber.length > 10 && cleanedNumber.startsWith("91")) {
    cleanedNumber = cleanedNumber.substring(2);
  }

  // If number starts with '0', remove leading zero
  if (cleanedNumber.startsWith("0")) {
    cleanedNumber = cleanedNumber.substring(1);
  }

  // Ensure the final number is exactly 10 digits, otherwise return an empty string (invalid)
  return cleanedNumber.length === 10 ? cleanedNumber : "";
};
// Splitting no's using new line as an array
const numberArr = numbers.split("\n");
console.log(numberArr);

// Iterate & format all no
const formattedNumbers = numberArr.reduce((acc, current) => {
  const sanitizedNumber = formatIndianPhoneNumber(current);
  if (sanitizedNumber && sanitizedNumber.length === 10) {
    acc.push(`https://wa.me/+91${sanitizedNumber}`);
    //acc.push(`+91${sanitizedNumber}`);
  }
  return acc;
}, []);

// Print No
console.log(formattedNumbers);

// Save all formatted to file as a JSON
fs.writeFile(
  "./whatsAppLinks.json",
  JSON.stringify(formattedNumbers, null, 4),
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been created");
  }
);
