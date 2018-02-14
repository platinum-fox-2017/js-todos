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

    static findById(id) {
        let findTask = TodoModel.findById(id)
        TodoView.printResult(findTask)
    }

    static deleteById(id) {
        let deletedTask = TodoModel.findById(id)
        TodoModel.deleteById(id)
        TodoView.printDeleted(deletedTask)
    }

    static completeById(id) {
        TodoModel.completeById(id)
        this.showList()
    }

    static uncompleteById(id) {
        TodoModel.uncompleteById(id)
        this.showList()
    }
}

module.exports = Todo