
const TodoView = require('../views/TodoView.js');

class TodoController {
  constructor(command) {
   this.command = command || ''; 
  }
  runCommand(){
    if (this.command === 'help' || this.command === '') {
      TodoView.showAllCommand();
    } else {
      //jalankan perintah todo
      
    }
  }
}
module.exports = TodoController;
