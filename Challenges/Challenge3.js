// Recursive Function Challenge

// Main Program
console.log(repeatString("hello", 3));
console.log(repeatString("hello", 1));
console.log(repeatString("hello", 0));

// Function Definitions
function repeatString(string, repeatNum){
  // if repeat is less than one, return empty string
  if (repeatNum < 1){
    return "";
  }

  return string + repeatString(string, repeatNum - 1);
}
