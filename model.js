var fs = require('fs');
var file = './data.json'

class ToDoModel {

    static getData(callback) {
        let toDoList = fs.readFile(file,'utf8',function(err,data) {
            data=JSON.parse(data);
            callback(data);
        })
    }

    static writeData(newData, callback) {
        fs.writeFile(file, JSON.stringify(newData), callback)
    }

    static list(callback) {
        ToDoModel.getData(function(data) {
            for(let i in data) {
                callback(data[i]);
            }
        })
    }
    
    static add(str, callback) {
        ToDoModel.getData(function(data) {
            data.push({id: data[data.length-1].id+1, status: false, task:str, created_date: new Date(), completed_date: "", tag: []});
            ToDoModel.writeData(data, function() {
                callback(str)
            })
        })
    }

    static findByID(id, callback1, callback2) {
        ToDoModel.getData(function(data){
            ToDoModel.findIndexID(data, id, function(index){
                if(index>=0) {
                    callback1(data[index]);
                } else {
                    callback2(id);
                }
            })
        })
    }

    
    static deleteByID(id, callback1, callback2) {
        ToDoModel.getData(function(data){
            ToDoModel.findIndexID(data, id, function(index){
                if(index>=0) {
                    let str = data[index].task
                    data.splice(index,1)
                    ToDoModel.writeData(data, function() {
                        callback1(data[index].task);
                    })
                } else {
                    callback2(id)
                }
            })
        })
    }

    static complete(id, status, callback1, callback2) {
        ToDoModel.getData(function(data){
            ToDoModel.findIndexID(data,id, function(index) {
                if(index>=0) {
                    data[index].status = status;
                    if(status) {
                        if(data[index].completed_date === "") {
                            data[index].completed_date = new Date();
                        }
                    } else {data[index].completed_date = "";}
                    ToDoModel.writeData(data, function(){
                        for(let i in data) {
                            callback1(data[i]);
                        }
                    })
                } else {
                    callback2(id)
                }
            })
        })
    }
    
    static findIndexID(data, id, callback) {
        let index=-1;
        for(let i in data) {
            if(data[i].id == id) {
                index = i;
                i = data.length
            }
        }
        callback(index)
    }

    static swap(data, index1, index2) {
        let temp = data[index1];
        data[index1] = data[index2];
        data[index2] = temp;
        return data;
    }
    
    static sortByCreated(type, callback) {
        ToDoModel.getData(function(data) {
            for(let i in data) {
                let latestIndex = ToDoModel.findLatestCreatedDate(i,data);
                data = ToDoModel.swap(data, i, latestIndex)
            }
            ToDoModel.ascOrDescSort(data, type, callback);
        })
    }

    static sortByCompleted(type, callback) {
        ToDoModel.getData(function(data) {
            data = ToDoModel.isCompleted(data, true)
            for(let i in data) {
                let latestIndex = ToDoModel.findLatestCompletedDate(i,data);
                data = ToDoModel.swap(data, i, latestIndex)
            }
            ToDoModel.ascOrDescSort(data,type, callback)
        })
    }
    
    static findLatestCreatedDate(startIndex, data) {
        let now = new Date()
        let latestIndex = -1;
        for(let i=startIndex; i < data.length; i++) {
            if(new Date(data[i].created_date) < now) {
                now=new Date(data[i].created_date);
                latestIndex=i;
            }
        }
        return latestIndex;
    }
    
    static findLatestCompletedDate(startIndex, data) {
        let now = new Date()
        let latestIndex = -1;
        for(let i=startIndex; i < data.length; i++) {
            if(new Date(data[i].completed_date) < now) {
                now=new Date(data[i].completed_date);
                latestIndex=i;
            }
        }
        return latestIndex;
    }
    
    static ascOrDescSort(data, type, callback) {
        if(type === 'descending' || type === 'desc') {
            for(let i = data.length-1; i>=0; i--) {
                callback(data[i]);
            }
        }
        else {
            for(let i in data) {
                callback(data[i]);
            }
        }
    }
    
    static isCompleted(data, status) {
        status = status || true;
        let newData=[]
        for(let i in data) {
            if(data[i].status === status) {
                newData.push(data[i]);
            }
        }
        return newData;
    }
    
    static tag(id, arr, callback1, callback2) {
        ToDoModel.getData(function(data) {
            ToDoModel.findIndexID(data,id,function(index) {
                let tagExisted = [];
                let newTag = [];
                for(let i in arr) {
                    if(data[index].tag.indexOf(arr[i]) < 0) {
                        data[index].tag.push(arr[i]);
                        newTag.push(arr[i]);
                    } else {
                        tagExisted.push(arr[i]);
                    }
                }
                if(tagExisted.length > 0) {
                    callback1(data[index].task, tagExisted.join(' '))
                }
                if(newTag.length > 0) {
                    ToDoModel.writeData(data, function(){
                        callback2(data[index].task, newTag.join(' '));
                    })
                }
            })
        })
    }
    
    static filter(str, callback) {
        ToDoModel.getData(function(data) {
            let newData = []
            for(let i in data) {
                if(data[i].tag.indexOf(str)>=0) {
                    newData.push(data[i])
                }
            }
            for(let i in newData) {
                let latestIndex = ToDoModel.findLatestCreatedDate(i, newData);
                newData = ToDoModel.swap(newData, i, latestIndex)
            }
            for(let i in newData) {
                callback(newData[i])
            }
        })
    }
}

module.exports = ToDoModel;