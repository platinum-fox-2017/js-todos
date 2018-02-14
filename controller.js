const Model = require('./model')
const View = require('./view')

class Controller {
  constructor() {

  }

  static doSomething(input, task_from_user) {
    if (input === 'help') {
      View.showHelp()
    }
    else if (input === 'list') {
      return View.showList(Model.readData())
    }
    else if (input === 'add') {
      let inputTask = Model.addData(task_from_user)
      return View.showAdd(task_from_user)
    }
    else if (input === 'findById') {
      let search = Model.findData(task_from_user)
      return View.showFind(search)
    }
    else if (input === 'delete') {
      let delete_data = Model.deleteData(task_from_user)
      return View.viewDeleted(delete_data)
      // console.log(delete_data);
    }
    else {
      View.doNothing()
    }
  }
}

module.exports = Controller
