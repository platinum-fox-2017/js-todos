const fs = require('fs')

function showList(){
    fs.readFile('./data.json',(err,data) =>{
        if(err) throw err
        let object = JSON.parse(data)
        for(let i=0; i<object.length; i++){
            console.log(object[i].id +'. '+object[i].status +' ' +object[i].task)
        }
    })
}

function addList(){
    fs.readFile('./data.json',(err,data) =>{
        if(err) throw err
        let parseData = JSON.parse(data)
        // console.log(parseData)

        var lastId = Number(parseData[parseData.length-1].id)+1

        var newObj = {
            id:lastId.toString(),
            task: 'test'
        }
        parseData.push(newObj)
        console.log(parseData)
        
        // fs.writeFile('./data.json',JSON.stringify(parseData),function(err){
        //     if(err) throw err;
        // })
    })
}

function searchId(id){
    fs.readFile('./data.json',(err,data) =>{
        if(err) throw err
        let dataList = JSON.parse(data)
        for(let i=0; i<dataList.length; i++){
            if(dataList[i].id === id){
                var result = dataList[i].task
            }          
        }
        console.log('Task Lisk ID ' +id +' is : '+ result)
    })
}

function deleteId(id){
    fs.readFile('./data.json',(err,data) =>{
        if(err) throw err
        let dataList = JSON.parse(data)
        let arrList = []
        for(let i=0; i<dataList.length; i++){
            if(dataList[i].id != id){
                arrList.push(dataList[i])
            }          
        }
        // console.log(arrList)
        // fs.writeFile('./data.json',JSON.stringify(arrList),function(err){
        //     if(err) throw err;
        // })
    })
}

function completeId(id){
    fs.readFile('./data.json',(err,data) =>{
        if(err) throw err
        let dataList = JSON.parse(data)
        let arrList = []
        for(let i=0; i<dataList.length; i++){
            if(dataList[i].id == id){
                dataList[i].status = '[X]'
            }
                      
        }
        console.log(dataList)
        fs.writeFile('./data.json',JSON.stringify(dataList),function(err){
            if(err) throw err;
        })
    })
}

// addList()
// deleteId(2)
// completeId(2)
showList()