const Model = require('../models/model')
const View = require('../views/view')

class Controller{
    static checkInput(input, command){
        switch(input){
            case 'help': 
                View.showHelp(); break;              
            case 'list':
                let list = Model.readList();
                View.showList(list); break;
            case 'add':
                Model.addContent(command, View.addData);
               break;
            case 'findById':
                let id = Model.findById(command);
                View.showById(id); break;
            case 'delete':
                let task = Model.deleteById(command);
                View.deleteById(task); break;
            case 'complete':
                let complete = Model.completeById(command);
                View.showList(complete); break;
            case 'uncomplete':
                let uncomplete = Model.uncompleteById(command);
                View.showList(uncomplete); break;
            case 'list:created':
                let created = Model.sortByCreated();
                View.showList(created); break;
            case 'list:outstanding':
                let outstanding = Model.outstanding(command);
                View.showList(outstanding); break;
            case 'list:completed':
                let completed = Model.complete();
                View.showCompletedTask(completed); break;
            case 'tag':
                let tag = Model.tag(command[0], command.slice(2));
                View.showTagedTask(tag,command[0]); break;
            case 'filter':
                let filter = Model.filterTag(command);
                View.showFilter(filter); break;
            default :
                View.showHelp(); break;
        }

    }
}

module.exports = Controller