const fs = require('fs')

class Model {
    static readList() {
        let data = fs.readFileSync('data.json', 'utf8')
        return JSON.parse(data)
    }
    static addContent(content) {
        let data = this.readList()
        let obj = {
            task: content,
            status: false,
            created_date : new Date()
        }
        data.push(obj)
        fs.writeFileSync('data.json', JSON.stringify(data))
        return content
    }
    static findById(id) {
        let data = this.readList()
        let str =''
        for(let i=0; i<data.length; i++){
            if(Number(id)-1 === i){
                str += i+1
                str +='.'
                str +=data[i].task
            }else{
                str = 'id tidak ditemukan'
            }
        }
        return str
    }
    static deleteById(id){
        let data = this.readList()
        for (let i = 0; i<data.length; i++){
            if(Number(id)-1 === i){
                data.splice(i+1, 1)
            }
        }
        fs.writeFileSync('data.json', JSON.stringify(data))
        for (let i = 0; i<data.length; i++){
            if(Number(id)-1 === i){
                return data[i].task
            }else{
                return ''
            }
        }
    }
    static completeById(id){
        let data = this.readList()
        for (let i = 0; i<data.length; i++){
            if(Number(id)-1 === i){
                data[i].status = true
            }
        }
        return data
    }

    static uncompleteById(id){
        let data = this.readList()
        for (let i = 0; i<data.length; i++){
            if(Number(id)-1 === i){
                data[i].status = false
            }
        }
        return data
    }
}
module.exports = Model