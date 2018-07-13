const fs = require('fs');

class TodoModel{
    constructor(){
        this.file = JSON.parse(fs.readFileSync('./data.json', 'UTF-8'));
        this.latestId = this.file[this.file.length-1].id;
    }

    commandList(){
        let commands = ['', 'help', 'list', 'add <task_content>', 'findById <task_id>', 'delete <task_id>', 'complete <task_id>', 'uncomplete <task_id>', 'list:created asc', 'list:created desc', 'list:completed', 'list:uncompleted'];
        return commands;
    }

    readFile(callback){
        fs.readFile('./data.json', (err, data) => {
            if (err) throw err;
            let tasks = [];
            var dataMentah = JSON.parse(data);
            for(let i=0; i<dataMentah.length; i++){
                if(dataMentah[i].isCompleted){
                    tasks.push(`${dataMentah[i].id}. [x] ${dataMentah[i].task} (${dataMentah[i].createdAt})`);
                }else{
                    tasks.push(`${dataMentah[i].id}. [ ] ${dataMentah[i].task} (${dataMentah[i].createdAt})`);
                }
            }
            callback(tasks)
          });
    }
    
    pushNewTask(task, callback, callback2){
        let date = new Date();
        let newTask = {
            id: this.latestId+1,
            task: task,
            isCompleted: false,
            tags: [],
            createdAt: date.toString()            
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
                    tasks.push(`${dataOlah[i].id}. [x] ${dataOlah[i].task} (${dataOlah[i].createdAt})`);
                }else{
                    tasks.push(`${dataOlah[i].id}. [ ] ${dataOlah[i].task} (${dataOlah[i].createdAt})`);
                }
            }

            callback(JSON.stringify(dataOlah)); //untuk write
            callback2(tasks); //untuk view
          });
    }

    sortingTask(type, callback){
        fs.readFile('./data.json', (err, data) => {
            if (err) throw err;
            let tasks = [];
            let sortedTasks = [];
            var dataMentah = JSON.parse(data);
            switch(type){
                case undefined:
                case 'asc': 
                    for(let i=0; i<dataMentah.length; i++){
                        tasks.push(dataMentah[i]);
                    }
                    for(let i=1; i<tasks.length; i++){
                        for(let j=0; j<i; j++){
                            let asal = tasks[i];
                            let pembanding = tasks[j];
                            if(tasks[j].createdAt>tasks[i].createdAt){
                                tasks[j] = asal;
                                tasks[i] = pembanding;
                            }
                        }
                    }
                    for(let i=0; i<tasks.length; i++){
                        if(tasks[i].isCompleted){
                            sortedTasks.push(`${tasks[i].id}. [x] ${tasks[i].task} (${tasks[i].createdAt})`);
                        }else{
                            sortedTasks.push(`${tasks[i].id}. [ ] ${tasks[i].task} (${tasks[i].createdAt})`);
                        }
                    }
                    break;
                case 'desc': 
                    for(let i=0; i<dataMentah.length; i++){
                        tasks.push(dataMentah[i]);
                    }
                    for(let i=1; i<tasks.length; i++){
                        for(let j=0; j<i; j++){
                            let asal = tasks[i];
                            let pembanding = tasks[j];
                            if(tasks[j].createdAt<tasks[i].createdAt){
                                tasks[j] = asal;
                                tasks[i] = pembanding;
                            }
                        }
                    }
                    for(let i=0; i<tasks.length; i++){
                        if(tasks[i].isCompleted){
                            sortedTasks.push(`${tasks[i].id}. [x] ${tasks[i].task} (${tasks[i].createdAt})`);
                        }else{
                            sortedTasks.push(`${tasks[i].id}. [ ] ${tasks[i].task} (${tasks[i].createdAt})`);
                        }
                    }
                    break;
            }
            callback(sortedTasks)
          });
    }

    sortingByCompleted(type, callback){
        fs.readFile('./data.json', (err, data) => {
            if (err) throw err;
            let tasks = [];
            var dataMentah = JSON.parse(data);
            if(type == 1){
                for(let i=0; i<dataMentah.length; i++){
                    if(dataMentah[i].isCompleted){
                        tasks.push(`${dataMentah[i].id}. [x] ${dataMentah[i].task} (${dataMentah[i].createdAt})`);
                    }
                }
                for(let i=0; i<dataMentah.length; i++){
                    if(!dataMentah[i].isCompleted){
                        tasks.push(`${dataMentah[i].id}. [ ] ${dataMentah[i].task} (${dataMentah[i].createdAt})`);
                    }
                }
            }else if(type == 2){
                for(let i=0; i<dataMentah.length; i++){
                    if(!dataMentah[i].isCompleted){
                        tasks.push(`${dataMentah[i].id}. [x] ${dataMentah[i].task} (${dataMentah[i].createdAt})`);
                    }
                }
                for(let i=0; i<dataMentah.length; i++){
                    if(dataMentah[i].isCompleted){
                        tasks.push(`${dataMentah[i].id}. [ ] ${dataMentah[i].task} (${dataMentah[i].createdAt})`);
                    }
                }
            }
            
            callback(tasks)
          });
    }

    addTags(id, tags, callback, callback2){
        fs.readFile('./data.json', (err, data) => {
            if (err) throw err;
            let tasksArr = JSON.parse(data);
            let task = '';
            for(let i=0; i<tasksArr.length; i++){
                if(tasksArr[i].id == id){
                    for(let j=0; j<tags.length; j++){
                        tasksArr[i].tags.push(tags[j]);
                    }
                    task += tasksArr[i].task;
                }
            }
            callback(JSON.stringify(tasksArr)); //untuk write
            callback2(task, tags) //untuk view
          });
    }

    filter(tag ,callback){
        fs.readFile('./data.json', (err, data) => {
            if (err) throw err;
            let tasksArr = JSON.parse(data);
            let filtered = [];
            for(let i=0; i<tasksArr.length; i++){
                for(let j=0; j<tasksArr[i].tags.length; j++){
                    if(tasksArr[i].tags[j]==tag){
                        if(tasksArr[i].isCompleted){
                            filtered.push(`${tasksArr[i].id}. [x] ${tasksArr[i].task} (${tasksArr[i].createdAt}) [${tasksArr[i].tags.join(', ')}]`);
                        }else{
                            filtered.push(`${tasksArr[i].id}. [ ] ${tasksArr[i].task} (${tasksArr[i].createdAt}) [${tasksArr[i].tags.join(', ')}]`);
                        }
                    }
                }
            }
            callback(filtered);
          });
    }

}

module.exports = TodoModel;