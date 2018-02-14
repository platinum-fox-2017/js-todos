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
        let data = Todo.readFile()
        let newTask = task.join(' ')
        let objTask = {
            id: data.length + 1,
            task: newTask
        }
        data.push(objTask)
        let stringfy = JSON.stringify(data)
        fs.writeFileSync('./data.json', stringfy, 'utf-8')
    }
}

module.exports = Todo