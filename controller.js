//Controller
//Connect the Model and View
const ToDoModel = require('./model').Model;
const ToDoView = require('./view').View;

class ToDoController {
    constructor(data) {
        this._todoCommand = process.argv[2];
        this._todoOption = process.argv[3];
        this._model = new ToDoModel(data);
        this._task = this._model.task;
    }

    check_input() {
        switch (this._todoCommand) {
            case 'help':
                ToDoView.help();
                break;
            case 'tag':
                this._model.tag(this._todoOption,process.argv.slice(4));
                ToDoView.tag(this._task[this._todoOption-1].task,process.argv.slice(4))
                break;
            case 'list':
                ToDoView.list(this._task);
                break;
            case 'list:created':
                ToDoView.list_created(this._task,this._todoOption);
                break;
            case 'list:completed':
                ToDoView.list_completed(this._task);
                break;
            case 'filter':
                ToDoView.list_filter(this._task,this._todoOption);
                break;
            case 'add':
                if(this._todoOption == undefined){
                    console.log("[Error] No To Do List Added\n[Command] node todo.js add <task>");
                    return 0;
                }
                else{
                    ToDoView.add(this._todoOption);
                    this._model.add(this._todoOption);
                }
                break;
            case 'findById':
                if(this._todoOption == undefined){
                    console.log("[Error] No To Do List Id to find\n[Command] node todo.js findById <task_id>");
                    return 0;
                }
                else{
                    ToDoView.findById(this._todoOption, this._task[this._todoOption-1]);
                }
                break;
            case 'delete':
                if(this._todoOption == undefined){
                    console.log("[Error] No To Do List Id to Delete\n[Command] node todo.js delete <task_id>");
                    return 0;
                }
                else{
                    ToDoView.delete(this._task[this._todoOption-1].task);
                    this._model.delete(this._todoOption);
                }
                break;
            case 'complete':
                if(this._todoOption == undefined || this._todoOption-1>=this._task.length){
                    console.log("[Error] No To Do List Id to Assign as Complete\n[Command] node todo.js complete <task_id>");
                    return 0;
                }
                else{
                    this._model.complete(this._todoOption);
                    ToDoView.list(this._task);
                }
                break;
            case 'uncomplete':
                if(this._todoOption == undefined || this._todoOption-1>=this._task.length){
                    console.log("[Error] No To Do List Id to Assign as Uncomplete\n[Command] node todo.js uncomplete <task_id>");
                    return 0;
                }
                else{
                    this._model.uncomplete(this._todoOption);
                    ToDoView.list(this._task);
                }
                break;
            default:
                ToDoView.help();
                break;
        }
    }
}

module.exports = {Controller: ToDoController};
