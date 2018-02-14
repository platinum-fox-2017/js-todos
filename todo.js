// Controller
// let model = require('./model.js')
// let view = require('./view.js')


let controlFile = require('./controller.js')
const Controller = controlFile.Controller
// receive input
let argv = process.argv // 2
let control_process= new Controller(argv)

control_process.readCommand()

// let data_process = new DataProcess(argv)
// let view_process = new view.View()
// console.log(data_process.commands);
// if (data_process.readCommand() === 'help') {
//   view_process.displayHelp()
// } else if (data_process.readCommand() === 'list') {
//   view_process.displayDataJSON()
// } else if (data_process.readCommand() === 'add') {
//   // console.log(data_process.add_message);
//   data_process.addDataJSON(data_process.add_message)
// } else if (data_process.readCommand() === 'findById') {
//   view_process.findByIdJSON(data_process.id_look)
// } else if (data_process.readCommand() === 'delete') {
//
// }








module.exports = {
  argv : argv
}
