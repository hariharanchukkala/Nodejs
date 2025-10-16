//Object Destructuring
const user = {
  name: "Hari",
  age: 17,
  city: "Vijayawada"
};
const { name, age } = user;
console.log("Object Destructuring:");
console.log(name); // Hari
console.log(age);  // 18
console.log("--------------");
//Nested Object Destructuring
const student = {
  id: 101,
  details: {
    name: "Hari",
    course: "EVT",
    marks: {
      math: 85,
      physics: 90
    }
  }
};
const { details: { name: studentName, marks: { math, physics } } } = student;
console.log("Nested Object Destructuring:");
console.log(studentName); // Hari
console.log(math);        // 85
console.log(physics);     // 90
console.log("--------------");
//Array Destructuring
const numbers = [10, 20, 30, 40];
const [first, second, ...rest] = numbers;
console.log("Array Destructuring:");
console.log(first);  // 10
console.log(second); // 20
console.log(rest);   // [30, 40]
console.log("--------------");
//Nested Array Destructuring
const nestedArray = [1, [2, 3], 4];
const [one, [two, three], four] = nestedArray;
console.log("Nested Array Destructuring:");
console.log(one);   // 1
console.log(two);   // 2
console.log(three); // 3
console.log(four);  // 4
console.log("--------------");
//Combining Objects + Arrays
const people = {
  team: [
    { name: "Hari", role: "Leader" },
    { name: "Sita", role: "Member" }
  ]
};
const { team: [firstMember, secondMember] } = people;
console.log("Combining Objects + Arrays:");
console.log(firstMember.name);  // Hari
console.log(secondMember.role); // Member
console.log("--------------");
//Spread and Rest in Destructuring
const userInfo = { name: "Hari", age: 18, city: "Vijayawada", country: "India" };
const { name: userName, ...others } = userInfo;
console.log("Spread & Rest in Destructuring:");
console.log(userName); // Hari
console.log(others);   // { age: 18, city: "Vijayawada", country: "India" }
console.log("--------------");
//Template Literals with Destructuring
const person = { name: "Hari", age: 18, city: "Vijayawada" };
const { name: pName, city: pCity } = person;
console.log("Template Literals:");
console.log(`Hello, my name is ${pName} and I live in ${pCity}.`);
console.log("--------------");
