// MODEL

const fs = require('fs')


class Modify {
    constructor(){

    }
    static list (){
        let data = fs.readFile('./data.json', 'utf8', (err, data) => {
            if (err) throw err
            else {
                let message = JSON.parse(data)
                for (let i = 0; i < message.length; i++){
                    console.log(`${i+1}. [${message[i].complete}] ${message[i].task}`)
                }
            }
        })
    } 
    static add (item){
        let data = fs.readFile('./data.json', 'utf8', (err1, data1) => {
            if (err1) throw err1
            else {
                let message = JSON.parse(data1)
                let newList = {"task": `${item}`, "complete": " "}
                message.push(newList)
                let write = fs.writeFile('./data.json', JSON.stringify(message), 'utf8', (err2, data2) => {
                    if (err2) throw err2 
                    else {
                        console.log(`Added ${item} to your TODO list`)
                    }
                })
            }
        })
    }
    static findId (num){
        let search = num-1
        let data = fs.readFile('./data.json', 'utf8', (err, data) => {
            if (err) throw err
            else {
                let message = JSON.parse(data)
                console.log(`${num}. ${message[search].task}`)
            }
        })
    }
    static delete (num){
        let search = num-1
        let file = fs.readFile('./data.json', 'utf8', (err, data) => {
            if (err) throw err
            else {
                let message = JSON.parse(data)
                console.log(`Deleted ${message[search].task} from your TODO list...`)
                message.splice(search, 1)
                let write = fs.writeFile('./data.json', JSON.stringify(message), 'utf8', (err2, data2) => {
                    if (err2) throw err2
                })
            }
        })
    }
    static complete (num){
        let search = num-1
        let file = fs.readFile('./data.json', 'utf8', (err, data) => {
            if (err) throw err
            else {
                let message = JSON.parse(data)
                message[search].complete = "x"
                let write = fs.writeFile('./data.json', JSON.stringify(message), 'utf8', (err2, data2) => {
                    if (err2) throw err2
                    else {Modify.list()}
                })
            }
        })
    }
    static uncomplete (num){
        let search = num-1
        let file = fs.readFile('./data.json', 'utf8', (err, data) => {
            if (err) throw err
            else {
                let message = JSON.parse(data)
                message[search].complete = " "
                let write = fs.writeFile('./data.json', JSON.stringify(message), 'utf8', (err2, data2) => {
                    if (err2) throw err2
                    else {Modify.list()}
                })
            }
        })
    }
}

let argv = process.argv
let help = ['$ node todo.js list', '$ node todo.js add <task_content>', '$ node todo.js findById <task_id>', '$ node todo.js delete <task_id>', '$ node todo.js complete <task_id>', '$ node todo.js uncomplete <task_id>']

// VIEW 



// CONTROLLER
switch(argv[2]){
    case 'help': console.log(help.join('\n')); break;
    case 'list': Modify.list(); break;

    case 'add': Modify.add(argv[3]); break;
    case 'findById': Modify.findId(argv[3]); break;
    case 'delete': Modify.delete(argv[3]); break;
    case 'complete': Modify.complete(argv[3]); break;
    case 'uncomplete': Modify.uncomplete(argv[3], view.showUncomplete);break;
    default: 
        console.log(`$ node todo.js help`); 
        break;
}


