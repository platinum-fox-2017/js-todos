const ToDoController = require('./ToDoController');

let toDoController   = new ToDoController();
let myArgv           = process.argv;

toDoController.start(myArgv[2],myArgv[3]);

// let jsondata = [
//     {"halo" : "ya"},
//     {"apakabs" : "baik"}
// ]

// let str = JSON.stringify(jsondata)
// console.log(str);