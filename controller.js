const View = require('./view.js')
const Model = require('./model.js')

class Controller {
  constructor(){


  }

  static toDo(input,task_by_user){
    if(input == "help"){
      return View.showHelp()
    } else if (input == "list"){
      return Controller.viewList()
    } else if (input == "add"){
      return Controller.addTask(task_by_user)
    } else if (input == "find"){
      return Controller.findIdNumber(task_by_user)
    } else if (input == "delete"){
      return Controller.deleteTask(task_by_user)
    } else if (input == 'complete') {
      return Controller.completeTest(task_by_user)
    } else if (input == 'uncomplete') {
      return Controller.uncompleteTest(task_by_user)
    } else if (input == 'list' && task_by_user == 'sortAsc'){
      return Controller.sortAsc()
    } else if (input == 'list:sortDesc'){
      return Controller.sortDesc()
    } else if (input == 'showComplete'){
      return Controller.showComplete()
    } else if (input == 'showUncomplete'){
      return Controller.showUncomplete()
    } else if (input == 'addTag'){
      return Controller.addTag(task_by_user)
    } else if (input == 'removeTag'){
      return Controller.removeTag(task_by_user)
    } else if (input == 'filter'){
      return Controller.filter(task_by_user)
    } else {
      return View.showHelp()
    }
  }

  static viewList(){
    let detailList = Model.read()
    return View.showList(detailList)
  }

  static addTask(task_by_user){
    let addTask = Model.addList(task_by_user)
    return View.showAddedTask(task_by_user)
  }

  static findIdNumber(task_by_user){
    let searchID = Model.findByID(task_by_user)
    return View.findTaskByIndex(searchID)
  }

  static deleteTask(task_by_user){
    let deleteTugas = Model.delete(task_by_user)
    return View.showDeletedTask(deleteTugas)
  }

  static completeTest(task_by_user){
    let data_complete = Model.complete(task_by_user)
    return View.showList(data_complete)
  }

  static uncompleteTest(task_by_user){
    let data_uncomplete = Model.uncomplete(task_by_user)
    return View.showList(data_uncomplete)
  }

  static sortAsc(){
    let sort = Model.sortAsc()
    return View.showList(sort)
  }

  static sortDesc(){
    let sort = Model.sortDesc()
    return View.showList(sort)
  }

  static showComplete(){
    let complete = Model.showComplete()
    return View.showList(complete)
  }

  static showUncomplete(){
    let uncomplete = Model.showUncomplete()
    return View.showList(uncomplete)
  }

  static addTag(task_by_user){
    let addTag = Model.addTag(task_by_user)
    return View.showList(addTag)
  }

  static removeTag(task_by_user){
    let removeTag = Model.removeTag(task_by_user)
    return View.showList(removeTag)
  }

  static filter(task_by_user){
    let filter = Model.filter(task_by_user)
    return View.showList(filter)
  }

}

module.exports = Controller
