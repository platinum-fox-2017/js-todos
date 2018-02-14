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
                Model.addContent(command);
                View.addData(command); break;
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
            default :
                console.log('inputan salah')
        }

    }
}

module.exports = Controller