const fs = require('fs')
class Todo {

    static readFile() {
        let data = fs.readFileSync('./data.json', 'utf-8')
        let dataString = JSON.parse(data)
        return dataString
    }

    static list() {
        let data = this.readFile()
        return data
    }

    static addTodo(task) {
        let data = this.readFile()
        let newTask = task.join(' ')
        let objTask = {
            id: String(data.length + 1),
            task: newTask,
            is_complete: false
        }
        data.push(objTask)
        let stringfy = JSON.stringify(data)
        fs.writeFileSync('./data.json', stringfy, 'utf-8')
    }

    static findById(id) {
        let idTask = id.join('')
        let data = this.readFile()
        let result = {}
        for (let i = 0; i < data.length; i++) {
            if (idTask === data[i].id) {
                result.id = data[i].id
                result.task = data[i].task
            }
        }
        return result
    }

    static deleteById(id) {
        let idTask = id.join('')
        let data = this.readFile()
        for (let i = 0; i < data.length; i++) {
            if (idTask === data[i].id) {
                data.splice(i, 1)
            }
        }
        let stringfy = JSON.stringify(data)
        fs.writeFileSync('./data.json', stringfy, 'utf-8')
    }

    static completeById(id) {
        let idTask = id.join('')
        let data = this.readFile()
        for (let i = 0; i < data.length; i++) {
            if (idTask === data[i].id) {
                data[i].is_complete = true
            }
        }
        let objTaskToString = JSON.stringify(data)
        fs.writeFileSync('./data.json', objTaskToString, 'utf-8')
    }

    static uncompleteById(id) {
        let idTask = id.join('')
        let data = this.readFile()
        for (let i = 0; i < data.length; i++) {
            if (idTask === data[i].id) {
                data[i].is_complete = false
            }
        }
        let objTaskToString = JSON.stringify(data)
        fs.writeFileSync('./data.json', objTaskToString, 'utf-8')
    }

}

module.exports = Todo