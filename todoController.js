const TodoModel = require('./todoModel');
const TodoView = require('./todoView');


class TodoController{

    static run(command, content, tags){
        let model = new TodoModel();
        switch(command){
            case 'help' : TodoView.help(model.commandList()); break;
            case 'list' : model.readFile(TodoView.list); break;
            case 'add'  : model.pushNewTask(content, model.writeFile, TodoView.add); break;
            case 'findById' : model.findById(content, TodoView.findById); break;
            case 'delete' : model.deleteTask(content, model.writeFile, TodoView.delete); break;
            case 'complete' : model.taskStatus(true, content, model.writeFile, TodoView.list); break;
            case 'uncomplete' : model.taskStatus(false, content, model.writeFile, TodoView.list); break;
            case 'list:created' : model.sortingTask(content, TodoView.list); break;
            case 'list:completed' : model.sortingByCompleted(1, TodoView.list); break;
            case 'list:uncompleted' : model.sortingByCompleted(2, TodoView.list); break;
            case 'tag' : model.addTags(content, tags, model.writeFile, TodoView.addTags); break;
            case 'filter' : model.filter(content, TodoView.filtered)
            default : TodoView.help(model.commandList()); 
        }
    }
}

module.exports = TodoController;