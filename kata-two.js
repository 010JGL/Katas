const conditionalSum = function(values, condition) {
  let data = 0;
  
  for (let i = 0; i < values.length; i++) {                // loop thru data set *values*
    if (condition === "even" && values[i] % 2 === 0) {     // conditions to follow
      data += values[i];                                   // adds values together if conditions are met
            
    } else if (condition === "odd" && values[i] % 2 !== 0) {  // different conditions from above
      data += values[i];
    }
    
  }
  return data;
};


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));