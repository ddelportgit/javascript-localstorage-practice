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

// Task 4

const tasks = [
  { id: 1, title: "Learn JavaScript", completed: false },
  { id: 2, title: "Practice React", completed: false },
];

localStorage.setItem("tasks", JSON.stringify(tasks));

const retrievedTasks = JSON.parse(localStorage.getItem("tasks"));

retrievedTasks[0].completed = true;

localStorage.setItem("tasks", JSON.stringify(retrievedTasks));

const finalTasks = JSON.parse(localStorage.getItem("tasks"));

console.log(finalTasks[0]);
console.log(finalTasks[1]);
