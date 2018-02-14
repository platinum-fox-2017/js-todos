const fs = require('fs');

class Model{
  static readData(){
    let dataStr = fs.readFileSync('data.json','utf-8')
    let dataJson = JSON.parse(dataStr)
    return dataJson
  }
  static writeData(data){
    let dataJson = Model.readData()
    let obj = {task: data,status: "[ ]", createdat: new Date(), tags: []}
    dataJson.push(obj)
    let dataStr = JSON.stringify(dataJson)
    fs.writeFileSync('data.json',dataStr)
    return dataJson
  }
  static findId(num){
    let dataJson = Model.readData()
    for(let i = 0 ; i < dataJson.length ; i++){
      if(num == i+1){
        return `${i+1}. ${dataJson[i].task}`
      }
    }
  }
  static deleteId(num){
    let dataJson = Model.readData()
    let del = ''
    for(let i = 0 ; i < dataJson.length ; i++){
      if(num == i+1){
        del += dataJson[i].task
        dataJson.splice(i,1)
      }
    }
    let dataStr = JSON.stringify(dataJson)
    fs.writeFileSync('data.json',dataStr)
    return del
  }

  static complete(num){
    let dataJson = Model.readData()
    for(let i = 0 ; i < dataJson.length ; i++){
      if(num == i+1){
        dataJson[i].status = "[x]"
      }
    }
    let dataStr = JSON.stringify(dataJson)
    fs.writeFileSync('data.json',dataStr)
    return dataJson
  }

  static uncomplete(num){
    let dataJson = Model.readData()
    for(let i = 0 ; i < dataJson.length ; i++){
      if(num == i+1){
        dataJson[i].status = "[ ]"
      }
    }
    let dataStr = JSON.stringify(dataJson)
    fs.writeFileSync('data.json',dataStr)
    return dataJson
  }

  static listCreated(sorting){
    let dataJson = Model.readData()
    let dateArray = []
    for(let i = 0 ; i < dataJson.length ;i++){
      dateArray.push(dataJson[i].createdat)
    }
    if(sorting === "desc"){
      dateArray.sort(function(a,b){return b > a})
    }else{
      dateArray.sort(function(a,b){return a > b})
    }
    let newData = []
    for(let i = 0 ; i < dateArray.length ; i++){
      for(let j = 0 ; j < dataJson.length ; j++){
        if(dataJson[j].createdat === dateArray[i]){
          newData.push(dataJson[j])
        }
      }
    }
    return newData
  }

  static listCompleted(sorting){
    let dataJson = Model.readData()
    let dateArray = []
    for(let i = 0 ; i < dataJson.length ;i++){
      dateArray.push(dataJson[i].createdat)
    }
    if(sorting === "desc" ){
      dateArray.sort(function(a,b){return b > a})
    }else{
      dateArray.sort(function(a,b){return a > b})
    }
    let newData = []
    for(let i = 0 ; i < dateArray.length ; i++){
      for(let j = 0 ; j < dataJson.length ; j++){
        if(dataJson[j].createdat === dateArray[i] && dataJson[j].status === "[x]"){
          newData.push(dataJson[j])
        }
      }
    }
    return newData
  }
  static tagData(num,tag){
    let dataJson = Model.readData()
    for(let i = 0 ; i < dataJson.length ; i++){
      for(let j = 0 ; j < tag.length ; j++){
        if(num == i+1){
          dataJson[i].tags.push(tag[j])
        }
      }
    }
    let dataStr = JSON.stringify(dataJson)
    fs.writeFileSync('data.json',dataStr)
    return dataJson
  }

  static filterTag(tag){
    let dataJson = Model.readData()
    let index = 0
    for(let i = 0 ; i < dataJson.length ; i++){
      for(let j = 0 ; j < dataJson[i].tags.length ; j++){
        if(dataJson[i].tags[j] == tag){
          index += i
          return [dataJson[i],index]
        }
      }
    }
  }

}


module.exports = Model
