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
    else if(command === 'delete'){
      let id = models.delete(task)
      views.showDelete(id)
    }
    else if(command === 'complete'){
      models.complete(task)
      let list = models.list()
      views.showList(list)
    }
    else if(command === 'uncomplete'){
      models.uncomplete(task)
      let list = models.list()
      views.showList(list)
    }
    else {
      views.showHelp()
    }
  }
}

module.exports = Controllers
