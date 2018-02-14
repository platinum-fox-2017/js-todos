const fs = require('fs')
const data = JSON.parse(fs.readFileSync('data.json', 'UTF-8'));
const testdt = fs.readFileSync('data.json', 'UTF-8')

class Model {
    
    static viewList() {
        return data
    }

    static addData(newData) {
        let dataArr = data
        let objAddData = {
            id: data.length+1,
            task: newData
        }
        dataArr.push(objAddData)
        fs.writeFileSync('data.json', JSON.stringify(dataArr))
    }

    static findId(newData, callback) {
        for (let i = 0; i < data.length; i++) {
            if(data[i].id === Number(newData)) {
                callback(data[i])
            }
        }
    }

    static deleteId(newData, callback) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === Number(newData)) {
                data.splice((data[i].id-1), 1)
                fs.writeFileSync('data.json', JSON.stringify(data))
                callback(newData)
            }
        }
    }

    static completeId(newData) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === Number(newData)) {
                data[i].status = true
                fs.writeFileSync('data.json', JSON.stringify(data))
            }
        }
    }
    
    static uncompleteId(newData) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === Number(newData)) {
                data[i].status = false
                fs.writeFileSync('data.json', JSON.stringify(data))
            }
        }
    }

}

module.exports = Model