const urlEncode = function(text) {
  let string = [];   // creat an empty array
  
  for (let i = 0; i < text.length; i++) {  // loop thru text one character at the time
    if (text[i] === " ") { // if character is space
      string += "%20";   // change it to %20
    } else {
      string += (text[i]);  //if not, add the original text index character
    }

  }
  return string;  // returns value out of the function
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));