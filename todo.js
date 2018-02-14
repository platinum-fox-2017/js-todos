'use strict'

const TodoController = require('./controllers/todoController');

let input = process.argv.slice(2)

TodoController.process(input)