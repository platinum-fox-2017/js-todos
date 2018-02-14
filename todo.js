"use strict"

var fs = require('fs');
var file = './data.json'
var MyArgv = process.argv;

class TODO {
    static help() {
        console.log(`
        $ node todo.js                              # will call help
        $ node todo.js help                         # menampilkan command apa saja yang tersedia
        $ node todo.js list                         # Melihat daftar TODO
        $ node todo.js add <task_content>           # Menambahkan TODO ke dalam list
        $ node todo.js findByID <task_id>           # Menlihat detail TODO sesuai \`task_id\` nya
        $ node todo.js delete <task_id>             # Menghapus TODO sesuai \`task_id\` nya
        $ node todo.js complete <task_id>           # Menandai status TODO selesai
        $ node todo.js uncomplete <task_id>         # Menandai status TODO belum selesai
        `)
    }

    static parseData(callback) {
        fs.readFile(file,'utf8',function(err,data) {
            data=JSON.parse(data);
            callback(data)
        });
    }

    static getData(callback, optional1, optional2) {
        let toDoList = fs.readFile(file,'utf8',function(err,data) {
            data=JSON.parse(data);
            callback(data, optional1, optional2);
        })
    }

    static list(data) {
        for(let i=0; i<data.length; i++) {
            TODO.viewTask(data[i]);
        }
    }
    
    static add(data,str) {
        data.push({id: data[data.length-1].id+1, status: false, task:str, created_date: new Date(), completed_date: ""});
        fs.writeFile(file, JSON.stringify(data), function() {
            console.log(`Added "${str}" to your TODO list...`)
        });
    }

    static findByID(data, id) {
        TODO.findIndexID(data,id, function(index){
            if(index>=0) {
                console.log(`${id}. ${data[index].task}`)
            } else {
                console.log(`Tidak tersedia TODO list dengan id: ${id}`)
            }
        })
    }
    
    static deleteByID(data, id) {
        TODO.findIndexID(data,id,function(index){
            if(index>=0) {
                let str = data[index].task
                data.splice(index,1)
                fs.writeFile(file, JSON.stringify(data), function() {
                    console.log(`Deleted "${str}" from your TODO list...`)
                });
            } else {
                console.log(`Tidak tersedia TODO list dengan id: ${id}`)
            }
        })
    }
    
    static complete(data, id, status) {
        TODO.findIndexID(data,id, function(index) {
            if(index>=0) {
                data[index].status = status;
                if(status) {
                    if(data[index].completed_date === "") {
                        data[index].completed_date = new Date();
                    }
                } else data[index].completed_date = "";
                
                fs.writeFile(file, JSON.stringify(data), function() {
                    TODO.getData(TODO.list);
                });
            } else {
                console.log(`Tidak tersedia TODO list dengan id: ${id}`)
            }
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

    static viewTask(data) {
        console.log(`${data.id}.  [${data.status?'x':' '}] ${data.task}`)
    }

    static sortByCreated(type) {
        TODO.getData(function(data) {
            for(let i in data) {
                let latestIndex = TODO.findLatestCreatedDate(i,data);
                data = TODO.swap(data, i, latestIndex)
            }
            TODO.ascOrDescSort(data, type)
        })
    }

    static sortByCompleted(type) {
        TODO.getData(function(data) {
            data = TODO.isCompleted(data, true)
            for(let i in data) {
                let latestIndex = TODO.findLatestCompletedDate(i,data);
                data = TODO.swap(data, i, latestIndex)
            }
            TODO.ascOrDescSort(data,type)
        })
    }
    
    static swap(data, index1, index2) {
        let temp = data[index1];
        data[index1] = data[index2];
        data[index2] = temp;
        return data;
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

    static ascOrDescSort(data, type) {
        if(type === 'descending' || type === 'desc') {
            for(let i = data.length-1; i>=0; i--) {
                TODO.viewTask(data[i]);
            }
        }
        else {
            for(let i in data) {
                TODO.viewTask(data[i]);
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

    static tag(id, arr) {
        TODO.getData(function(data) {
            TODO.findIndexID(data,id,function(index) {
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
                    TODO.tagExisted(data[index].task, tagExisted.join(' '))
                }
                if(newTag.length > 0) {
                    TODO.writeFile(file, data, TODO.tagAdded, data[index].task, newTag.join(' '))
                }
            })
        })
    }

    static tagAdded(taskStr,tagStr) {
        console.log(`Tagged Task "${taskStr}" with tags: ${tagStr}`)
    }

    static tagExisted(taskStr,tagStr) {
        console.log(`Task "${taskStr}" already has tag: ${tagStr}`)
    }

    static filterView(data) {
        let str=`${data.id}. ${data.task} [`;
        for(let i in data.tag) {
            str+= data.tag[i]+', ';
        }
        str = str.slice(0, str.length-2)+']';
        console.log(str);
    }

    static writeFile(file, newData, callBackView, str1, str2) {
        newData = JSON.stringify(newData)
        fs.writeFile(file, newData, function() {
            callBackView(str1, str2)
        });
    }

    static filter(str) {
        TODO.getData(function(data) {
            let newData = []
            for(let i in data) {
                if(data[i].tag.indexOf(str)>=0) {
                    newData.push(data[i])
                }
            }
            for(let i in newData) {
                let latestIndex = TODO.findLatestCreatedDate(i, newData);
                newData = TODO.swap(newData, i, latestIndex)
            }
            for(let i in newData) {
                TODO.filterView(newData[i])
            }
        })
    }
}



let command = MyArgv[2]
let option = '';
if(command !== undefined){
    command = command.toLowerCase();
    if(command.indexOf(':')>0) {
        option = command.slice(command.indexOf(':')+1,command.length)
        command = command.slice(0,command.indexOf(':'));
    }
}

let additional = MyArgv[3]

if(command === 'tag') {
    option = []
    for(let i = 4; i<MyArgv.length; i++) {
        option.push(MyArgv[i])
    }
}

switch(command) {
    case 'list':
        if(option === 'created') {TODO.sortByCreated(additional)} 
        else if(option === 'completed') {TODO.sortByCompleted(additional)} 
        else {TODO.getData(TODO.list);}
        break;
    case 'add':
        TODO.getData(TODO.add, additional)
        break;
    case 'findbyid':
        TODO.getData(TODO.findByID, additional)
        break;
    case 'delete':
        TODO.getData(TODO.deleteByID, additional)
        break;
    case 'complete':
        TODO.getData(TODO.complete, additional, true);
        break
    case 'uncomplete':
        TODO.getData(TODO.complete, additional, false);
        break;
    case 'tag':
        TODO.tag(additional, option)
        break;
    case 'filter':
        TODO.filter(option)
        break;
    default : TODO.help();
}