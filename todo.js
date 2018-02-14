// Controller
let model = require('./model.js')
let view = require('./view.js')
// receive input
let argv = process.argv // 2
const DataProcess = model.DataProcess

let data_process = new DataProcess(argv)
let view_process = new view.View()
// console.log(data_process.commands);
if (data_process.readCommand() === 'help') {
  view_process.displayHelp()
} else if (data_process.readCommand() === 'list') {
  view_process.readDataJSON()
} else if (data_process.readCommand() === 'add') {
  data_process.addDataJSON(data_process.add_message)
}








module.exports = {
  argv : argv
}
