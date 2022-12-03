// Callback Function Challenge

// Declare Variables
const students = [
  { name: "Lakota", skilled: false, teeth: 8 },
  { name: "Mitchell", skilled: true, teeth: 32 },
  { name: "Cameron", skilled: true, teeth: 128 }
];

// Main Program
console.log(getStudents(students, searchCriterion));

// Function Definitions
function getStudents(students, searchCriterion){
  // filter the array based on the criterion and return just the name of the students
  return students.filter(student => searchCriterion(student)).map(student => student.name);
}

function searchCriterion(student){
  return (student.skilled === true);
}
