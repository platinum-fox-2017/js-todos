//todo.js File
const ToDoController = require('./controller').Controller;

// const dataFile = fs.readFileSync('./data.json', 'utf8');

let controller = new ToDoController();
controller.check_input();
