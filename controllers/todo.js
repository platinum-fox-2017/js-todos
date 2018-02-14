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

    static listCreated(command) {
        TodoModel.listCreated(command)
        this.showList()
    }

    static listCompleted(command) {
        TodoModel.listCompleted(command)
        this.showList()
    }

    static listOutstanding(command) {
        let outstanding = TodoModel.listOutstanding(command)
        TodoView.printList(outstanding)
    }

    static addTag(command) {
        let id = [command[0]]
        TodoModel.addTag(command)
        let findTask = TodoModel.findById(id)
        TodoView.printAddedtag(findTask)
    }

    static filter(tag) {
        TodoModel.filter(tag)
    }
}

module.exports = Todo