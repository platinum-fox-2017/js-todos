'use strict'
const Controller = require('../controllers')
const fs = require('fs')
const moment = require('moment')

class Model {
    constructor() {

    }

    static getData() {
        let database = fs.readFileSync('./data.json','utf-8')
        let data = JSON.parse(database)
        return data
    }
    static addData(input) {
        let data = this.getData()
        let obj = {}
        obj.id = data.length+1
        obj.status = "[ ]"
        obj.task = input
        obj.created_at = moment().format('LLLL')
        data.push(obj)
        let newData = JSON.stringify(data)
        fs.writeFileSync('./data.json',newData)
        return input
    }
    static getId(input) {
        let data = this.getData()
        let arr = []
        for(let i = 0; i < data.length; i++) {          
            if(data[i].id === +input) {
                arr.push(data[i])
            }
        }
        return arr
    }
    static deleteById(id) {
        let data = this.getData()
        for(let i = 0; i < data.length; i++) {
            if(data[i].id === +id) {
                // var erased = data.slice(i,i+1)
                var deleted = data.splice(i,1)
                data[i].id = i+1
                let newData = JSON.stringify(data)
                fs.writeFileSync('./data.json',newData)
            }
        }
        return deleted[0]
    }
    static complete(id) {
        let data = this.getData()
        for(let i = 0; i < data.length; i++) {
            if(data[i].id === +id) {
                data[i].status = "[X]"
                data[i].completed_at = moment().format('LLLL')
                let newData = JSON.stringify(data)
                return fs.writeFileSync('./data.json',newData)
            }
        }
    }
    static uncomplete(id) {
        let data = this.getData()
        for(let i = 0; i < data.length; i++) {
            if(data[i].id === +id) {
                data[i].status = "[ ]"
                data[i].completed_at = "on progress"
                let newData = JSON.stringify(data)
                return fs.writeFileSync('./data.json',newData)
            }
        }
    }
    
    static sortTaskAscending(request) {
        let data = this.getData()
        if(request === 'list:created') {
            let createdAsc = data.sort((a,b) => {
                let before = a.created_at
                let after = b.created_at
                if(before < after) {
                    return -1
                }
                if(before > after) {
                    return 1
                }
                return 0
            })
            return createdAsc
        } else if(request === 'list:completed') {
            let completedAsc = data.sort((a,b) => {
                let before = a.completed_at
                let after = b.completed_at
                if(before < after) {
                    return -1
                }
                if(before > after) {
                    return 1
                }
                return 0
            })
            return completedAsc
        }
    }
    static sortTaskDescending(request) {
        let data = this.getData()
        if(request === 'list:created') {
            let createdAsc = data.sort((a,b) => {
                let before = a.created_at
                let after = b.created_at
                if(before > after) {
                    return -1
                }
                if(before < after) {
                    return 1
                }
                return 0
            })
            return createdAsc
        } else if(request === 'list:completed') {
            let completedAsc = data.sort((a,b) => {
                let before = a.completed_at
                let after = b.completed_at
                if(before > after) {
                    return -1
                }
                if(before < after) {
                    return 1
                }
                return 0
            })
            return completedAsc
        }
    }   
    static addTag(input) {
        let data = this.getData()
        let tagInput = input.split(' ')
        for(let i = 0; i < data.length; i++) {
            if(data[i].id === +tagInput[0]) {
                data[i].tag = tagInput.splice(1)
                let newData = JSON.stringify(data)
                fs.writeFileSync('./data.json',newData)
            }
        }
        return input
    }
    static filterTag(input) {
        let data = this.getData()
        let tags = input
        let taskWithTag = []
        for(let i = 0; i < data.length; i++) {
            for(let j = 0; j < data[i].tag.length; j++) {
                if(data[i].tag[j] === input) {
                    taskWithTag.push(data[i])
                }
            }
        }      
        return taskWithTag
    }
}

module.exports = Model