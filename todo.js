class TodoModel{
    constructor(){

    }
}

class TodoView{
    
    static help(){
        let commands = ['', 'help', 'list', 'add <task_content>', 'findById <task_id>', 'delete <task_id>', 'complete <task_id>', 'uncomplete <task_id>']
        let result = []
        for (let i=0; i<commands.length; i++){
            result.push(`node todo.js ${commands[i]}`)
        }
        return result.join('\n')
    }
    
}

class TodoController{
    static run(command, id){
        switch(command){
            case undefined :
            case 'help' : return TodoView.help(); break;
        }
    }
}

let myArgv = process.argv;
let todo = TodoController.run(myArgv[2], myArgv[3]);

console.log(todo);