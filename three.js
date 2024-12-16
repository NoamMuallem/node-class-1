// lets get input from the user!
import fs from "fs";

var readTodosFromFile = function () {
  var fileData = fs.readFileSync("./tasks.json", {
    encoding: "utf-8",
  });

  return JSON.parse(fileData);
};

var todos = readTodosFromFile();

var updateTodosFile = function () {
  fs.writeFileSync("./tasks.json", JSON.stringify(todos));
};

var addTodo = function (todo) {
  todos.push(todo);
  updateTodosFile();
};

var deleteTodo = function (index) {
  todos.splice(index, 1);
  updateTodosFile();
};

var printTodos = function () {
  for (var i = 0; i < todos.length; i++) {
    console.log(i + 1 + ". " + todos[i]);
  }
};

// first, do console.log
// console.log(process.argv);

var commend = process.argv[2];
var argument = process.argv[3];

if (commend == "add") {
  addTodo(argument);
  printTodos();
} else if (commend == "delete") {
  deleteTodo(Number(argument - 1));
  printTodos();
} else if (commend === "print") {
  printTodos();
}
