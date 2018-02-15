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

  findByIdJSON(id, err, data) {
    // this.id_look
    // this.readDataJSON(function(err, data){
    // })
    let array = JSON.parse(data)
    console.log(`${id}. ${array[id-1].task}`);
  }

  displayDataJSON(err, data) {
    // this.readDataJSON(function(err, data){
    //
    // })
    let array = JSON.parse(data)
    for (let i = 0; i < array.length; i++) {
      if(array[i].check === undefined) {
        array[i].check = ' '
      }
    }
    for (let i = 0; i < array.length; i++) {
      console.log(`${i+1}. [${array[i].check}] ${array[i].task}`);
    }
  }

  displaySortCreatedJSON(sortDirection, err, data) {
    // this.readDataJSON(function(err, data){
    // })
    let array = JSON.parse(data)
    if (sortDirection === 'desc') {
      array.sort(function(a, b){
        return new Date(b.created).getTime() - new Date(a.created).getTime()
      })
    } else if (sortDirection === 'asc' || sortDirection === undefined) {
      array.sort(function(a, b){
        return new Date(a.created).getTime() - new Date(b.created).getTime()
      })
    }
    // console.log(array);
    for (let i = 0; i < array.length; i++) {
      console.log(`${i+1}. [${array[i].check}] ${array[i].task} created at: ${array[i].created}`);
    }
  }

  displaySortCheckJSON(sortDirection, err, data) {
    let array = JSON.parse(data)
    let arrayChecked = []
    let arrayNotChecked = []
    for (let i = 0; i < array.length; i++) {
      if (array[i].completedDate !== '') {
        arrayChecked.push(array[i])
      } else {
        arrayNotChecked.push(array[i])
      }
    }
    if (sortDirection === 'desc') {
      arrayChecked.sort(function(a, b){
        return new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime()
      })
    } else if (sortDirection === 'asc' || sortDirection === undefined) {
      arrayChecked.sort(function(a, b){
        return new Date(a.completedDate).getTime() - new Date(b.completedDate).getTime()
      })
    }
    let sortedArray = arrayChecked.concat(arrayNotChecked)
    for (let i = 0; i < sortedArray.length; i++) {
      console.log(`${i+1}. [${sortedArray[i].check}] ${sortedArray[i].task} completed at: ${sortedArray[i].completedDate}`);
    }
  }

  displayAdd(argv){
    console.log(`added ${argv[3]} to your TODO list`);
  }

  displayDelete(argv, deletedData){
    console.log(`Deleted ${deletedData.task} from your TODO list....`);
  }

  displayComplete(argv, array){
    let id = argv[3]-1;
    console.log(`task ${array[id].task} succesfully completed`);
  }

  displayUncomplete(argv, array){
    let id = argv[3]-1;
    console.log(`task ${array[id].task} succesfully uncompleted`);
  }

  displayTagInfo(argv, array) {
    let id = argv[3]-1;
    let tags = argv.slice(4);
    let message = `Tagged task ${array[id].task} with task: `;
    for (var i = 0; i < tags.length; i++) {
      message += tags[i]+' '
    }
    console.log(message);
  }

  displaySortFilterJSON(tagCmd, sortDirection, err, data) {
    let array = JSON.parse(data)
    let arrayTag = []
    let arrayNotTag = []
    for (let i = 0; i < array.length; i++) {
      for (let k = 0; k < array[i].tag.length; k++) {
        if (array[i].tag[k] === tagCmd) {
          arrayTag.push(array[i])
        }
      }
    }

    if (sortDirection === 'desc') {
      arrayTag.sort(function(a, b){
        return new Date(b.created).getTime() - new Date(a.created).getTime()
      })
    } else if (sortDirection === 'asc' || sortDirection === undefined) {
      arrayTag.sort(function(a, b){
        return new Date(a.created).getTime() - new Date(b.created).getTime()
      })
    }

    let sortedArray = arrayTag
    for (let i = 0; i < sortedArray.length; i++) {
      console.log(`${i+1}. [${sortedArray[i].tag}] ${sortedArray[i].task} created at: ${sortedArray[i].created}`);
    }
  }

}

module.exports = {
  View : View
}
