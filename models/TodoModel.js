const fs = require('fs');

class TodoModel {
  constructor() {
  }
  static getTodoList(){
    var list = fs.readFileSync('data.json','utf8');
    list = JSON.parse(list);
    //return object of list
    return list;
  }
  static addTodoList(name){
    if (name != '') {
      var list = fs.readFileSync('data.json','utf8');
      list = JSON.parse(list);
      var lastIid = Number(list[list.length - 1].id) + 1;
      var todo = {id: lastIid,name: name};
      list.push(todo);
      list = JSON.stringify(list);
      fs.writeFileSync('data.json',list);
      return true;
    } else {
      return false;
    }
  }
  static findById(id){
    var list = fs.readFileSync('data.json','utf8');
    list = JSON.parse(list);
    for(var i = 0; i < list.length; i++){
      if(list[i].id == id){
        return list[i].name;
      }
    }
    return '';
  }
  static delete(id){
    if (id != '') {
      var list = fs.readFileSync('data.json','utf8');
      list = JSON.parse(list);
      var listBaru = [];
      for(var i = 0; i < list.length; i++){
        if(list[i].id != id){
          listBaru.push(list[i]);
        }
      }
      listBaru = JSON.stringify(listBaru);
      fs.writeFileSync('data.json',listBaru);
      return true;
    } else {
      return false;
    }
  }
  static complete(id){
    if (id != '') {
      var list = fs.readFileSync('data.json','utf8');
      list = JSON.parse(list);
      for(var i = 0; i < list.length; i++){
        if(list[i].id == id){
          list[i].status = 1;
        }
      }
      list = JSON.stringify(list);
      fs.writeFileSync('data.json',list);
      return true;
    } else {
      return false;
    }
  }
  static uncomplete(id){
    if (id != '') {
      var list = fs.readFileSync('data.json','utf8');
      list = JSON.parse(list);
      for(var i = 0; i < list.length; i++){
        if(list[i].id == id){
          list[i].status = 0;
        }
      }
      list = JSON.stringify(list);
      fs.writeFileSync('data.json',list);
      return true;
    } else {
      return false;
    }
  }
}
module.exports = TodoModel;
