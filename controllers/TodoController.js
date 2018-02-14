const TodoView = require('../views/TodoView.js');
const TodoModel = require('../models/TodoModel.js');

class TodoController {
  constructor(command,flag,arrFlag) {
   this.command = command || ''; 
   this.flag = flag || ''; 
   this.arrFlag = arrFlag || []; 
  }
  runCommand(){
    if (this.command === 'help' || this.command === '') {
      TodoView.showAllCommand();
    } else if(this.command === 'list') {
      var list = TodoModel.getTodoList(TodoView.showTodoList);
    } else if (this.command === 'add' ) {
      var added = TodoModel.addTodoList(this.flag);
      if(added){
        TodoView.showSuccessAdded(this.flag);
      } else {
        TodoView.showFailureAdding();
      }
    } else if(this.command === 'findById'){
      let findById = TodoModel.findById(this.flag,TodoView.showFindById);
    } else if(this.command === 'delete'){
      var deleted = TodoModel.delete(this.flag,TodoView.showSuccessDeleted);
    } else if(this.command === 'complete'){
      TodoModel.complete(this.flag);
      TodoModel.getTodoList(TodoView.showTodoList);
    } else if(this.command === 'uncomplete'){
      TodoModel.uncomplete(this.flag);
      TodoModel.getTodoList(TodoView.showTodoList);
    } else if(this.command === 'list:completed'){
      var complete = TodoModel.getCompletedTodoList(this.flag,TodoView.showTodoList);
    } else if(this.command === 'list:created'){
      var complete = TodoModel.getCompletedTodoList(this.flag,TodoView.showTodoList);
    } else if(this.command === 'tag'){
      TodoModel.addTag(this.flag,this.arrFlag,TodoView.showSuccessAddedTag)
    } else if(this.command.search('filter') >= 0){
      var splitCommand = this.command.split(':');
      var flag = splitCommand[1];
      this.flag = flag;
      TodoModel.filterTag(this.flag,TodoView.showTodoList)
    }
  }
}
module.exports = TodoController;
