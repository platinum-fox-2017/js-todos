// Controller
let model = require('./model.js')
let view = require('./view.js')
// receive input
let argv = process.argv // 2

let data_process = new model.DataProcess(argv)
let view_process = new view.View()
// console.log(data_process.commands);
if (data_process.readCommand() === 'help') {
  view_process.displayHelp()
} else if (data_process.readCommand() === 'list') {
  view_process.readDataJSON()
}








module.exports = {
  argv : argv
}
