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
    let list = model.bacaFile()
    return view.showList(list)
  }

  static addList(newList) {
    let listUpdate = model.addList(newList)
    return view.showList(listUpdate)
  }

  static findById(num) {
    let list = model.findById(num)
    return view.showList(list)
  }

  static deleted(num) {
    let listUpdate = model.deleted(num)
    return view.showList(listUpdate)
  }

  static complete(num) {
    let list = model.complete(num)
    return view.showList(list)
  }

  static uncomplete(num) {
    let list = model.uncomplete(num)
    return view.showList(list)
  }

  static listC() {
    let list = model.listC()
    return view.showList(list)
  }

}

module.exports = ToDoController
