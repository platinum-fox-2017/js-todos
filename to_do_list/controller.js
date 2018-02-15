"use strict"
const model = require('./model.js')
const view = require('./view.js')

class ToDoController{
  constructor() {

  }

  static execute(command1, command2) {
    switch(command1) {
      case 'help': this.showMenu(); break;
      case 'list': this.showList(); break;
      case 'add': this.addList(command2); break;
      case 'findById': this.findById(command2); break;
      case 'delete': this.deleted(command2); break;
      case 'complete': this.complete(command2); break;
      case 'uncomplete': this.uncomplete(command2); break;
      case 'list:created': this.listC(); break;
      default: this.showMenu(); break;
    }
  }

  static showMenu() {
    return view.help();
  }

  static showList() {
    model.bacaFile(function(data) {
      view.showList(data)
    })
  }

  static addList(newList) {
    model.addList(newList, function(data) {
      view.showList(data)
    })
  }

  static findById(num) {
    model.findById(num, function(data){
      view.showList(data)
    })
  }

  static deleted(num) {
    model.deleted(num, function(data) {
      view.showList(data)
    })
  }

  static complete(num) {
    model.complete(num, function(data) {
      view.showList(data)
    })
  }

  static uncomplete(num) {
    model.uncomplete(num, function(data) {
      view.showList(data)
    })
  }

  static listC() {
    model.listC(function(data) {
      view.showList(data)
    })
  }

}

module.exports = ToDoController
