const camelCase = function(input) {
  let newStr = "";                         // Create a new string
  
  if (input) {
    let wordArr = input.split(/[ ]/);     // split a string into an array, when there is a space. Called wordArr
    for (let i in wordArr) {              // creates a loop in the array
      if (i > 0) {                        // Starts with 2nd word, we dont need first word capitalized
        newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);  // we add the words together, charAt says the first letter of the word. Uppercase is used to capitalize
        
      } else {
        newStr += wordArr[i];              //if its the first word we dont capitalize
      }
    }
  } else {
    return newStr;                        // returns newStr out of the loop
  }
  return newStr;                          // returns newStr out of the function
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));