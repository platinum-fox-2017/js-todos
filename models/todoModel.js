'use strict'
const fs = require('fs')

class TodoModel {
    constructor() {}
    static findAll() {
        let data = fs.readFileSync('data.json', 'utf-8').trim()
        return JSON.parse(data)
    }
    static findById(id) {
        let data = TodoModel.findAll()
        return data.filter(element => {
            return element.id == id
        })
    }
    static delete(id) {
        let data = TodoModel.findAll()
        let str = '';
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === Number(id)) {
                str += data[i].content
            }
        }
        console.log(`Delete ${str} from your TODO list...`)
        data = data.filter(element => {
            return (element.id !== Number(id))
        })
        TodoModel.save(data)
    }
    static add(content) {
        let data = TodoModel.findAll()
        data.push({
            id: (data.length === 0) ? 1 : (data[data.length - 1].id + 1),
            content,
            complete: false,
            tags: [],
            createdAt: new Date(),
            updatedAt: null
        })
        TodoModel.save(data)
        console.log(`Added ${content} to your TODO list...`)
    }
    static deleteTag(id, tagHobby) {
        // console.log('debug: ',id, tagHobby.length);
        
        let data = TodoModel.findAll()
        let indexTags
        data = data.map(e => {
            if (e.id === Number(id) && e.tags.indexOf(tagHobby.join('')) !== -1){
                indexTags = e.tags.indexOf(tagHobby.join(''))
                e.tags.splice(indexTags, 1)
            }
            return e
        })
        TodoModel.save(data)
    }
    static update(dataUpdate) {
        let data = TodoModel.findAll()
        data = data.map(element => {
            if (element.id == Number(dataUpdate[0])) {
                if (dataUpdate[1] == 'complete') {
                    element.complete = dataUpdate[2]
                    element.updatedAt = new Date()
                } else if (dataUpdate[1] == 'tag') {
                    dataUpdate[2].map(e => {
                        element.tags.push(e)
                    })
                }
            }
            return element
        })
        TodoModel.save(data)
    }
    static save(dataUpdate) {
        fs.writeFileSync('data.json', JSON.stringify(dataUpdate, null, 4))
    }
}

module.exports = TodoModel