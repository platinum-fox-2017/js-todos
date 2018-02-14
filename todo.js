let Controller = require('./controller')

class Todo {
    static processInput(task, data, tag_1, tag_2) {
        let filter;
        if (task.indexOf('filter:') !== -1) {
            filter = 'filter'
        }

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
        } else if (task === 'list:created') {
            Controller.createdList();
        } else if ( task === 'list:outstanding' && (data === 'asc' || data === 'desc')) {
            Controller.createdList(data);
        } else if (task === 'list:complete' && (data === 'asc' || data === 'desc')) {
            Controller.sortListStatus(data);
        } else if (task === 'tag') {
            Controller.addTag(data, tag_1, tag_2);
        } else if (filter) {
            let taskData = task.split(':')[1]
            Controller.filterTag(taskData)
        } else {
            console.log('node todo.js # will can help you')
            console.log('node todo.js help')
        }
    }
}

let task = process.argv[2]
let data = process.argv[3]

let tag_1 = process.argv[4]
let tag_2 = process.argv[5]

Todo.processInput(task, data, tag_1, tag_2)