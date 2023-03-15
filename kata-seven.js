const checkAir = function(samples, threshold) {
  let count = 0;                              // create a variable to start counting at 0
    
  for (let i = 0; i < samples.length; i++) {  // loop to find the number of dirty in the array
    if (samples[i] === 'dirty') {              // if the index is === value
      count++;                                // adds one for every time
    }
  }
  if ((count / samples.length) >= threshold) {   // check if condition is met, outside of the loop. count is divided by the length for the right value
    return "Polluted";
  } else {
    return "Clean";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));