const Controllers = require('./controllers')

let command = process.argv[2]
let task = process.argv.splice(3).join(' ')

let controllers = new Controllers
controllers.input(command, task)
