const fs = require('fs');

class TodoModel{
    constructor(){
        this.file = JSON.parse(fs.readFileSync('./data.json', 'UTF-8'));
        this.latestId = this.file[this.file.length-1].id;
    }

    commandList(){
        let commands = ['', 'help', 'list', 'add <task_content>', 'findById <task_id>', 'delete <task_id>', 'complete <task_id>', 'uncomplete <task_id>'];
        return commands;
    }

    readFile(callback){
        fs.readFile('./data.json', (err, data) => {
            let tasks = [];
            if (err) throw err;
            var dataMentah = JSON.parse(data);
            for(let i=0; i<dataMentah.length; i++){
                if(dataMentah[i].isCompleted){
                    tasks.push(`${i+1}. [x] ${dataMentah[i].task}`);
                }else{
                    tasks.push(`${i+1}. [ ] ${dataMentah[i].task}`);
                }
            }
            callback(tasks)
          });
    }
    
    pushNewTask(task, callback, callback2){
        let newTask = {
            id: this.latestId+1,
            task: task,
            isCompleted: false
        };
        fs.readFile('./data.json', (err, data) => {
            if (err) throw err;
            var taskArr = JSON.parse(data);
            taskArr.push(newTask);
            
            callback(JSON.stringify(taskArr)); //untuk write
            callback2(task); //untuk view
          });
    }

    writeFile(newFile, callback){
        fs.writeFile('./data.json', newFile, (err) => {
            if (err) throw err;
            
          });
    }

    findById(id, callback){
        fs.readFile('./data.json', (err, data) => {
            let tasks = '';
            if (err) throw err;
            var dataMentah = JSON.parse(data);
            for(let i=0; i<dataMentah.length; i++){
                if (dataMentah[i].id == id){
                    tasks = dataMentah[i].task;
                }
            }
            callback(id, tasks)
          });
    }

    deleteTask(id, callback, callback2){
        fs.readFile('./data.json', (err, data) => {
            let tasks = '';
            if (err) throw err;
            var dataOlah = JSON.parse(data);
            for(let i=0; i<dataOlah.length; i++){
                if (dataOlah[i].id == id){
                    tasks = dataOlah[i].task;
                    dataOlah.splice(i, 1);
                }
            }
            callback(JSON.stringify(dataOlah)); //untuk write
            callback2(tasks); //untuk view
          });
    }

    taskStatus(isCompleted, id, callback, callback2){
        fs.readFile('./data.json', (err, data) => {
            if (err) throw err;
            var dataOlah = JSON.parse(data);
            let tasks = [];
            for(let i=0; i<dataOlah.length; i++){
                if (dataOlah[i].id == id){
                    if(isCompleted){
                        dataOlah[i].isCompleted = true;
                    }
                    if(!isCompleted){
                        dataOlah[i].isCompleted = false;
                    }
                }
            }
            for(let i=0; i<dataOlah.length; i++){
                if(dataOlah[i].isCompleted){
                    tasks.push(`${i+1}. [x] ${dataOlah[i].task}`);
                }else{
                    tasks.push(`${i+1}. [ ] ${dataOlah[i].task}`);
                }
            }

            callback(JSON.stringify(dataOlah)); //untuk write
            callback2(tasks); //untuk view
          });
    }

}

class TodoView{

    static help(commands){
        let commandList = []
        for (let i=0; i<commands.length; i++){
            commandList.push(`node todo.js ${commands[i]}`)
        }
        console.log(commandList.join('\n'));
    }

    static list(file){
        console.log(file.join('\n'));
    }

    static add(task){
        console.log(`Added "${task}" to your TODO list`);
    }

    static findById(id, task){
        console.log(`${id}. ${task}`);
    }
    
    static delete(task){
        console.log(`Deleted "${task}" from your TODO list`);
    }
}

class TodoController{

    static run(command, content){
        let model = new TodoModel();
        switch(command){
            case undefined :
            case 'help' : return TodoView.help(model.commandList()); break;
            case 'list' : return model.readFile(TodoView.list); break;
            case 'add'  : return model.pushNewTask(content, model.writeFile, TodoView.add); break;
            case 'findById' : return model.findById(content, TodoView.findById); break;
            case 'delete' : return model.deleteTask(content, model.writeFile, TodoView.delete); break;
            case 'complete' : return model.taskStatus(true, content, model.writeFile, TodoView.list); break;
            case 'uncomplete' : return model.taskStatus(false, content, model.writeFile, TodoView.list); break;
        }
    }
}

let myArgv = process.argv;
let todo = TodoController.run(myArgv[2], myArgv[3]);