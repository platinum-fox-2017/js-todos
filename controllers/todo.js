const TodoView = require('../views/todo')
const TodoModel = require('../models/todo')

class Todo {
    static showHelp() {
        return TodoView.printHelp()
    }
    static showCommand() {
        return TodoView.printCommand()
    }
    static showList() {
        let list = TodoModel.list()
        TodoView.printList(list)
    }

    static addTodo(task) {
        TodoModel.addTodo(task)
        TodoView.printAddedTodo(task)
    }
}

module.exports = Todo