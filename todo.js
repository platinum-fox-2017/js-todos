//todo.js File
const fs = require('fs');
const ToDoController = require('./controller').Controller;

// const dataFile = fs.readFileSync('./data.json', 'utf8');

fs.readFile('./data.json', 'utf8',(err,data)=> {
    if(err)
        throw err;
    let controller = new ToDoController(data);
    controller.check_input();
});
