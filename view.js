
class View {
  constructor() {
    this.valid_inputs = ['help', 'list', 'add <task_content>', 'findByID <task_id>', 'delete <task_id>', 'complete <task_id>', 'uncomplete <task_id>']
  }

  displayHelp(){
    console.log('Use these commands to do things');
    for (var i = 0; i < this.valid_inputs.length; i++) {
      console.log(`node todo.js ${this.valid_inputs[i]}`);
    }
  }
}

module.exports = {
  View : View
}
