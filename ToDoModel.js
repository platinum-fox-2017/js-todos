const fs = require('fs');

class ToDoModelList {
    constructor() {
        this._data      = './data.json';
    }

    readData(callback) {
        fs.readFile(this._data, 'utf8', function (err, data) {
            if (err) throw err;
            let dataJSON = JSON.parse(data);
            let listTask = []
            for(let i = 0; i < dataJSON.length; i++) {
                let newTodo = dataJSON[i];
                listTask.push(newTodo);
            }
            callback(listTask);
        });
    }

    storeTask(taskName,callback) {        
        fs.readFile(this._data, 'utf8', function (err, data) {
            if (err) throw err;
            let dataJSON    = JSON.parse(data);
            let lastId      = dataJSON[dataJSON.length-1].id;
            let newTask     = {};
            newTask.id      = lastId + 1;
            newTask.task    = taskName;
            dataJSON.push(newTask);
            
            let dataToWrite = JSON.stringify(dataJSON);

            fs.writeFile('./data.json', dataToWrite , (err) => {
                if (err) throw err;
                callback(taskName);
            });

        });
    }

    findTaskById(taskId,callback) {
        fs.readFile(this._data, 'utf8', function (err, data) {
            if (err) throw err;
            let dataJSON = JSON.parse(data);
            for(let i = 0; i < dataJSON.length; i++) {
                if(parseInt(taskId) === parseInt(dataJSON[i].id)) {
                    var foundTask = dataJSON[i];
                }
            }
            callback(foundTask);
        });        
    }

    deleteTaskById(taskId,callback) {
        fs.readFile(this._data, 'utf8', function (err, data) {
            if (err) throw err;
            var dataJSON = JSON.parse(data);
            for(let i = 0; i < dataJSON.length; i++) {
                if(parseInt(taskId) === parseInt(dataJSON[i].id)) {
                    dataJSON.splice(i,1);
                    var taskName    = dataJSON[i].task;
                }
            }

            var dataToWrite = JSON.stringify(dataJSON);

            fs.writeFile('./data.json', dataToWrite , (err) => {
                if (err) throw err;
                callback(taskName);
            });
        });      
    }

    completeTask(taskId,callback) {
        fs.readFile(this._data, 'utf8', function (err, data) {
            if (err) throw err;
            var dataJSON = JSON.parse(data);
            for(let i = 0; i < dataJSON.length; i++) {
                if(parseInt(taskId) === parseInt(dataJSON[i].id)) {
                    dataJSON[i].complete = true;
                }
            }

            var dataToWrite = JSON.stringify(dataJSON);

            fs.writeFile('./data.json', dataToWrite , (err) => {
                if (err) throw err;
            });

            callback(dataJSON);
        });    
    }

    unCompleteTask(taskId,callback) {
        fs.readFile(this._data, 'utf8', function (err, data) {
            if (err) throw err;
            var dataJSON = JSON.parse(data);
            for(let i = 0; i < dataJSON.length; i++) {
                if(parseInt(taskId) === parseInt(dataJSON[i].id)) {
                    dataJSON[i].complete = false;
                }
            }

            var dataToWrite = JSON.stringify(dataJSON);

            fs.writeFile('./data.json', dataToWrite , (err) => {
                if (err) throw err;
            });

            callback(dataJSON);
        });    
    }

}

module.exports = 
{
    List : ToDoModelList
};