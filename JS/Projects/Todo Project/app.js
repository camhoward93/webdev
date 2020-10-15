// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todos");

// Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCheck);
filterOption.addEventListener("click", filterTodo);

// Functions
// addTodo: Adds a todo list item based on user input
function addTodo(e) {
  // prevent form from submitting
  e.preventDefault();

  // add todo to local storage
  saveLocalTodos(todoInput.value);

  // create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // create todo li and add to div
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // create check mark button and add to div
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // create trash button and add to div
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // add todo div to todo list
  todoList.appendChild(todoDiv);

  // clear input field
  todoInput.value = "";
}

// deleteOrCheck: Handles user input to delete or check a todo list item
function deleteOrCheck(e) {
  const item = e.target;

  // delete
  if (item.classList[0] === "trash-btn") {
    // assign the todo item
    const todo = item.parentElement;

    // remove todo from local storage
    removeLocalTodo(todo);

    // animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // check
  else if (item.classList[0] === "complete-btn") {
    // toggle completed on the todo list item
    item.parentElement.classList.toggle("completed");
  }
}

// filterTodo: Filters the todo list
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      default:
        break;
    }
  });
}

// checkLocalTodos: Helper function to return node list of local storage todos
function checkLocalTodos() {
  // check for preexisting local storage
  let todos;
  if (localStorage.getItem("todos") === null) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem("todos"));
  }
}

// saveLocalTodos: Saves the todo list to local storage
function saveLocalTodos(todo) {
  // check todos
  let todos = checkLocalTodos();

  // push todo to local storage
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// getTodos: Loads the todo list from local storage
/* Note: There is a fair amount of code reuse here from addTodo. One
         potential fix would be to change addTodo to take additional
         parameters such as a bool for on page load and adjust functionality.

         This also doesn't maintain the completed status of each list item.
         Another local storage could be added to implement this in a similar
         manner to the todo local storage, but this is such a simple todo list
         tool that I am going to leave that for anyone to implement on their own.
*/
function getTodos() {
  // check todos
  let todos = checkLocalTodos();

  // loop over the todo list
  todos.forEach(function (todo) {
    // create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // create todo li and add to div
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // create check mark button and add to div
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // create trash button and add to div
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // add todo div to todo list
    todoList.appendChild(todoDiv);
  });
}

// removeLocalTodo: Removes the todo from the local storage
function removeLocalTodo(todo) {
  // check todos
  let todos = checkLocalTodos();

  // remove the todo element and set the local storage
  const todoIndex = todos.indexOf(todo.children[0].innerText);
  todos.splice(todoIndex, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
