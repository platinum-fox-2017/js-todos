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

    static getData(callback, optional1, optional2) {
        let toDoList = fs.readFile(file,'utf8',function(err,data) {
            data=JSON.parse(data);
            callback(data, optional1, optional2);
        })
    }

    static list(data) {
        for(let i=0; i<data.length; i++) {
            console.log(`${data[i].id}. [${data[i].status?'x':' '}] ${data[i].task}`)
        }
    }
    
    static add(data,str) {
        data.push({id: data[data.length-1].id+1, status: false, task:str});
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
    
}



let command = MyArgv[2]
if(command !== undefined){
    command = command.toLowerCase()
}

let additional = MyArgv[3]

switch(command) {
    case 'list':
        TODO.getData(TODO.list)
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
    default : TODO.help();
}