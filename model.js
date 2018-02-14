const fs = require('fs')

class Model{
    constructor(){}

    static readFile(){
        let data = fs.readFileSync('data.json','UTF-8')
        let parseData = JSON.parse(data)
        return parseData
    }

    static writeFile(data){
     let stringify = JSON.stringify(data)
     fs.writeFileSync('data.json', stringify,'UTF-8')
    }

    static listFunction(){
        return  Model.readFile()
    }

    static addFunction(data){
        let previousData = Model.readFile()
        let dataJoin = data.join(" ")
        
        let newData = {
            "id": previousData.length + 1,
            "task" : dataJoin,
            "status" :false,
            "created": new Date()
        }

        previousData.push(newData)
        Model.writeFile(previousData)
        return newData
    }

    static findByIdFunction(id){
        let listTask = Model.readFile()
        const filter = listTask.filter(each=>{
            return each.id === id
        })
        return filter
    }

    static deleteFunction(id){
        let data = Model.readFile()
        const deleteData = data.filter(each=>{
            return each.id === id
        })
        const restData = data.filter(each=>{
            return each.id !== id
        })
        Model.writeFile(restData)
        return deleteData[0]
    }
    
    static completeFunction(id){
        let previousData = Model.readFile()
        const update = previousData.map(each=>{
            if(each.id === id){
                each.status = true
            }
            return each
        })
        Model.writeFile(update)
        
        return update
    }

    static unCompleteFunction(id){
        let previousData = Model.readFile()
        const update = previousData.map(each=>{
            if(each.id === id){
                each.status = false
            }
            return each
        })
        Model.writeFile(update)
        return update
    }

    static createdSort(command){
        let data = Model.readFile()
        const dateArray = data.map(each=>{
            return each.created
        })
        if(command === 'desc'){
            dateArray.sort(function (a,b){return b > a})
        }else {
            dateArray.sort(function(a,b){return a - b})
        }
        
        let newData = []
        for(let i = 0; i < dateArray.length; i++){
            for(let j = 0; j< data.length;j++){
                if(dateArray[i] === data[j].created){
                    newData.push(data[j])
                }
            }
        }
        return newData
    }

    static completeSort(command){
        let data = Model.readFile()
        
        const checkFinished = data.filter(each=>{
            if(each.status === true){
                return each
            }
        })

        if(checkFinished.length === 0){
            return 'Undefined'
        }else{
            const dateArray = checkFinished.map(each=>{
                return each.created
            })
    
            if(command === 'desc'){
                dateArray.sort(function (a,b){return b > a})
            }else {
                dateArray.sort(function(a,b){return a - b})
            }   

            let newData = []
            for(let i = 0; i < dateArray.length; i++){
                for(let j = 0; j< checkFinished.length;j++){
                    if(dateArray[i] === checkFinished[j].created){
                        newData.push(data[j])
                    }
                }
            }
            return newData
        }
    }

    static addTag(id,tags){
        let data = Model.readFile()
        let tagString = tags.join(" ")
        let task;
        const setTag = data.map(each =>{
            if(each.id === id){
                for(let [index,value] of tags.entries()){
                    task = value
                    each.tags.push(value)
                }
            }
            return each
        })
        
        Model.writeFile(setTag)
        let pack = []
        pack.push(task)
        pack.push(tagString)   
        
        return pack
    }

    static filterFunction(tag){
        let data = Model.readFile()

        const filterData = data.filter(each=>{
            const filterTag = each.tags.filter(tagInside=>{
                if(tagInside === tag){
                    return tagInside
                }
            })
            if(filterTag.length !== 0){
                return each
            }
        })
        return filterData
    }
}
module.exports = Model