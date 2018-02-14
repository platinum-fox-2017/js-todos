const fs = require('fs')
const Table = require('terminal-table')
const Chalk = require('chalk')



class Model{
  constructor(file){

  }

  static read(){
    let readStr = fs.readFileSync('data.json','UTF-8')
    let read = JSON.parse(readStr)
    return read
  }

  static addList(task_by_user){
    let read = Model.read()
    let objTask =
    {
      task:task_by_user,
      id:read.length+1,
      status:'[ ]',
      tag : [] ,
      created: new Date()
    }
    read.push(objTask)
    let data_string = JSON.stringify(read)
    fs.writeFileSync('./data.json',data_string)
  }

  static findByID(task_by_user){
    let temp = []
    let read = Model.read()
    for(let i = 0;i<read.length;i++){
      if(i+1 == task_by_user){
        read[i].id = i+1
        temp.push(read[i])
      }
    }
    if(temp === ""){
      return 'error : data tugas tidak ditemukan'
    }
    return temp
  }

  static delete(task_by_user){
    let temp = ""
    let read = Model.read()
    for(let i = 0;i<read.length;i++){
      if(i == task_by_user-1){
        temp+=read[i].task
        read.splice(i,1)
        fs.writeFileSync('./data.json',JSON.stringify(read))
      }
    }
    if(temp === ""){
      return 'error : data tugas tidak ditemukan'
    }
    return temp
  }

  static complete(task_by_user){
    let read = Model.read()
    for(let i = 0;i<read.length;i++){
      if(i == task_by_user-1){
        read[i].status = '[x]'
      }
    }
    fs.writeFileSync('./data.json',JSON.stringify(read))
    return read
  }

  static uncomplete(task_by_user){
    let read = Model.read()
    for(let i = 0;i<read.length;i++){
      if(i == task_by_user-1){
        read[i].status = '[ ]'
      }
    }
    fs.writeFileSync('./data.json',JSON.stringify(read))
    return read
  }

  static sortAsc(){
    let read = Model.read()
    let temp = read[0]
    for (let i = 0; i < read.length-1; i++) {
      if(read[i].created > read[i+1].created){
        temp = read[i+1]
        read[i+1] = read[i]
        read[i] = temp
        i = -1
      }
    }
    fs.writeFileSync('./data.json',JSON.stringify(read))
    return read
  }

  static sortDesc(){
    let read = Model.read()
    let temp = read[0]
    for (let i = 0; i < read.length-1; i++) {
      if(read[i].created < read[i+1].created){
        temp = read[i+1]
        read[i+1] = read[i]
        read[i] = temp
        i = -1
      }
    }
    fs.writeFileSync('./data.json',JSON.stringify(read))
    return read
  }

  static showComplete(){
    let read = Model.read()
    let temp = []
    for (let i = 0; i < read.length; i++) {
      if(read[i].status == '[x]'){
        temp.push(read[i])
      }
    }
    return temp
  }

  static showUncomplete(){
    let read = Model.read()
    let temp = []
    for (let i = 0; i < read.length; i++) {
      if(read[i].status == '[ ]'){
        temp.push(read[i])
      }
    }
    return temp
  }

  static addTag(task_by_user){
    let temp = task_by_user.split(' ')
    let read = Model.read()
    for(let i = 0;i<read.length;i++){
      if(i+1 == temp[0]){
        read[i].tag.push(temp.splice(1).join(''))
      }
    }
    fs.writeFileSync('./data.json',JSON.stringify(read))
    return read
  }

  static removeTag(task_by_user,task_by_user2){
    // console.log('ini',task_by_user,task_by_user2);
    let read = Model.read()
    for(let i = 0;i<read.length;i++){
      if(i+1 == task_by_user){
        read[i].tag.splice(task_by_user2-1,1)
      }
    }
    fs.writeFileSync('./data.json',JSON.stringify(read))
    return read
  }

  static filter(task_by_user){
    let read = Model.read()
    let temp = []
    for(let i = 0;i<read.length;i++){
      for(let j = 0;j<read[i].tag.length;j++){
        if(read[i].tag[j] === task_by_user){
          read[i].id = i+1
          temp.push(read[i])
        }
      }
    }
    return temp
  }
}

module.exports = Model
