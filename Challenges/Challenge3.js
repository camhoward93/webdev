// Recursive Function Challenge

// Main Program
console.log(repeatString("hello", 3));
console.log(repeatString("hello", 1));
console.log(repeatString("hello", 0)); // doesn't print anything

console.log(repeatStringWithUndefined("hello", 3));
console.log(repeatStringWithUndefined("hello", 1));
console.log(repeatStringWithUndefined("hello", 0)); // shows that it is undefined

// Function Definitions
function repeatString(string, repeatNum){
  // if repeat is less than one, return empty string
  if (repeatNum < 1){
    return "";
  }

  return string + repeatString(string, repeatNum - 1);
}

function repeatStringWithUndefined(string, repeatNum){
  // if repeat is less than one, return undefined
  if (repeatNum < 1){
    return undefined;
  }

  if (repeatStringWithUndefined(string, repeatNum - 1) != null){
    return string + repeatStringWithUndefined(string, repeatNum - 1);
  }
  else{
    return string;
  }
}
