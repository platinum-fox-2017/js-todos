const fs = require('fs')

class DataProcess {
  constructor(input) {
    this.argv = input
    this.commands = this.parseCommand()
    this.add_message = ''
  }

  parseCommand() {
    return this.argv.slice(2)
  }

  readCommand() {
    for (let i = 0; i < this.commands.length; i++) {
      if(this.commands[i] === 'help' || this.commands[i] === 'helpme') {
        return 'help'
      } else if (this.commands[i] === 'list') {
        return 'list'
      } else if (this.commands[i] === 'add') {
        this.add_message = this.commands[i+1]
        // console.log(this.add_message);
        return 'add'
      }
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

  addDataJSON(message) {
    let messageParsed ={task: message}
    this.readDataJSON(function(err, data){
      let array = JSON.parse(data)
      array.push(messageParsed)
      let jsonData = JSON.stringify(array)
      // console.log(jsonData);

      fs.writeFile('./data.json', jsonData, 'utf-8', function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('message saved');
          // callback(null, 'message saved')
        }
      })

    })

  }

}

module.exports = {
  DataProcess : DataProcess
}
