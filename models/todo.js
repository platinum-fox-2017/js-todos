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
            is_complete: false,
            created_date: new Date(),
            completed_date: null,
            tags: []
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
                result.created_date = data[i].created_date
                result.completed_date = data[i].completed_date
                result.tag = data[i].tag
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
                data[i].completed_date = new Date()
            }
        }
        let stringfy = JSON.stringify(data)
        fs.writeFileSync('./data.json', stringfy, 'utf-8')
    }

    static uncompleteById(id) {
        let idTask = id.join('')
        let data = this.readFile()
        for (let i = 0; i < data.length; i++) {
            if (idTask === data[i].id) {
                data[i].is_complete = false
            }
        }
        let stringfy = JSON.stringify(data)
        fs.writeFileSync('./data.json', stringfy, 'utf-8')
    }

    static listCreated(command) {
        let commandlist = command.join('')
        let data = this.readFile()
        if (commandlist === 'desc') {
            for (let i = 0; i < data.length - 1; i++) {
                if (data[i].created_date < data[i + 1].created_date) {
                    let temp = data[i]
                    data[i] = data[i + 1]
                    data[i + 1] = temp
                }
            }
        } else if (commandlist === 'asc') {
            for (let i = 0; i < data.length - 1; i++) {
                if (data[i].created_date > data[i + 1].created_date) {
                    let temp = data[i]
                    data[i] = data[i + 1]
                    data[i + 1] = temp
                }
            }
        }

        let stringfy = JSON.stringify(data)
        fs.writeFileSync('./data.json', stringfy, 'utf-8')
        return stringfy
    }

    static listOutstanding(command) {
        let commandlist = command.join('')
        let data = this.readFile()
        if (commandlist === 'desc') {
            for (let i = 0; i < data.length - 1; i++) {
                if (data[i].created_date < data[i + 1].created_date) {
                    let temp = data[i]
                    data[i] = data[i + 1]
                    data[i + 1] = temp
                }
            }
        } else if (commandlist === 'asc') {
            for (let i = 0; i < data.length - 1; i++) {
                if (data[i].created_date > data[i + 1].created_date) {
                    let temp = data[i]
                    data[i] = data[i + 1]
                    data[i + 1] = temp
                }
            }
        }

        return data
    }

    static listCompleted(command) {
        let commandlist = command.join('')
        let data = this.readFile()
        if (commandlist === 'desc') {
            for (let i = 0; i < data.length - 1; i++) {
                if (data[i].completed_date < data[i + 1].completed_date) {
                    let temp = data[i]
                    data[i] = data[i + 1]
                    data[i + 1] = temp
                }
            }
        } else if (commandlist === 'asc') {
            for (let i = 0; i < data.length - 1; i++) {
                if (data[i].completed_date > data[i + 1].completed_date) {
                    let temp = data[i]
                    data[i] = data[i + 1]
                    data[i + 1] = temp
                }
            }
        }
        let stringfy = JSON.stringify(data)
        fs.writeFileSync('./data.json', stringfy, 'utf-8')
        return stringfy
    }

    static addTag(command) {
        let id = command[0]
        command.shift()
        let tag = command

        let data = this.readFile()
        for (let i = 0; i < data.length; i++) {
            if (id === data[i].id) {
                for (let j = 0; j < tag.length; j++) {
                    data[i].tag.push(tag[j])
                }
            }
        }

        let stringfy = JSON.stringify(data)
        fs.writeFileSync('./data.json', stringfy, 'utf-8')
    }

    static filter(tag) {
        console.log(tag);

    }
}

module.exports = Todo