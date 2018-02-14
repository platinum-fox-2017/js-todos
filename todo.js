const Todo = require('./routes/todo')
const command = process.argv[2]
const data = process.argv.splice(3)

let todo = new Todo(command, data)
todo.start()