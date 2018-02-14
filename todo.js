const Controller = require('./controllers/controller')

let input = process.argv[2]
let command = process.argv.splice(3).join(' ')

Controller.checkInput(input, command)