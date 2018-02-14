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
            let dataJSON            = JSON.parse(data);
            let newTask             = {};
            if (dataJSON.length <= 0) {
                newTask.id              = 1;    
            } else {
                let lastId              = dataJSON[dataJSON.length-1].id;
                newTask.id              = lastId + 1;
            }
            
            newTask.task            = taskName;
            newTask.complete        = false;
            newTask.created_date    = new Date();
            newTask.completed_date  = '';
            newTask.tag             = '';
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
                    var taskName    = dataJSON[i].task;
                    dataJSON.splice(i,1);
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
                    dataJSON[i].complete        = true;
                    dataJSON[i].completed_date  = new Date();
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
                    dataJSON[i].completed_date  = '';
                }
            }

            var dataToWrite = JSON.stringify(dataJSON);

            fs.writeFile('./data.json', dataToWrite , (err) => {
                if (err) throw err;
            });

            callback(dataJSON);
        });    
    }

    readDataSorted(option,callback) {
        fs.readFile(this._data, 'utf8', function (err, data) {
            if (err) throw err;
            let dataJSON = JSON.parse(data);
            let listTask = []
            for(let i = 0; i < dataJSON.length; i++) {
                let newTodo = dataJSON[i];
                listTask.push(newTodo);
            }
            var sortedArray = []
            
            
            while(listTask.length > 0) {                
                var index = 0;

                if(option == 'desc') {
                    var max = 0;
                    for (let i = 0; i < listTask.length; i++) {                    
                        if(listTask[i].created_date > max.toString()) {
                            max = listTask[i].created_date;
                            index = i;
                        }
                    }
                } else {
                    var max = 9999999;
                    for (let i = 0; i < listTask.length; i++) {                    
                        if(listTask[i].created_date < max.toString()) {
                            max = listTask[i].created_date;
                            index = i;
                        }
                    }
                }

                sortedArray.push(listTask[index]);
                listTask.splice(index,1);
            }

            callback(sortedArray);
        });        
    }

    readCompletedDataSorted(option,callback) {
        fs.readFile(this._data, 'utf8', function (err, data) {
            if (err) throw err;
            let dataJSON = JSON.parse(data);
            let listTask = []
            for(let i = 0; i < dataJSON.length; i++) {
                if (dataJSON[i].completed_date != '') {
                    let newTodo = dataJSON[i];
                    listTask.push(newTodo);
                }
            }
            var sortedArray = []
            
            
            while(listTask.length > 0) {                
                var index = 0;

                if(option == 'desc') {
                    var max = 0;
                    for (let i = 0; i < listTask.length; i++) {                    
                        if(listTask[i].completed_date > max.toString()) {
                            max = listTask[i].completed_date;
                            index = i;
                        }
                    }
                } else {
                    var max = 999999999999;
                    for (let i = 0; i < listTask.length; i++) {                    
                        if(listTask[i].completed_date < max.toString()) {
                            max = listTask[i].completed_date;
                            index = i;
                        }
                    }
                }

                sortedArray.push(listTask[index]);
                listTask.splice(index,1);
            }

            callback(sortedArray);
        });        
    }

    createTag(taskId,arrTag,callback) {
        fs.readFile(this._data, 'utf8', function (err, data) {
            if (err) throw err;
            var dataJSON = JSON.parse(data);
            for(let i = 0; i < dataJSON.length; i++) {
                if(parseInt(taskId) === parseInt(dataJSON[i].id)) {
                    dataJSON[i].tag = arrTag;
                    var taskName    = dataJSON[i].task;
                }
            }

            var dataToWrite = JSON.stringify(dataJSON);

            fs.writeFile('./data.json', dataToWrite , (err) => {
                if (err) throw err;
            });

            callback(taskName,arrTag);
        });   
    }

    filterTag(filterTag,callback) {
        fs.readFile(this._data, 'utf8', function (err, data) {
            if (err) throw err;
            let dataJSON = JSON.parse(data);
            var matchTagData = [];
            for(let i = 0; i < dataJSON.length; i++) {
                var dataTag = dataJSON[i].tag;
                for(let j = 0; j < dataTag.length; j++) {
                    if(dataTag[j] == filterTag) {
                        matchTagData.push(dataJSON[i]);
                    }
                }
            }
            callback(matchTagData);
        });  
    }
}

module.exports = 
{
    List : ToDoModelList
};