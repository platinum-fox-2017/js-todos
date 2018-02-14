const fs = require('fs')

class Model {
    constructor(){

    }
    static read (callback){
        fs.readFile('./data.json', 'utf8', (err, data) => {
            if (err) throw err
            else {
                let todos = JSON.parse(data) 
            }
        })
    }
    static list (callback){
        fs.readFile('./data.json', 'utf8', (err, data) => {
            if (err) throw err
            else {
                let todos = JSON.parse(data) 
                callback(todos)
            }
        })
    }
    static create (input = '', callback){
        fs.readFile('./data.json', 'utf8', (err, data) => {
            if (err) throw err
            else {
                let todos = JSON.parse(data)
                if (input === 'desc'){
                    todos.sort((a, b) => b.time_created - a.time_created) 
                } else {
                    todos.sort((a, b) => a.time_created - b.time_created) 
                }
                callback(todos)
            }
        })
    }
    static completedList (input = '', callback){
        fs.readFile('./data.json','utf8', (err, data) => {
            if (err) throw err
            else {
                let todos = JSON.parse (data)
                if (input === 'desc'){
                    todos.sort((a, b) => b.time_completed - a.time_completed) 
                } else {
                    todos.sort((a, b) => a.time_completed - b.time_completed)
                }
                callback(todos)   
            }
        })
    }
    static outstandingList (input = '', callback){
        fs.readFile('./data.json','utf8', (err, data) => {
            if (err) throw err
            else {
                let todos = JSON.parse (data)
                if (input === 'desc'){
                    todos.sort((a, b) => b.time_created - a.time_created) 
                } else {
                    todos.sort((a, b) => a.time_created - b.time_created)
                }
                callback(todos)   
            }
        })
    }
    static add (input, callback){
        fs.readFile('./data.json', 'utf8', (err1, data1) => {
            if (err1) throw err1
            else {
                let todos = JSON.parse(data1)
                let newList = {"task": `${input}`, "complete": " ", "time_created": Date.now(), "time_completed": null}
                todos.push(newList)
                fs.writeFile('./data.json', JSON.stringify(todos), 'utf8', (err2, data2) => {
                    if (err2) throw err2
                    else {
                        callback(input)
                    }
                })
            }
        })
    }
    static findId (input, callback){
        let search = input-1
        fs.readFile('./data.json', 'utf8', (err, data) => {
            if (err) throw err
            else {
                let todos = JSON.parse(data)
                callback(input, todos)
            }
        })
    }
    static delete (num, callback){
        let search = num-1
        fs.readFile('./data.json', 'utf8', (err, data) => {
            if (err) throw err
            else {
                let todos = JSON.parse(data)
                callback(todos, search)
                // console.log(`Deleted ${message[search].task} from your TODO list...`)
                todos.splice(search, 1)
                let write = fs.writeFile('./data.json', JSON.stringify(todos), 'utf8', (err2, data2) => {
                    if (err2) throw err2
                })
            }
        })
    }
    static complete (num, callback){
        let search = num-1
        let file = fs.readFile('./data.json', 'utf8', (err1, data1) => {
            if (err1) throw err1
            else {
                let todos = JSON.parse(data1)
                todos[search].complete = "x"
                todos[search].time_completed = Date.now()
                let write = fs.writeFile('./data.json', JSON.stringify(todos), 'utf8', (err2, data2) => {
                    if (err2) throw err2
                    else {Model.list(callback)}
                })
            }
        })
    }
    static uncomplete (num, callback){
        let search = num-1
            fs.readFile('./data.json', 'utf8', (err, data) => {
            if (err) throw err
            else {
                let message = JSON.parse(data)
                message[search].complete = " "
                message[search].time_completed = null
                let write = fs.writeFile('./data.json', JSON.stringify(message), 'utf8', (err2, data2) => {
                    if (err2) throw err2
                    else {Model.list(callback)}
                })
            }
        })
    }
    static filter (word, callback){
            fs.readFile('./data.json', 'utf8', (err,data)=>{
            if (err) throw err
            else {
                let todos = JSON.parse(data)
                callback(todos, word)
            }
        })
    }
    static tag (num, tag, callback1, callback2){
        let search = num-1
        if (tag.length > 1){
            callback2(tag)
        }
        let addTag = tag.join(' ')
        fs.readFile('./data.json', 'utf8', (err, data) => {
            if (err) throw err
            else {
                let todos = JSON.parse(data)
                todos[search].tag = tag
                fs.writeFile('./data.json', JSON.stringify(todos) ,'utf8', (err, data) => {
                    if (err) throw err
                    else {
                        callback1(todos, search, addTag)
                    }
                })
            }
        })
    }

}

module.exports = Model