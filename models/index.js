const Controllers = require('../controllers')
const fs = require('fs');

class Models {
  constructor() {
    this._data = this.getData()
  }
  getData(){
    let file = fs.readFileSync('./data.json', 'utf8')
    let data = JSON.parse(file)
    return data
  }
  list(){
    let result = []
    this._data.forEach(data =>{
      result.push(data.task)
    })
    return result
  }
  add(task){
    let obj = {"task": task}
    this._data.push(obj)
    let data = JSON.stringify(this._data)
    return fs.writeFileSync('./data.json', data)
  }
  findById(task){
    let id = +task
    return id+'. '+this._data[id-1].task;
  }
}

module.exports = Models
