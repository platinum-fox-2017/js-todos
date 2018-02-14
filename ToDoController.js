const ToDoModel = require('./ToDoModel');
const ToDoView  = require('./ToDoView');

class ToDoController {
    constructor() {
        this.toDoView       = new ToDoView();
        this.toDoModelList  = new ToDoModel.List();
    }

    start(options,param1,arrArgv) {
        switch(options) {
            case "help":
                this.toDoView.showHelp();
                break;
            case "list":
                this.toDoModelList.readData(this.toDoView.showList);
                break;
            case "add":
                this.toDoModelList.storeTask(param1,this.toDoView.storeTask); 
                break;
            case "findById":
                this.toDoModelList.findTaskById(param1,this.toDoView.showById);
                break;
            case "delete":
                this.toDoModelList.deleteTaskById(param1,this.toDoView.deleteTask);
                break;
            case "complete":
                this.toDoModelList.completeTask(param1,this.toDoView.showList);
                break;
            case "uncomplete":
                this.toDoModelList.unCompleteTask(param1,this.toDoView.showList);
                break;
            case "list:created":
                this.toDoModelList.readDataSorted(param1,this.toDoView.showList);                
                break;
            case "list:completed":
                this.toDoModelList.readCompletedDataSorted(param1,this.toDoView.showList);                
                break;        
            case "tag":
                this.toDoModelList.createTag(param1,arrArgv,this.toDoView.addTag);
                break;  
            case "filter":
                this.toDoModelList.filterTag(param1, this.toDoView.filteredTag);
                break;
        }
    }
}

module.exports = ToDoController;