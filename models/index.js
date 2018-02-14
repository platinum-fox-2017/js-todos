'use strict'
const Controller = require('../controllers')
const fs = require('fs')

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
                var deleted = data.splice(i,1) 
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
                let newData = JSON.stringify(data)
                return fs.writeFileSync('./data.json',newData)
            }
        }
    }
}

module.exports = Model