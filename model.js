const fs = require('fs')

class DataProcess {
  constructor(input) {
    this.argv = input
    // this.commands = this.parseCommand()
    this.add_message = ''
    this.id_look = 0
    this.id_delete = ''
  }

  // parseCommand() {
  //   return this.argv.slice(2)
  // }

  // readCommand() {
  //   for (let i = 0; i < this.commands.length; i++) {
  //     if(this.commands[i] === 'help' || this.commands[i] === 'helpme') {
  //       console.log('test');
  //       return 'help'
  //     } else if (this.commands[i] === 'list') {
  //       return 'list'
  //     } else if (this.commands[i] === 'add') {
  //       this.add_message = this.commands[i+1]
  //       return 'add'
  //     } else if (this.commands[i] === 'findById') {
  //       this.id_look = this.commands[i+1]
  //       return 'findById'
  //     } else if (this.commands[i] === 'delete') {
  //       this.id_delete = this.commands[i+1]
  //       console.log(this.commands);
  //       // this.deleteDataJSON(this.id_delete)
  //       return 'delete'
  //     }
  //   }
  // }


  readDataJSON(callback) {
    fs.readFile('./data.json', 'utf-8', function (err, data) {
        if (err) {
          console.log(err);
        } else {
          callback(null, data)
        }

    })
  }

  // writeFileJSON(newData, callback){
  //   // Callback area
  //   fs.writeFile('./data.json', newData, 'utf-8', function(err) {
  //     if (err) {
  //       callback(err, null)
  //     } else {
  //       callback(null, 'message saved')
  //     }
  //   })
  // }

  deleteDataJSON(id) {
    console.log(id);
    this.readDataJSON(function(err,data){
      let array = JSON.parse(data)
      let deletedData = array[id-1]
      console.log(`Deleted ${deletedData.task} from your TODO kist....`);
      array.splice(id-1,1)
      let jsonData = JSON.stringify(array)

      fs.writeFile('./data.json', jsonData, 'utf-8', function(err) {
        if (err) {
          console.log(err);
        } else {

        }
      })

    })
  }

  addDataJSON(message) {
    let messageParsed ={task: message}
    // console.log(messageParsed);
    this.readDataJSON(function(err, data){
      let array = JSON.parse(data)
      array.push(messageParsed)
      for (let i = 0; i < array.length; i++) {
        if(array[i].check === undefined) {
          array[i].check = ' '
        }
      }
      let jsonData = JSON.stringify(array)

      fs.writeFile('./data.json', jsonData, 'utf-8', function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('message saved');
        }
      })
    })
  }

  completeDataJSON(id) {
    this.readDataJSON(function(err, data){
      let array = JSON.parse(data)
      for (let i = 0; i < array.length; i++) {
        if(array[i].check === undefined) {
          array[i].check = ' '
        }
        if (id-1 === i) {
          array[i].check = 'X'
        }
      }
      let jsonData = JSON.stringify(array)

      fs.writeFile('./data.json', jsonData, 'utf-8', function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('message saved');
        }
      })
    })
  }

  uncompleteDataJSON(id) {
    this.readDataJSON(function(err, data){
      let array = JSON.parse(data)
      for (let i = 0; i < array.length; i++) {
        if(array[i].check === undefined) {
          array[i].check = ' '
        }
        if (id-1 === i) {
          array[i].check = ' '
        }
      }
      let jsonData = JSON.stringify(array)

      fs.writeFile('./data.json', jsonData, 'utf-8', function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('message saved');
        }
      })
    })
  }
}

module.exports = {
  DataProcess : DataProcess
}
