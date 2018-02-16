const Controller = require('./controller/controller.js')

let argv = process.argv
let command = argv[2]
let addition = argv[3]
let options = []
let index = 4
while(argv[index] !== undefined) {
  options.push(argv[index])
  index++
}
// console.log(options)

Controller.execute(command, addition, options)