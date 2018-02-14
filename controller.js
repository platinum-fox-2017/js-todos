// Controller
let model = require('./model.js')
let view = require('./view.js')
let todo = require('./todo.js')
const DataProcess = model.DataProcess
const ViewProcess = view.View
let argv = todo.argv // 2

class Controller {
  constructor(input) {
    this.argv = input
    this.commands = this.parseCommand()
    this.add_message = ''
    this.id_look = 0
    this.id_delete = ''
  }

  parseCommand() {
    return this.argv.slice(2)
  }

  readCommand() {
    for (let i = 0; i < this.commands.length; i++) {
      if(this.commands[i] === 'help' || this.commands[i] === 'helpme') {
        view_process.displayHelp()
        // return 'help'
      } else if (this.commands[i] === 'list') {
        view_process.displayDataJSON()
        // return 'list'
      } else if (this.commands[i] === 'add') {
        this.add_message = this.commands[i+1]
        /////////////////////////////
        data_process.addDataJSON(this.add_message)
        // return 'add'
      } else if (this.commands[i] === 'findById') {
        this.id_look = this.commands[i+1]
        view_process.findByIdJSON(this.id_look)
        // return 'findById'
      } else if (this.commands[i] === 'delete') {
        this.id_delete = this.commands[i+1]
        this.deleteDataJSON(this.id_delete)
        // return 'delete'
      }
    }
  }


}

// let controller = new Controller()
let data_process = new DataProcess()
let view_process = new ViewProcess()


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
  Controller : Controller
}
