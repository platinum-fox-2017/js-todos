const ToDoModel = require('./ToDoModel');
const ToDoView  = require('./ToDoView');

class ToDoController {
    constructor() {
        this.toDoView       = new ToDoView();
        this.toDoModelList  = new ToDoModel.List();
    }

    start(options,otherTask) {
        switch(options) {
            case "help":
                this.toDoView.showHelp();
                break;
            case "list":
                this.toDoModelList.readData(this.toDoView.showList);
                break;
            case "add":
                this.toDoModelList.storeTask(otherTask,this.toDoView.storeTask); 
                break;
            case "findById":
                this.toDoModelList.findTaskById(otherTask,this.toDoView.showById);
                break;
            case "delete":
                this.toDoModelList.deleteTaskById(otherTask,this.toDoView.deleteTask);
                break;
            case "complete":
                this.toDoModelList.completeTask(otherTask,this.toDoView.showList);
                break;
            case "uncomplete":
                this.toDoModelList.unCompleteTask(otherTask,this.toDoView.showList);
                break;
        }
    }
}

module.exports = ToDoController;