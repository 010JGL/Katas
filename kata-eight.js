const repeatNumbers = function(data) {
  let result = "";   // for the single value in the loop
  let finalResult = [];  // values when added together in an array

  for (let x = 0; x < data.length; x++) {  // loop for the arrays
    for (let y = 0; y < data[x][1]; y++) { // loop for values inside the arrays. at 2 because small arrays
      
      result = result + data[x][0];    // adds the first value to repeat
    
    }
    finalResult.push(result);    // adds result inside an array
    result = "";  // reset the result to initial value after a loop
  }
  return finalResult.join(", ");  // concat all the values and split them with ", "
    
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


