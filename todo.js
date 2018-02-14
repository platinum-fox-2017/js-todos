const Controller = require('./controller.js')

class Todo{
    constructor(){}

    static helpFunction(){
        Controller.helpFunction()        
    }

    static listFunction(){
        Controller.listFunction()
    }

    static addFunction(addedData){
        
        if(addedData.length === 0){
            console.log(`Input the added list after add <your new list>`)
        }else{
            Controller.addFunction(addedData)
        }
    }

    static findByIdFunction(id){
        let numberId = Number(id)
        if(id === undefined){
            console.log("Input the Id after findById <id>")
        }else{
            Controller.findByIdFunction(numberId)
        }
    }

    static deleteFunction(id){
        let numberId = Number(id)
        if(id === undefined){
            console.log("Input the ID after delete <id>")
        }else[
            Controller.deleteFunction(numberId)
        ]
    }

    static completeFunction(id){
        let numberId = Number(id)
        if(id === undefined){
            console.log(`Input the ID after complete <id>`)
        }else{
            Controller.completeFunction(numberId)
        }
    }

    static unCompleteFunction(id){
        let numberId = Number(id)
        if(id === undefined){
            console.log(`Input the ID after uncomplete <id>`)
        }else{
            Controller.unCompleteFunction(numberId)
        }
    }

    static createdSort(sort){
        let standSort = sort.toLowerCase()
        Controller.createdSort(standSort)   
    }

    static completeSort(sort){
        
        let standSort = sort.toLowerCase()
        Controller.completeSort(standSort)
    }

    static addTag(id,tags){
        let numberId = Number(id)
        if(id === undefined || tags.length === 0){
            console.log(`Input the ID and Tags name after tag <id> <name tags>`)
        }else{
            Controller.addTag(numberId,tags)
        }
    }

    static filterFunction(tag){
        if(tag === undefined){
            console.log(`Input the tag after filter <tag>`)
        }else{
            Controller.filterFunction(tag)
        }
    }
}

let argv = process.argv.slice(2,process.argv.length)
let addArgv = argv.slice(1,argv.length)
let command = argv[0]


switch(true) {
    case (command === "help"):
        Todo.helpFunction()
        break;
    case (command === "list"):
        Todo.listFunction()
        break;
    case (command === 'add'):
        Todo.addFunction(addArgv)
        break;
    case (command === 'findById'):
        Todo.findByIdFunction(argv[1])
        break;
    case(command === 'delete'):
        Todo.deleteFunction(argv[1])
        break;
    case (command === 'complete'):
        Todo.completeFunction(argv[1])
        break;
    case(command  === 'uncomplete'):
        Todo.unCompleteFunction(argv[1])
        break;
    case(command === 'list:created'):
        Todo.createdSort(argv[1])
        break;
    case(command === 'list:completed'):
        Todo.completeSort(argv[1])
        break;
    case(command === 'tag'):
        Todo.addTag(argv[1],argv.slice(2,argv.length))
        break;
    case(command === "filter"):
        Todo.filterFunction(argv[1])
        break;
    default:
        Todo.helpFunction()
}