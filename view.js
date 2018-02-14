const fs = require('fs')

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

  readDataJSON(callback) {
    fs.readFile('./data.json', 'utf-8', function(err, data){
      if(err){
        console.log(err);
      } else {
        let array = JSON.parse(data)
        for (let i = 0; i < array.length; i++) {
          console.log(`${i+1}. ${array[i].task}`);
        }
      }

    });
  }
}

module.exports = {
  View : View
}
