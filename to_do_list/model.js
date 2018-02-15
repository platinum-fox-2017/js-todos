"use strict"

let fs = require('fs')

class ToDoModel {
  constructor() {
  }

  static bacaFile(callback) {
    fs.readFile('./data.json', 'utf8', function (err, data) {
      if (err) throw err;
      let dataObj = JSON.parse(data);
      callback(dataObj)
    });
  }

  static writeFile(data, callback) {
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
      if (err) throw err;
      callback()
    });
  }

  static addList(newList, callback) {
    ToDoModel.bacaFile(function(data) {
      let newListObj = {}
      newListObj.id = data[data.length-1].id+1
      newListObj.check = "[ ]"
      newListObj.task = newList
      newListObj.time = new Date()
      data.push(newListObj)

      ToDoModel.writeFile(data,function(){
        callback(data)
      })
    })
  }

  static findById(num, callback) {
    ToDoModel.bacaFile(function(data) {
      let arrList = []
      for(let i=0; i<data.length; i++) {
        if(data[i].id == num) {
          arrList.push(data[i])
        }
      }
      callback(arrList)
    })
  }

  static deleted(num, callback) {
    ToDoModel.bacaFile(function(data) {
      for(let i=0; i<data.length; i++) {
        if(data[i].id == num) {
          data.splice(i,1)

          ToDoModel.writeFile(data,function(){
            callback(data)
          })
        }
      }
    })
  }

  static complete(num, callback) {
    ToDoModel.bacaFile(function(data) {
      for(let i=0; i<data.length; i++) {
        if(data[i].id == num) {
          data[i].check = "[X]"

          ToDoModel.writeFile(data, function(){
          callback(data)
          })
        }
      }
    })
  }

  static uncomplete(num, callback) {
    ToDoModel.bacaFile(function(data) {
      for(let i=0; i<data.length; i++) {
        if(data[i].id == num) {
          data[i].check = "[ ]"

          ToDoModel.writeFile(data, function(){
          callback(data)
          })
        }
      }
    })
  }

  static listC() {
    ToDoModel.bacaFile(function(data){

    })
  }


}

module.exports = ToDoModel
