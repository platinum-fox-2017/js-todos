let controlFile = require('./controller.js')
const Controller = controlFile.Controller
// receive input
let argv = process.argv // 2

let control_process= new Controller(argv)
control_process.readCommand(argv)



module.exports = {
  argv : argv
}
