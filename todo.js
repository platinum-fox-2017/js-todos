const ToDoController = require('./ToDoController');

let toDoController   = new ToDoController();
let myArgv           = process.argv;

var command = myArgv[2]
var command2 = myArgv[3]
var arrArgv =[]
for(let i = 4;i < myArgv.length;i++) {
    arrArgv.push(myArgv[i])
}

toDoController.start(command,command2,arrArgv);