const multiplicationTable = function(maxValue) {
  let result = 0; // create a variable for number
  let finalResult = ""; // create a variable for a string. To console log with spaces
  for (let i = 1; i <= maxValue; i++) { //First loop for the initial data. The loops starts at 1 and goes up until we get to MAXVALUE
    for (let y = 1; y <= maxValue; y++) { // loop inside of the loop to add up everytime we go ++
      result = i * y;  // get the result number
      finalResult = finalResult + result + " "; // Creates a line with our finalResult + the new result and adds a space in between
    }
    finalResult = finalResult  + "\n"; // Makes a new line after the loop
  }
  return finalResult; // returns the value out of the function
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));