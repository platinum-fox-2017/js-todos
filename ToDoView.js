const fs = require('fs');

class ToDoView {
    constructor() {
        this._help = [
            "node todo.js help",
            "node todo.js list",
            "node todo.js add <task_content>",
            "node todo.js findById <task_id>",
            "node todo.js delete <task_id>",
            "node todo.js complete <task_id>",
            "node todo.js uncomplete <task_id>",
            "node todo.js list:created asc|desc",
            "node todo.js list:completed asc|desc",
            "node todo.js tag <task_id> <tag1> <tag2> <tag3> ....",
            "node todo.js filter <tag>",
        ];
    }

    showHelp() {
        for(let i = 0; i < this._help.length; i++) {
            console.log(this._help[i]);
        }
    }

    showList(arrData) {
        for(let i = 0; i < arrData.length; i++) {
            if(arrData[i].complete == false) {
                console.log(arrData[i].id + ".[] " + arrData[i].task);
            } else {
                console.log(arrData[i].id + ".[x] " + arrData[i].task);
            }
        }    
    }

    showById(arrData) {
        console.log(arrData.id + ". " + arrData.task);
    }

    storeTask(taskName) {
        console.log('Added ' + taskName + ' to your TODO list...');
    }

    deleteTask(taskName) {
        console.log('Deleted ' + taskName + ' from your TODO list...');
    }

    addTag(taskName,arrTag) {
        let str = ''
        for(let i = 0; i < arrTag.length; i++) {
            str = str + arrTag[i] + " ";
        }
        console.log("Tagged task " + taskName + " with tags: " + str);
    }

    filteredTag(matchTagData) {
        for(let i = 0; i < matchTagData.length; i++) {
            console.log(matchTagData[i].id + ". "+  matchTagData[i].task  + " [" + matchTagData[i].tag + "]");
        }
    }
}

module.exports = ToDoView;