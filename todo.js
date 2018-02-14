const fs = require('fs');

class TodoModel{
    constructor(){
        this.file = JSON.parse(fs.readFileSync('./data.json', 'UTF-8'));
    }

    commandList(){
        let commands = ['', 'help', 'list', 'add <task_content>', 'findById <task_id>', 'delete <task_id>', 'complete <task_id>', 'uncomplete <task_id>'];
        return commands;
    } 
    readFile(){
        return this.file;
    }
}

class TodoView{

    static help(commands){
        let commandList = []
        for (let i=0; i<commands.length; i++){
            commandList.push(`node todo.js ${commands[i]}`)
        }
        return commandList.join('\n')
    }

    static list(file){
        let task = [];
        for(let i=0; i<file.length; i++){
            task.push(`${i+1}. ${file[i].task}`)
        }

        return task.join('\n');
    }
}

class TodoController{
    
    static run(command, id){
        let model = new TodoModel();
        switch(command){
            case undefined :
            case 'help' : return TodoView.help(model.commandList()); break;
            case 'list' : return TodoView.list(model.readFile()); break;

        }
    }
}

let myArgv = process.argv;
let todo = TodoController.run(myArgv[2], myArgv[3]);

console.log(todo);