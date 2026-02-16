function sortObjectByAge (arr){

    const sortedArray = arr.sort((a,b)=> a.age - b.age)
    return sortedArray
}

console.log(sortObjectByAge([
    { name: "Ravi", age: 24 },
    { name: "Ankit", age: 19 },
    { name: "Suman", age: 30 },
    { name: "Priya", age: 22 },
    { name: "Neha", age: 27 }
  ]))


const people = [
  { name: "Ravi", age: 24 },
  { name: "Ankit", age: 19 },
  { name: "Suman", age: 30 },
  { name: "Priya", age: 22 },
  { name: "Neha", age: 27 }
];

