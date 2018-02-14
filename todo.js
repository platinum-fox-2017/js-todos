"use strict"
var fs = require('fs');
const args = process.argv;

class ToDo{
  constructor(args){
    this.commandExe=this.command(args)
  }

  command(args){

    if(args[2]==='help'){
      this.help()
    }
    else if(args[2]==='list'){
      this.list()
    }
    else if(args[2]==='add'){
      this.add(args[3])
    }

    else if(args[2]==='findById'){
      this.findById(args[3])
    }
    else if(args[2]==='delete'){
      this.deleteList(args[3])
    }
    else if(args[2]==='complete'){
      this.complete(args[3])
    }
    else if(args[2]==='uncomplete'){
      this.uncomplete(args[3])
    }
    else if(args[2]==='list:completed'){
      this.listCompleted(args[3])
    }
    else if(args[2]==='tag'){
      this.tagName(args)
    }
  }

  help(){
    var arrHelp=['help',
                'list',
                'add <task_content>',
                'findById <task_id>',
                'delete <task_id>',
                'complete <task_id>',
                'uncomplete <task_id>']
    for(let i=0;i<arrHelp.length;i++){
      console.log('$ node todo.js '+arrHelp[i])
    }
  }

  bacaFile(callback) {
    fs.readFile('./data.json', (err, data) => {
      data=JSON.parse(data);
      callback(data)
    })
  }


  list(){
    this.bacaFile(function (terimaData) {
      let completeAt=''
      for(let i=1;i<=terimaData.length;i++){
        if(terimaData[i-1].completed!==undefined){
           completeAt=terimaData[i-1].completed
        }

        if(terimaData[i-1].done==="x"){
          console.log(i+'. ['+terimaData[i-1].done+'] '+terimaData[i-1].task+'\n Created At :'+terimaData[i-1].created+'\n Completed At :'+completeAt)
        }
        else{
          console.log(i+'. [ ] '+terimaData[i-1].task+'\n Created At :'+terimaData[i-1].created+'\n Completed At :'+completeAt)
        }
      }
      //console.log(terimaData)
    })
  }

  add(taskList){
    this.bacaFile(function (terimaData) {
        let currentTime = new Date()
        let stringTime=String(currentTime)
        let doneVal='0'
        for (let i=0; i <1 ; i++){
          terimaData.push({task:taskList,done:doneVal,created:stringTime})
        }
        fs.writeFile('./data.json',JSON.stringify(terimaData),function(err){
               if(err) throw err;
        })
      })
    }


    findById(taskId){
      this.bacaFile(function (terimaData) {
          for(let i=1;i<=terimaData.length;i++){
            if(i===Number(taskId)){
              console.log(terimaData[i-1].task)
            }
          }
      });
    }

    deleteList(taskId){
      this.bacaFile(function (terimaData) {
          let replace = [];
          for(let i=1;i<=terimaData.length;i++){
            if(i!==Number(taskId)){
              replace.push(terimaData[i-1])
            }
          }

          fs.writeFile('./data.json',JSON.stringify(replace),function(err){
            if(err) throw err;
          })
      });
    }

    complete(taskId){
      this.bacaFile(function (terimaData) {
        let currentTime = new Date();
        let stringTime=String(currentTime)
        for(let i=1;i<=terimaData.length;i++){
          if(i===Number(taskId)){
            terimaData[i-1].done="x"
            terimaData[i-1].completed=stringTime
          }
        }
          fs.writeFile('./data.json',JSON.stringify(terimaData),function(err){
            if(err) throw err;
          })
      })
    }

    uncomplete(taskId){
      this.bacaFile(function (terimaData) {
        for(let i=1;i<=terimaData.length;i++){
          if(i===Number(taskId)){
            terimaData[i-1].done="0"
          }
        }
          fs.writeFile('./data.json',JSON.stringify(terimaData),function(err){
            if(err) throw err;
          })
      })
    }

    listCompleted(urut){
      this.bacaFile(function (terimaData) {
        let replace = [];
        for(let i=1;i<=terimaData.length;i++){
          if(terimaData[i-1].done==='x'){
            replace.push(terimaData[i-1])
          }
        }
        var arrTgl = [{date:'Sun Feb 18 2018 16:10:56 GMT+0700 (WIB)'},{date:'Wed Mar 16 2017 16:10:56 GMT+0600 (WIB)'},{date:'Sat Feb 17 2018 16:10:56 GMT+0700 (WIB)'}];
        var currentTime = new Date();
        if(urut==='asc'){
          replace.sort(function(a,b){
            var c = new Date(a.completed);
            var d = new Date(b.completed);
            return c-d;
          });
        }
        else if(urut==='desc'){
          replace.sort(function(a,b){
            var c = new Date(a.completed);
            var d = new Date(b.completed);
            return d-c;
          });
        }
        console.log(replace)
      })
    }

}


let newToDo=new ToDo(args)
