// show and explain package.json
// show and explain node_modules
// delete node modules and reinstall all the dependencies
import chalk from "chalk";
import figlet from "figlet";
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
    // past from npm page
    figlet(
      i + 1 + ". " + todos[i],
      {
        font: "slant",
        horizontalLayout: "full",
        verticalLayout: "default",
        width: 200,
        whitespaceBreak: true,
      },
      // explain call back function
      function (err, data) {
        if (err) {
          console.log("Something went wrong...");
          console.dir(err);
          return;
        }
        // you can style this too
        console.log(chalk.blue.bgGrey(data));
      }
    );
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
