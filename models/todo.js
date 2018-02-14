const fs = require('fs')
class Todo {

    static readFile(file) {
        let data = fs.readFileSync('./data.json', 'utf-8')
        let dataString = JSON.parse(data)
        return dataString
    }

    static list() {
        let data = Todo.readFile()
        return data
    }
}

module.exports = Todo