"use strict"

const fs = require('fs')

class ModelTodo{
    constructor(){

    }

    static showList(){
        fs.readFile('./data.json',(err,data) =>{
            if(err) throw err
            let object = JSON.parse(data)
            for(let i=0; i<object.length; i++){
                console.log(object[i].id +'.' +object[i].task)
            }
        })
    }

    static addList(list){

    }
}


// ModelTodo.showList()

module.exports = ModelTodo