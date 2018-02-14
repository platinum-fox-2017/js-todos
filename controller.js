const Model = require('./model.js')
const View =  require('./view.js')

class Controller{
  static commandManage(command,task){
      if (command[0] === 'help' || command.length === 0){
        View.showHelp()
      }else if(command[0] === 'list'){
        let data = Model.readData()
        View.showData(data)
      }else if (command[0] === 'add'){
        Model.writeData(command.slice(1).join(' '))
        View.addData(command.slice(1).join(' '))
      }else if(command [0] === 'findById'){
        let find = Model.findId(command[1])
        View.findData(find)
      }else if (command[0] === 'delete'){
        let data = Model.deleteId(command[1])
        View.showDelete(data)
      }else if(command[0] === 'complete'){
        let data = Model.complete(command[1])
        View.showData(data)
      }else if (command [0] === 'uncomplete'){
        let data = Model.uncomplete(command[1])
        View.showData(data)
      }else if(command[0] === 'list:created'){
        let data = Model.listCreated(command[1])
        View.listCreatedData(data,command[1] || "asc")
      }else if(command[0] === 'list:completed'){
        let data = Model.listCompleted(command[1])
        View.listCompletedData(data,command[1]|| "asc")
      }else if(command[0] === 'tag'){
        let data = Model.tagData(command[1],command.slice(2))
        View.showTags(data,command[1])
      }else if(command[0] === 'filter'){
        let data = Model.filterTag(command[1])
        View.showFilter(data)
      }
  }

}

module.exports = Controller
