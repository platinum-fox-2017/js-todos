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
    return this._data
  }
  add(task){
    let obj = {"task": task, "done": "[ ]"}
    this._data.push(obj)
    let data = JSON.stringify(this._data)
    return fs.writeFileSync('./data.json', data)
  }
  findById(task){
    let id = +task
    return id+'. '+this._data[id-1].task;
  }
  delete(task){
    let id = +task
    let deleted = this._data.splice(id-1, 1)
    let data = JSON.stringify(this._data)
    fs.writeFileSync('./data.json', data)
    return deleted[0].task
  }
  complete(task){
    let id = +task
    this._data[id-1].done = "[X]"
    let data = JSON.stringify(this._data)
    return fs.writeFileSync('./data.json', data)
  }
  uncomplete(task){
    let id = +task
    this._data[id-1].done = "[ ]"
    let data = JSON.stringify(this._data)
    return fs.writeFileSync('./data.json', data)
  }
}

module.exports = Models
