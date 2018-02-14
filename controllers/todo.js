const TodoView = require('../views/todo')
class Todo {

    static showHelp() {
        return TodoView.printHelp()
    }
}

module.exports = Todo