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
    let frontCmd = argv[2].split(':')[0]
    let tagCmd = argv[2].split(':')[1]
    // console.log(frontCmd, tagCmd);

    let input;

    if (frontCmd === 'filter' && tagCmd !== undefined) {
      input = 'filter'
    } else {
      input = argv[2]
    }
    // console.log(argv);
    switch(input) {
      case 'help': view_process.displayHelp(); break;
      case 'list': data_process.readDataJSON(function(err, data){
        view_process.displayDataJSON(err, data);
        }); break;
      case 'add': data_process.addDataJSON(argv[2+1], function(){
        view_process.displayAdd(argv)
      }); break;
      case 'findById': data_process.readDataJSON(function(err, data){
        view_process.findByIdJSON(argv[2+1], err, data)
        }); break;
      case 'delete': data_process.deleteDataJSON(argv[2+1], function(deletedData){
        view_process.displayDelete(argv, deletedData)
        }); break;
      case 'complete': data_process.completeDataJSON(argv[2+1], function(err, data){
        view_process.displayComplete(argv, data)
        }); break;
      case 'uncomplete': data_process.uncompleteDataJSON(argv[2+1],function(err,data){
        view_process.displayUncomplete(argv, data)
        }); break;
      case 'list:created': data_process.readDataJSON(function(err, data){
        view_process.displaySortCreatedJSON(argv[2+1], err, data)
        }); break;
      case 'list:completed': data_process.readDataJSON(function(err, data){
        view_process.displaySortCheckJSON(argv[2+1], err, data)
        }); break;
      case 'tag': data_process.tagDataJSON(argv, function(err, data){
        view_process.displayTagInfo(argv, data)
        }); break;
      case 'filter': data_process.readDataJSON(function(err, data){
        view_process.displaySortFilterJSON(tagCmd, argv[2+1], err, data);
        }); break;
      default : console.log('error');
    }
  }

}


module.exports = {
  Controller : Controller
}
