// Task 1

localStorage.setItem("username", "Alex");
const username = localStorage.getItem("username");

console.log(username);
console.log(typeof username);

// Task 2

sessionStorage.setItem("username", "Sarah");
const username2 = sessionStorage.getItem("username");

console.log(username2);
console.log(typeof username2);

// Task 3

const user = {
  name: "Sarah",
  age: 30,
  city: "Cape Town",
};

const savedUser = JSON.stringify(user);

localStorage.setItem("user", savedUser);

const retrievedUser = localStorage.getItem("user");

const userObject = JSON.parse(retrievedUser);

console.log(userObject.name);
console.log(userObject.age);
console.log(userObject.city);
