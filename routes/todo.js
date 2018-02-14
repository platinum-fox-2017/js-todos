const TodoController = require('../controllers/todo')

class Todo {
    constructor(command, dataCommand) {
        this.command = command
        this.dataCommand = dataCommand
    }

    start() {
        switch (this.command) {
            case undefined:
                TodoController.showHelp()
                break
            case 'help':
                TodoController.showCommand()
                break
            case 'list':
                TodoController.showList()
                break
            case 'add':
                TodoController.addTodo(this.dataCommand)
                break
            case 'findById':
                TodoController.findById(this.dataCommand)
                break
            case 'delete':
                TodoController.deleteById(this.dataCommand)
                break
            case 'complete':
                TodoController.completeById(this.dataCommand)
                break
            case 'uncomplete':
                TodoController.uncompleteById(this.dataCommand)
                break
            case 'list:created':
                TodoController.listCreated(this.dataCommand)
                break
            case 'list:completed':
                TodoController.listCompleted(this.dataCommand)
                break
            case 'list:outstanding':
                TodoController.listOutstanding(this.dataCommand)
                break
            case 'tag':
                TodoController.addTag(this.dataCommand)
                break
            case 'filter:':
                TodoController.filter(this.dataCommand)
                break
        }
    }
}

module.exports = Todo