
const TodoController = require('./controllers/TodoController.js');
const argv = process.argv;

const command = argv[2];
const flag = argv[3];
const todo = new TodoController(command,flag);
todo.runCommand();
