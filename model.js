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
            "status" :false
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

}
module.exports = Model