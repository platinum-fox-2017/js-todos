const Todo = require('./routes/todo')
const command = process.argv[2]

let todo = new Todo(command)
todo.start()