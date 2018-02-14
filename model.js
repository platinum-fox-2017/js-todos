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
    let newObj = { task: data }
    file_json.push(newObj)
    let json_str = JSON.stringify(file_json)
    fs.writeFileSync('data.json', json_str)
  }

  static findData(data){
    let num_data = Number(data)
    let file_json = Model.readData()
    let result = ''
    for (var i = 0; i < file_json.length; i++) {
      // console.log((i+1), data);
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
        // console.log(file_json[i]);
        deleted += file_json[i].task
        delete file_json[i].task
        file_json.splice(i,1)
      }
    }
    let json_str = JSON.stringify(file_json)
    fs.writeFileSync('data.json', json_str)
    return deleted
  }
}

// Model.addData()

module.exports = Model
