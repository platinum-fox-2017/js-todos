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
    else if(command === 'list:created'){
      if(task === 'desc'){
        let list = models.sortDesc()
        views.showList(list)
      }
      else {
        let list = models.sort()
        views.showList(list)
      }
    }
    else if(command === 'list:completed'){
      if(task === 'desc'){
        let list = models.listCompletedDesc()
        views.showList(list)
      }
      else {
        let list = models.listCompleted()
        views.showList(list)
      }
    }
    else if(command === 'list:uncompleted'){
      if(task === 'desc'){
        let list = models.listUncompletedDesc()
        views.showList(list)
      }
      else {
        let list = models.listUncompleted()
        views.showList(list)
      }
    }
    else if(command === 'tag'){
      let tag = models.tag(task)
      views.showTag(tag)
    }
    else if(command === 'filter'){
      let filter = models.filter(task)
      views.showList(filter)
    }
    else {
      views.showHelp()
    }
  }
}

module.exports = Controllers
