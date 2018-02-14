
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
      }
    }
  }


}

module.exports = {
  DataProcess : DataProcess
}
