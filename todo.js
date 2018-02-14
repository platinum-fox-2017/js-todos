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
}