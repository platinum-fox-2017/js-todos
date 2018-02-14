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
                break
            case 'delete':
                break
            case 'complete':
                break
            case 'uncomplete':
                break
        }
    }
}

module.exports = Todo