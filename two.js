// Lets make the tasks persist using the file system!
// *create a tasks.json file*
// *make sure that the package.json is set to "type": "module"*
// how to import modules
import fs from "fs";

// defined this
var readTodosFromFile = function () {
  var fileData = fs.readFileSync("./tasks.json", {
    encoding: "utf-8",
  });

  return JSON.parse(fileData);
};

// change this
var todos = readTodosFromFile();

// define this
var updateTodosFile = function () {
  fs.writeFileSync("./tasks.json", JSON.stringify(todos));
};

// update
var addTodo = function (todo) {
  todos.push(todo);
  updateTodosFile();
};

// update
var removeTodo = function (index) {
  todos.splice(index, 1);
  updateTodosFile();
};

// update
var printTodos = function () {
  console.log(todos);
};

addTodo("buy milk");
addTodo("walk the dog");
addTodo("fix TV");
addTodo("buy orange juice");
addTodo("fix the car");
printTodos();

removeTodo(1);
removeTodo(1);
removeTodo(1);
removeTodo(1);
console.log("after deleting");
printTodos();
