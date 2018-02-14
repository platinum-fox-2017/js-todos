const fs = require('fs');
const view = require('./view.js');

class ToDoModel {
  static modelHelper(callback){
    fs.readFile('./data2.json', 'utf8', function(err, data){
      let toDoList = JSON.parse(data);
      callback(toDoList);
    });
  }

  static modelList(callback){
    fs.readFile('./data.json', 'utf8', function(err, data){
      let toDoList = JSON.parse(data);
      callback(toDoList);
    });
  }

  static modelAddList(){
    fs.readFile('./data.json', 'utf8', function(err, data){
      let toDoList = JSON.parse(data);
      toDoList.push({complete:'[ ]',list: argv[3]});
      let newFormat = JSON.stringify(toDoList);
      fs.writeFile('./data.json', newFormat, 'UTF-8', function(err){
        if (err) throw err;
        callback(argv[3]);
      });
    });
  }

  static modelFindId(callback){
    fs.readFile('./data.json', 'utf8', function(err, data){
      let toDoList = JSON.parse(data);
      callback(toDoList);
    });
  }

  static modelDataDelete(){
    fs.readFile('./data.json', 'utf8', function(err, data){
      let toDoList = JSON.parse(data);
      let array = [];
      for(let i=0; i<toDoList.length; i++){
        if((i+1).toString()===argv[3]){
          var fileDihapus = toDoList[i];
          array.push(toDoList[i]);
          array.pop();
        } else {
          array.push(toDoList[i]);
        }
      }
      let newFormat = JSON.stringify(array);
      fs.writeFile('./data.json', newFormat, 'UTF-8', function(err){
        if (err) throw err;
        callback(fileDihapus.list);
      });
    });
  }

  static modelFinished(callback){
    fs.readFile('./data.json', 'utf8', function(err, data){
      let toDoList = JSON.parse(data);
      for(let i=0; i<toDoList.length; i++){
        if((i+1).toString()===argv[3]){
          toDoList[i].complete = '[X]';
        }
      }
      callback(toDoList);
      let newFormat = JSON.stringify(toDoList);
      fs.writeFile('./data.json', newFormat, 'UTF-8', function(err){
        if (err) throw err;
      });
    });
  }

  static modelUnfinished(callback){
    fs.readFile('./data.json', 'utf8', function(err, data){
      let toDoList = JSON.parse(data);
      for(let i=0; i<toDoList.length; i++){
        if((i+1).toString()===argv[3]){
          toDoList[i].complete = '[ ]';
        }
      }
      callback(toDoList);
      let newFormat = JSON.stringify(toDoList);
      fs.writeFile('./data.json', newFormat, 'UTF-8', function(err){
        if (err) throw err;
      });
    });
  }
}

module.exports = ToDoModel;
