
const ControlTodo = require('./controller.js')


const syntax = process.argv[2]
const valueList = process.argv[3]
let todo = new ControlTodo(syntax, valueList)

todo.command