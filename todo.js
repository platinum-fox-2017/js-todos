let Controller = require('./controller')

class Todo {
    static processInput(task, data) {
        if (task === 'help') {
            Controller.viewHelp();
        } else if (task === 'list') {
            Controller.viewList();
        } else if (task === 'add') {
            Controller.addData(data);
        } else if (task === 'findById') {
            Controller.findId(data);
        } else if (task === 'delete') {
            Controller.deleteId(data);
        } else if (task === 'complete') {
            Controller.completeId(data);
        } else if (task === 'uncomplete') {
            Controller.uncompleteId(data);
        } else {
            console.log('node todo.js # will can help you')
            console.log('node todo.js help')
        }
    }
}

let task = process.argv[2]
let data = process.argv[3]

Todo.processInput(task, data)