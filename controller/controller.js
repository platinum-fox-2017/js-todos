"use strict"
const View = require('../view/views.js')
const Models = require('../models/models.js')


class Controller {
  static execute (command, addition, options) {
    if(!command || command === 'help') {
      View.help()
    } else if(command.substr(0,6) === 'filter') {
      addition = command.substr(7)
      Models.filter(addition, View.filter)
    } else {
      switch(command) {
        case 'list' :
          Models.read(View.list)
          break;
        case 'add'  :
          Models.add(addition, View.add)
          break;
        case 'findById' :
          Models.findById(addition, View.findById)
          break;
        case 'delete' :
          Models.delete(addition, View.delete)
          break;
        case 'complete' :
          Models.complete(addition, View.complete)
          break;
        case 'uncomplete' :
          Models.uncomplete(addition, View.uncomplete)
          break;
        case 'list:created' :
          Models.listCreated(addition, View.listCreated)
          break;
        case 'list:completed' :
          Models.listCompleted(addition, View.listCompleted)
          break;
        case 'tag' :
          Models.tag(addition, options, View.tag)
          break;
        default :
          View.help()
      }
    }
  }
}

module.exports = Controller