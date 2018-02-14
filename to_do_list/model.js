"use strict"

let fs = require('fs')

class ToDoModel {
  constructor() {
  }

  static bacaFile() {
    let data = fs.readFileSync('./data.json', 'UTF-8')
    let list = JSON.parse(data);
    return list
  }

  static writeFile(data) {
    fs.writeFileSync('./data.json', JSON.stringify(data))
  }

  static addList(newList) {
    let list = ToDoModel.bacaFile()
    let newListObj = {}
    newListObj.id = list[list.length-1].id+1
    newListObj.check = "[ ]"
    newListObj.task = newList
    newListObj.time = new Date()
    list.push(newListObj)

    ToDoModel.writeFile(list)
    return list
  }

  static findById(num) {
    let list = ToDoModel.bacaFile(num)
    let arrList = []
    for(let i=0; i<list.length; i++) {
      if(list[i].id == num) {
        arrList.push(list[i])
      }
    }
    return arrList
  }

  static deleted(num) {
    let list = ToDoModel.bacaFile()
    for(let i=0; i<list.length; i++) {
      if(list[i].id == num) {
        list.splice(i,1)
        ToDoModel.writeFile(list)
      }
    }
    return list
  }

  static complete(num) {
    let list = ToDoModel.bacaFile()
    for(let i=0; i<list.length; i++) {
      if(list[i].id == num) {
        list[i].check = "[X]"
        ToDoModel.writeFile(list)
      }
    }
    return list
  }

  static uncomplete(num) {
    let list = ToDoModel.bacaFile()
    for(let i=0; i<list.length; i++) {
      if(list[i].id == num) {
        list[i].check = "[ ]"
        ToDoModel.writeFile(list)
      }
    }
    return list
  }

  static listC() {
    let list = ToDoModel.bacaFile()
    let listSorted = []
    let time0 = 0
    for (var i = 0; i < list.length; i++) {
      // if()
    }
    return list
  }

}

module.exports = ToDoModel
