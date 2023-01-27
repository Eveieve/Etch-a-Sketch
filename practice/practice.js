// To-do list ul element
const todoList = document.querySelector("ul");

// Create new to-do
const newTodo = document.createElement("li");
newTodo.textContent = "Do homework";
// Add new todo to the end of the list
todoList.appendChild(newTodo);
