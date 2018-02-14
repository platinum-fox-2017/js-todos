const fs = require('fs')

function checkList(){
    fs.readFile('./data.json',(err,data) =>{
        if(err) throw err
        let object = JSON.parse(data)
        for(let i=0; i<object.length; i++){
            console.log(i+1 +'.' +object[i].task)
        }
    })
}

checkList()