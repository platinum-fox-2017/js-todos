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
      let search_data = Model.findData(task_from_user)
      return View.showFind(search_data)
    }
    else if (input === 'delete') {
      let delete_data = Model.deleteData(task_from_user)
      return View.viewDeleted(delete_data)
      // console.log(delete_data);
    }
    else if (input === 'complete') {
      let complete_data = Model.completeData(task_from_user)
      return View.viewComplete(complete_data)
    }
    else if (input === 'uncomplete') {
      let uncomplete_data =Model.uncompleteData(task_from_user)
      return View.viewUncomplete(uncomplete_data)
    }
    else {
      View.doNothing()
    }
  }
}

module.exports = Controller
