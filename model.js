const fs = require('fs')

class Model {
  constructor() {

  }

  static readData() {
    let dataStr = fs.readFileSync('./data.json','utf8')
    let dataJson = JSON.parse(dataStr)
    return dataJson
  }

  static addData(data) {
    let file_json = Model.readData()
    let newObj = { task: data, status: '[ ]', date: new Date(), tag: ''}
    file_json.push(newObj)
    let json_str = JSON.stringify(file_json)
    fs.writeFileSync('data.json', json_str)
  }

  static findData(data){
    let num_data = Number(data)
    let file_json = Model.readData()
    let result = ''
    for (var i = 0; i < file_json.length; i++) {
      if (num_data === i+1) {
        result += `${i+1}. ${file_json[i].task}`
      }
    }
    return result
  }

  static deleteData(data){
    let num_data = Number(data)
    let file_json = Model.readData()
    let deleted = ''
    for (var i = 0; i < file_json.length; i++) {
      if (num_data === i+1) {
        deleted += file_json[i].task
        delete file_json[i].task
        file_json.splice(i,1)
      }
    }
    let json_str = JSON.stringify(file_json)
    fs.writeFileSync('data.json', json_str)
    return deleted
  }

  static completeData(data) {
    let num_data = Number(data)
    let file_json = Model.readData()
    for (var i = 0; i < file_json.length; i++) {
      if (num_data === i+1) {
        file_json[i].status = '[x]'
      }
    }
    let json_str = JSON.stringify(file_json)
    fs.writeFileSync('data.json', json_str)
    return file_json
  }

  static uncompleteData(data) {
    let num_data = Number(data)
    let file_json = Model.readData()
    for (var i = 0; i < file_json.length; i++) {
      if (num_data === i+1) {
        file_json[i].status = '[ ]'
      }
    }
    let json_str = JSON.stringify(file_json)
    fs.writeFileSync('data.json', json_str)
    return file_json
  }

  static listComplete() {
    let file_json = Model.readData()
    let complete = []
    for (var i = 0; i < file_json.length; i++) {
      if (file_json[i].status === '[x]') {
        complete.push(file_json[i].task)
      }
    }
    return complete
  }

  static createdData(data) {
    let file_json = Model.readData()
    if (data === 'asc') {
      file_json.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date)
      })
      return file_json
    }
    else if (data === 'desc'){
      file_json.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date)
      })
      return file_json
    }
    else {
      console.log('invalid');
    }
  }

  static newTag(data, data1) {
    let num_data = +data
    let file_json = Model.readData()
    let tag = []
    for (var i = 0; i < file_json.length; i++) {
      if (num_data === i+1) {
        file_json[i].tag = data1
        tag.push(file_json[i])
      }
    }
    let json_str = JSON.stringify(file_json)
    fs.writeFileSync('data.json', json_str)
    return tag
  }

  static filterData(data) {
    let file_json = Model.readData()
    // console.log(data);
    let filter = []
    for (var i = 0; i < file_json.length; i++) {
      if (data === file_json[i].tag) {
        filter.push(file_json[i])
      }
    }
    return filter
  }

}













// Model.addData()

module.exports = Model
