const instructorWithLongestName = function(instructors) {
  let longest = instructors[0].name;                     // Start at the first name in the array
  
  for (let i = 0; i < instructors.length; i++) {        // loop to check the whole array
    if (instructors[i].name.length > longest.length) {   // compares the index length with the current length
      longest = instructors[i];                         // when it is longer, changes the value of longest
    }
  }
  return longest;                                        // return the value out of the function
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));