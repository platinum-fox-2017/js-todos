const fs = require('fs');

class TodoModel {
  static getTodoList(callback){
     fs.readFile('data.json',(err,list) => {
        list = JSON.parse(list);
        callback(list);
      });
  }
  static getCompletedTodoList(sort,callback){
    fs.readFile('data.json',(err,list)=> {
      list = JSON.parse(list);
      var completedTodo = [];
      if(sort === 'asc'){
        for (var i = 0;  i < list.length; i++) {
          if(list[i].status === 1){
            completedTodo.push(list[i]);
          }
        }
      } else {
        for (var i = list.length - 1;  i > 0; i--) {
          if(list[i].status === 1){
            completedTodo.push(list[i]);
          }
        }
      }
      callback(completedTodo);
    });
  }
  static getTodoListOrderByCreateDate(sort,callback){
    fs.readFile('data.json',(err,data) => {
        var list = data;
        list = JSON.parse(list);
        var todoOrderByCreateDate = [];
        if(sort === 'asc'){
          for (var i = 0;  i < list.length; i++) {
              todoOrderByCreateDate.push(list[i]);
          }
        } else {
          for (var i = list.length - 1;  i > 0; i--) {
              todoOrderByCreateDate.push(list[i]);
          }
        }
        callback(getTodoListOrderByCreateDate)
      });
    }
    static addTodoList(name){
    if (name != '') {
      fs.readFile('data.json',(err,list)=>{
        list = JSON.parse(list);
        var lastIid = Number(list[list.length - 1].id) + 1;
        var currentDate = TodoModel.currentDate();
        var todo = {id: lastIid,name: name,status: 0,create_date: currentDate,tag: []};
        list.push(todo);
        list = JSON.stringify(list);
        fs.writeFile('data.json',list,(err)=>{});
      });
      return true;
    } else {
      return false;
    }
  }
  static addTag(id,tag){
    
  }

  static currentDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    }

    if(mm<10) {
        mm = '0'+mm
    }

    today = dd + '-' + mm + '-' + yyyy;
    return today;
  }

  static findById(id,callback){
    fs.readFile('data.json',(err,list) => {
      list = JSON.parse(list);
      for(var i = 0; i < list.length; i++){
        if(list[i].id == id){
          callback(id,list[i].name);
          break;
        }
      }
    });
  }

  static delete(id,callback){
    if (id != '') {
      fs.readFile('data.json',(err,list) => {
        list = JSON.parse(list);
        var listBaru = [];
        for(var i = 0; i < list.length; i++){
          if(list[i].id != id){
            listBaru.push(list[i]);
          } else {
            var nama = list[i].name;
          }
        }
        listBaru = JSON.stringify(listBaru);
        fs.writeFile('data.json',listBaru,(err)=>{});
        callback(nama);
      });
      return true;
    } else {
      return false;
    }
  }
  static complete(id){
    if (id != '') {
      fs.readFile('data.json',(err,list)=>{
        list = JSON.parse(list);
        for(var i = 0; i < list.length; i++){
          if(list[i].id == id){
            list[i].status = 1;
          }
        }
        list = JSON.stringify(list);
        fs.writeFile('data.json',list,(err)=>{});
      });
      return true;
    } else {
      return false;
    }
  }
  static uncomplete(id){
    if (id != '') {
      fs.readFile('data.json',(err,list)=>{
        list = JSON.parse(list);
        for(var i = 0; i < list.length; i++){
          if(list[i].id == id){
            list[i].status = 0;
          }
        }
        list = JSON.stringify(list);
        fs.writeFile('data.json',list,(err)=>{});
      });
      return true;
    } else {
      return false;
    }
  }
}
module.exports = TodoModel;
