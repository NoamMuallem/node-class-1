// remind empty array
var todos = [];

// remain function that return nothing
var addTodo = function (todo) {
  todos.push(todo);
};

var removeTodo = function (index) {
  // splice - give an index and amount of elements to remove
  todos.splice(index, 1);
};

var printTodos = function () {
  console.log(todos);
};

// remind invoking functions
addTodo("buy milk");
addTodo("walk the dog");
addTodo("fix TV");
addTodo("buy orange juice");
addTodo("fix the car");
printTodos();

console.log("after deleting");
printTodos();
