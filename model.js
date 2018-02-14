const fs = require('fs')

class DataProcess {
  constructor(input) {
    this.argv = input
    this.commands = this.parseCommand()
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
      }
    }
  }

  // readDataJSON(callback) {
  //   fs.readFile('./data.json', 'utf-8', function(err, data){
  //     if(err){
  //       console.log(err);
  //     } else {
  //       console.log(data);
  //       // this.data_json = data
  //     }
  //   });
  // }

}

module.exports = {
  DataProcess : DataProcess
}
