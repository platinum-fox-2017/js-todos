const TodoController = require('../controllers/todo')

class Todo {
    constructor(command) {
        this.command = command
    }

    start() {
        switch (this.command) {
            case undefined:
                TodoController.showHelp()
                break
            case 'help':
                console.log('help me')
                break
            case 'list':
                break
            case 'add':
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