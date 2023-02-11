const vowels = ["a","e","i","o","u"]   //declare values to look for

const numberOfVowels = function(data) {
  let count = 0;        // start a count at 0
  for (let letter of data) {  // Search value on each iteration
    if (vowels.includes(letter))  // search for the vowels on each letter
    count++     // adds one to the count
    }
    return count; // returns the value out of the function
  };
  
  


console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

