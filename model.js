"use strict"

const fs = require('fs')

class ModelTodo{
    constructor(){

    }

    static addList(task){
        fs.readFile('./data.json',(err,data) =>{
            if(err) throw err
            var parseData = JSON.parse(data)
            var lastId = Number(parseData[parseData.length-1].id)+1
            var newObj = {
                id:lastId,
                status: "[.]",
                task: task
            }
            parseData.push(newObj)
            fs.writeFile('./data.json',JSON.stringify(parseData),function(err){
                if(err) throw err;
            })
            console.log('Your Task has been saved')
        })
    }

    static searchId(id){
        fs.readFile('./data.json',(err,data) =>{
            if(err) throw err
            let dataList = JSON.parse(data)
            for(let i=0; i<dataList.length; i++){
                if(dataList[i].id == id){
                    var result = dataList[i].task
                    break
                }          
            }
            console.log('Task Lisk ID ' +id +' is : '+ result)
        })
    }

    static deleteId(id){
        fs.readFile('./data.json',(err,data) =>{
            if(err) throw err
            let dataList = JSON.parse(data)
            let arrList = []
            for(let i=0; i<dataList.length; i++){
                if(dataList[i].id != id){
                    arrList.push(dataList[i])
                }          
            }
            console.log('Task list ID ' +id +' has been deleted')
            fs.writeFile('./data.json',JSON.stringify(arrList),function(err){
                if(err) throw err;
            })
        })
    }

    static completeId(id){
        fs.readFile('./data.json',(err,data) =>{
            if(err) throw err
            let dataList = JSON.parse(data)
            let arrList = []
            for(let i=0; i<dataList.length; i++){
                if(dataList[i].id == id){
                    dataList[i].status = '[X]'
                }
            }
            fs.writeFile('./data.json',JSON.stringify(dataList),function(err){
                if(err) throw err;
            })
            console.log('task list '+id +' has complete')
        })
        
    }

    static uncompleteId(id){
        fs.readFile('./data.json',(err,data) =>{
            if(err) throw err
            let dataList = JSON.parse(data)
            let arrList = []
            for(let i=0; i<dataList.length; i++){
                if(dataList[i].id == id){
                    dataList[i].status = '[.]'
                }
            }
            fs.writeFile('./data.json',JSON.stringify(dataList),function(err){
                if(err) throw err;
            })
            console.log('task list '+id +' uncomplete')
        })
        
    }

}



// ModelTodo.showList()

module.exports = ModelTodo