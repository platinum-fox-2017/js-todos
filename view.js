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
    fs.readFile('./data.json', 'utf-8', function (err, data) {
        if (err) {
          console.log(err);
        } else {
          callback(null, data)
        }

    })
  }

  findByIdJSON(id) {
    // this.id_look
    this.readDataJSON(function(err, data){
      let array = JSON.parse(data)
      console.log(`${id}. ${array[id-1].task}`);
    })
  }

  displayDataJSON(callback) {
    this.readDataJSON(function(err, data){
      let array = JSON.parse(data)
      for (let i = 0; i < array.length; i++) {
        if(array[i].check === undefined) {
          array[i].check = ' '
        }
      }
      console.log(array);
      for (let i = 0; i < array.length; i++) {
        console.log(`${i+1}. [${array[i].check}] ${array[i].task}`);
      }
    })
  }
}

module.exports = {
  View : View
}
