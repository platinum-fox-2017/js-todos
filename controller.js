"use stirct"
const ToDoModel = require("./model.js");
const ToDoView = require("./view.js");

class ToDoController {
    static commandController(argvArr) {
        let command = argvArr[2];
        let additional = argvArr[3];
        let option = '';

        if(command !== undefined){
            command = command.toLowerCase();
            if(command.indexOf(':')>0) {
                option = command.slice(command.indexOf(':')+1,command.length)
                command = command.slice(0,command.indexOf(':'));
            }
        }

        if(command === 'tag') {
            option = []
            for(let i = 4; i<argvArr.length; i++) {
                option.push(argvArr[i])
            }
        }
        return [command, additional, option];
    }
    
    static control(command, additional, option) {
        switch(command) {
            case 'list':
                if(additional === 'created') {ToDoModel.sortByCreated(option, ToDoView.task)} 
                else if(additional === 'completed') {ToDoModel.sortByCompleted(option, ToDoView.task)} 
                else {ToDoModel.list(ToDoView.task);}
                break;
            case 'add':
                ToDoModel.add(option,ToDoView.added);
                break;
            case 'findbyid':
                ToDoModel.findByID(option, ToDoView.task, ToDoView.idNotExist)
                break;
            case 'delete':
                ToDoModel.deleteByID(option, ToDoView.delete, ToDoView.idNotExist)
                break;
            case 'complete':
                ToDoModel.complete(option, true, ToDoView.task, ToDoView.idNotExist);
                break
            case 'uncomplete':
                ToDoModel.complete(option, false, ToDoView.task, ToDoView.idNotExist);
                break;
            case 'tag':
                ToDoModel.tag(option, additional, ToDoView.tagAdded, ToDoView.tagExisted)
                break;
            case 'filter':
                ToDoModel.filter(additional, ToDoView.filter)
                break;
            default : ToDoView.help();
        }
    }
}

module.exports = ToDoController;