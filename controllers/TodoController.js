
const TodoView = require('../views/TodoView.js');
const TodoModel = require('../models/TodoModel.js');

class TodoController {
  constructor(command,flag) {
   this.command = command || ''; 
   this.flag = flag || ''; 
  }
  runCommand(){
    if (this.command === 'help' || this.command === '') {
      TodoView.showAllCommand();
    } else if(this.command === 'list') {
      //jalankan perintah todo
      var list = TodoModel.getTodoList();
      TodoView.showTodoList(list);
    } else if (this.command === 'add' ) {
      var added = TodoModel.addTodoList(this.flag);
      if(added){
        TodoView.showSuccessAdded(this.flag);
      } else {
        TodoView.showFailureAdding();
      }
    } else if(this.command === 'findById'){
      let findById = TodoModel.findById(this.flag);
      if(findById != ''){
        TodoView.showFindById(this.flag, findById);
      } else {
        TodoView.failToFind(this.flag);
      }
    } else if(this.command === 'delete'){
      var name = TodoModel.findById(this.flag);
      var deleted = TodoModel.delete(this.flag);
      if(deleted){
        TodoView.showSuccessDeleted(name);
      } else {
        TodoView.showFailToDelete();
      }
    } else if(this.command === 'complete'){
      var complete = TodoModel.complete(this.flag);
      if(complete){
        var list = TodoModel.getTodoList();
        TodoView.showTodoList(list);
      } else {
        TodoView.failToComplete();
      }
    } else if(this.command === 'uncomplete'){
      var complete = TodoModel.uncomplete(this.flag);
      if(complete){
        var list = TodoModel.getTodoList();
        TodoView.showTodoList(list);
      } else {
        TodoView.failToUnComplete();
      }
    }
  }
}
module.exports = TodoController;
