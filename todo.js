const View = require('./view.js')
const Model = require('./model.js')
const fs = require('fs')

let argv = process.argv

class Controller {
    static run (){
        switch(argv[2]){
            case 'help': View.help(); break;
            case 'list': Model.list(View.list); break;
            case 'list:created': Model.create(argv[3], View.create); break;
            case 'list:completed': Model.completedList(argv[3], View.completedList); break;
            case 'list:outstanding': Model.outstandingList(argv[3], View.outstandingList); break;
            case 'add': Model.add(argv[3], View.add); break;
            case 'findById': Model.findId(argv[3], View.findId); break;
            case 'complete': Model.complete(argv[3],View.list); break;
            case 'uncomplete': Model.uncomplete(argv[3], View.list);break;
            case 'filter': Model.filter(argv[3], View.filter);break;
            case 'delete': Model.delete(argv[3], View.delete); break;
            case 'tag': 
                let tag = argv.splice(4, argv.length);
                Model.tag(argv[3], tag, View.tag, View.duplicateTag);
                break;
            default: console.log(`$ node todo.js help`); break;
        
        }
    }
}

Controller.run()
