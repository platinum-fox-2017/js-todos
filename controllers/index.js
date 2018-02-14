const Models = require('../models')
const Views = require('../views');
const models = new Models
const views = new Views

class Controllers {
  constructor() {

  }
  input(command, task){
    if(command === 'help'){
      views.showCommand()
    }
    else if(command === 'list'){
      let list = models.list()
      views.showList(list)
    }
    else if(command === 'add'){
      models.add(task)
      views.showAdd(task)
    }
    else if(command === 'findById'){
      let id = models.findById(task)
      views.showById(id)
    }
    else {
      views.showHelp()
    }
  }
}

module.exports = Controllers
