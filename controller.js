// Controller
let model = require('./model.js')
let view = require('./view.js')
let todo = require('./todo.js')
const DataProcess = model.DataProcess
const ViewProcess = view.View
let argv = todo.argv

class Controller {
  constructor(input) {
    this.argv = input
  }

  readCommand(argv) {
    let view_process = new ViewProcess()
    let data_process = new DataProcess()
    switch(argv[2]) {
      case 'help': view_process.displayHelp(); break;
      case 'list': data_process.readDataJSON(function(err, data){
        view_process.displayDataJSON(err, data);
        }); break;
      case 'add': data_process.addDataJSON(argv[2+1]); break;
      case 'findById': data_process.readDataJSON(function(err, data){
        view_process.findByIdJSON(argv[2+1], err, data)
        }); break;
      case 'delete': data_process.deleteDataJSON(targv[2+1]); break;
      case 'complete': data_process.completeDataJSON(argv[2+1]); break;
      case 'uncomplete': data_process.uncompleteDataJSON(argv[2+1]); break;
      case 'list:created': data_process.readDataJSON(function(err, data){
        view_process.displaySortCreatedJSON(argv[2+1], err, data)
        }); break;
      case 'list:completed': data_process.readDataJSON(function(err, data){
        view_process.displaySortCheckJSON(argv[2+1], err, data)
        }); break;
      case 'tag': data_process.tagDataJSON(argv);
        // view_process.displayTagInfo(argv)
        break;
      case 'filter': data_process.readDataJSON(function(err, data){
        view_process.displaySortFilterJSON(argv[2+1], err, data);
        }); break;
      // filter:<tagName>

      default : console.log('error');
    }
  }

}


module.exports = {
  Controller : Controller
}
