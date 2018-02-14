const fs = require('fs')
let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))

class Model {
    static readList() {
        return data
    }
    static addContent(content, callback) {
        let obj = {
            task: content,
            status: false,
            created_date : new Date(),
            completed_date : false,
            tag : []
        }
        data.push(obj)
        callback(content)
        fs.writeFileSync('data.json', JSON.stringify(data))
    }

    static findById(id) {
        let str =''
        for(let i=0; i<data.length; i++){
            if(Number(id)-1 === i){
                str += i+1
                str +='.'
                str +=data[i].task
            }
        }
        return str
    }

    static deleteById(task_id){
        let id = Number(task_id);
        let deletedData = ''
        for(let i=0; i<data.length; i++){
            if(i === id-1){
                deletedData+=data[i].task
                data.splice(i,1)
            }
        }
        fs.writeFileSync('data.json', JSON.stringify(data))
        return deletedData
    }

    static completeById(id){
        for (let i = 0; i<data.length; i++){
            if(Number(id)-1 === i){
                data[i].status = true
                data[i].completed_date = new Date()
            }
        }
        fs.writeFileSync('data.json', JSON.stringify(data))
        return data
    }

    static uncompleteById(id){
        for (let i = 0; i<data.length; i++){
            if(Number(id)-1 === i){
                data[i].status = false
                data[i].completed_date = false
            }
        }
        fs.writeFileSync('data.json', JSON.stringify(data))
        return data
    }

    static outstanding(sort){
            if(sort === 'asc'){
                data.sort(function(a, b){
                    let dateA=new Date(a.created_date), dateB=new Date(b.created_date)
                    return dateA-dateB 
                }) 
            }else{
                data.sort(function(a, b){
                    let dateA=new Date(a.created_date), dateB=new Date(b.created_date)
                    return dateB-dateA 
                }) 
            }
        return data   
    }

    static sortByCreated(){
        data.sort(function(a, b){
            let dateA=new Date(a.created_date), dateB=new Date(b.created_date)
            return dateA-dateB 
        })
        return data   
    }

    static complete(){
        let arr = []
        for (let i = 0; i<data.length; i++){ 
            data.sort(function(a, b){
                let dateA=new Date(a.completed_date), dateB=new Date(b.completed_date)
                return dateA-dateB 
            })
            if(data[i].status === true){
                arr.push(data[i].task)
            }
        }
        return arr    
    }

    static tag(id, tagged){
        let tag = tagged.split(' ')
        for (let i = 0; i<data.length; i++){ 
            for(let j = 0; j<tag.length; j++){
                if(data[Number(id)-1].tag.indexOf(tag[j])=== -1){
                    data[Number(id)-1].tag.push(tag[j])                        
                }
            }
        }
        fs.writeFileSync('data.json', JSON.stringify(data))
        return data
    }

    static filterTag(tag){
        let arrdata = []          
        for(let i =0; i<data.length; i++){                                 
            for(let j =0; j<data[i].tag.length; j++){              
                if(data[i].tag[j]===tag){
                    arrdata.push(data[i])
                }
            }
        }
        return arrdata           
    }
}
module.exports = Model
