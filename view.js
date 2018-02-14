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
        var dataArr = data.split('\r\n')
        for (let i = 0; i < dataArr.length; i++) {
          dataArr[i]= dataArr[i].trim()
        }
        dataArr.shift()
        dataArr.pop()
        if (dataArr[dataArr.length-1] === ']') {
          dataArr.pop()
        }
        for (let i = 0; i < dataArr.length; i++) {
          dataArr[i] = dataArr[i].substr(8).trim()
          dataArr[i] = dataArr[i].substr(1,dataArr[i].length-3)
          dataArr[i] = `${i+1}. ${dataArr[i]}`
          console.log(dataArr[i]);
        }
        // console.log(dataArr)
      }

    });
  }
}

module.exports = {
  View : View
}
