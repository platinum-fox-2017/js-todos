
const TodoController = require('./controllers/TodoController.js');
const argv = process.argv;

const command = argv[2];
const todo = new TodoController(command);
todo.runCommand();
