import figlet from "figlet";
import fs from "fs";

var emojiPromise = (string) =>
  new Promise((resolve, reject) => {
    figlet(
      string,
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
          reject(err);
        }
        resolve(data);
      }
    );
  });

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

var printTodos = async function () {
  const data = await Promise.all(
    todos.map(async (todo, i) => await emojiPromise(i + 1 + ". " + todo))
  );
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
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
