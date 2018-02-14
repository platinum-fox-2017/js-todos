const Controller = require('./controller')

let input = process.argv[2]
let input2 = process.argv.splice(3).join(' ')

Controller.command(input,input2)
