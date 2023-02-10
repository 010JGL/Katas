const sumLargestNumbers = function(data) {
  let first = 0;
  let second = 0;  // declare values for the condition IF
  
  for (let i = 0; i < data.length; i++) {  // Loop thru data
    if (data[i] > first && data[i] !== second) { // if data index is bigger AND is not the same as second
      first = data[i]                             // first = data index and loops again
    }
  }
  for (let j = 0; j < data.length; j++) {         // second loop for second number
    if (data[j] > second && data[j] !== first) {  // checks for data bigger than second but not the same as first
      second = data[j]                            // register the higest value in second
    }
  }
  return first + second;           // add both together for total
  
};



console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));