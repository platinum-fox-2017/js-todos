//Controller
//Connect the Model and View
const ToDoModel = require('./model').Model;
const ToDoView = require('./view').View;

class ToDoController {
    constructor() {
        this._todoCommand = process.argv[2];
        this._todoOption = process.argv[3];
    }

    check_input() {
        switch (this._todoCommand) {
            case 'help':
                ToDoView.help();
                break;

            case 'list':
                ToDoModel.read(ToDoView.list);
                break;

            case 'tag':
                ToDoModel.write(ToDoModel.tag,ToDoView.tag,this._todoOption,process.argv.slice(4));
                break;

            case 'list:created':
                ToDoModel.read(ToDoView.list_created,this._todoOption);
                break;

            case 'list:completed':
                ToDoModel.read(ToDoView.list_completed);
                break;

            case 'filter':
                ToDoModel.read(ToDoView.list_filter,this._todoOption);
                break;

            case 'add':
                if(this._todoOption == undefined){
                    console.log("[Error] No To Do List Added\n[Command] node todo.js add <task>");
                    return 0;
                }
                else{
                    ToDoModel.write(ToDoModel.add,ToDoView.add,this._todoOption);
                }
                break;

            case 'findById':
                if(this._todoOption == undefined){
                    console.log("[Error] No To Do List Id to find\n[Command] node todo.js findById <task_id>");
                    return 0;
                }
                else{
                    ToDoModel.read(ToDoView.findById,this._todoOption);
                }
                break;

            case 'delete':
                if(this._todoOption == undefined){
                    console.log("[Error] No To Do List Id to Delete\n[Command] node todo.js delete <task_id>");
                    return 0;
                }
                else{
                    ToDoModel.write(ToDoView.delete,ToDoModel.delete,this._todoOption);
                }
                break;

            case 'complete':
                if(this._todoOption == undefined){
                    console.log("[Error] No To Do List Id to Assign as Complete\n[Command] node todo.js complete <task_id>");
                    return 0;
                }
                else{
                    ToDoModel.write(ToDoModel.complete,ToDoView.list,this._todoOption);
                }
                break;

            case 'uncomplete':
                if(this._todoOption == undefined){
                    console.log("[Error] No To Do List Id to Assign as Uncomplete\n[Command] node todo.js uncomplete <task_id>");
                    return 0;
                }
                else{
                    ToDoModel.write(ToDoModel.uncomplete,ToDoView.list,this._todoOption);
                }
                break;

            default:
                ToDoView.help();
                break;
        }
    }
}

module.exports = {Controller: ToDoController};
