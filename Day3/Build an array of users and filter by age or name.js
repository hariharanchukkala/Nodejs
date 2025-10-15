const users = [
  { name: "Hari", age: 18 },
  { name: "lavayana", age: 22 },
  { name: "neha", age: 19 },
  { name: "kittu", age: 25 }
];
const majors = users.filter(user => user.age >= 20);
console.log("Users age 20 or older:", majors);
const namesStartingWithH = users.filter(user => user.name.startsWith("H"));
console.log("Users whose name starts with 'H':", namesStartingWithH);
