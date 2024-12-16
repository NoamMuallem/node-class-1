// explain what is npm
// there is functionality that is not unique to our app
// other people build solution, we can use them and build what is uniq to our app
import chalk from "chalk";
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
    console.log(chalk.blue(i + 1) + ". " + chalk.bgRed(todos[i]));
  }
};

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
