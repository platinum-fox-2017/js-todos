const fs = require('fs');

class Models {
  constructor() {
    this._data = this.readData()
  }
  readData(){
    let file = fs.readFileSync('./data.json', 'utf8')
    let data = JSON.parse(file)
    return data
  }
  writeData(){
    let data = JSON.stringify(this._data)
    return fs.writeFileSync('./data.json', data)
  }
  list(){
    return this._data
  }
  add(task){
    let obj = {"task": task, "done": "🔘 ", tag: [], created: Date.now()}
    this._data.push(obj)
    this.writeData()
  }
  findById(task){
    let id = +task
    return id+'. '+this._data[id-1].task;
  }
  delete(task){
    let id = +task
    let deleted = this._data.splice(id-1, 1)
    this.writeData()
    return deleted[0].task
  }
  complete(task){
    let id = +task
    this._data[id-1].done = "☑️ "
    this.writeData()
  }
  uncomplete(task){
    let id = +task
    this._data[id-1].done = "🔘 "
    this.writeData()
  }
  sort(){
    for(let i=0; i<this._data.length-1; i++){
      if(this._data[i].created > this._data[i+1].created){
        let temp = this._data[i+1]
        this._data[i+1] = this._data[i]
        this._data[i] = temp
        i = -1
      }
    }
    return this._data
  }
  sortDesc(){
    for(let i=0; i<this._data.length-1; i++){
      if(this._data[i].created < this._data[i+1].created){
        let temp = this._data[i+1]
        this._data[i+1] = this._data[i]
        this._data[i] = temp
        i = -1
      }
    }
    return this._data
  }
  listCompleted(){
    let result = []
    for(let i=0; i<this._data.length; i++){
      if(this._data[i].done === '☑️ '){
        result.push(this._data[i])
      }
    }
    return result
  }
  listCompletedDesc(){
    this.sortDesc()
    let result = []
    for(let i=0; i<this._data.length; i++){
      if(this._data[i].done === '☑️ '){
        result.push(this._data[i])
      }
    }
    return result
  }
  listUncompleted(){
    let result = []
    for(let i=0; i<this._data.length; i++){
      if(this._data[i].done === '🔘 '){
        result.push(this._data[i])
      }
    }
    return result
  }
  listUncompletedDesc(){
    this.sortDesc()
    let result = []
    for(let i=0; i<this._data.length; i++){
      if(this._data[i].done === '🔘 '){
        result.push(this._data[i])
      }
    }
    return result
  }
  tag(task){
    let split = task.split(' ')
    let id = +split.splice(0, 1)
    for(let i=0; i<this._data.length; i++){
      if(i+1 === id){
        for(let j=0; j<split.length; j++){
          this._data[i].tag.push(split[j])
        }
      }
    }
    this.writeData()
    return `Tagged task "${this._data[id-1].task}" with tags: ${split}`
  }
  filter(task){
    let result = []
    for(let i=0; i<this._data.length; i++){
      for(let j=0; j<this._data[i].tag.length; j++){
        if(this._data[i].tag[j].indexOf(task[0]) === 0){
          result.push(this._data[i])
        }
      }
    }
    return result
  }
}

module.exports = Models
