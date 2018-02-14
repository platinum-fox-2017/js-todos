const fs = require('fs')
const data = JSON.parse(fs.readFileSync('data.json', 'UTF-8'));

class Model {
    
    static viewList() {
        return data
    }

    static addData(newData) {
        let dataArr = data
        let objAddData = {
            id: data.length+1,
            task: newData,
            status: false,
            date_created: new Date(),
            complete_date: 0,
            uncomplete_date: 0,
            tagAttr: new Array
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
                data[i].complete_date = new Date()
                data[i].uncomplete_date = 0
                fs.writeFileSync('data.json', JSON.stringify(data))
            }
        }
    }
    
    static uncompleteId(newData) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === Number(newData)) {
                data[i].status = false
                data[i].complete_date = 0
                data[i].uncomplete_date = new Date()
                fs.writeFileSync('data.json', JSON.stringify(data))
            }
        }
    }

    static addTag(newData, tag_1, tag_2, callback) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === Number(newData)) {
                data[i].tagAttr.push(tag_1, tag_2)
                let throwData = { task: data[i].task, hobby: [tag_1, tag_2] }
                callback(throwData)
                fs.writeFileSync('data.json', JSON.stringify(data))
            }
        }
    }

    static filterTag(task, callback) {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].tagAttr.length; j++) {
                if (data[i].tagAttr[j] === task) {
                    let throwData = `${data[i].id}. ${data[i].task} [${data[i].tagAttr}]`
                    callback(throwData)
                }
            }   
        }
    }

    static sortListStatus(sort, callback) {
        if (sort === 'desc') {
            data.sort(function (a, b) {
                var x = a.complete_date.toLowerCase();
                var y = b.complete_date.toLowerCase();
                return x > y ? -1 : x < y ? 1 : 0;
            });
            callback(data)
        } else {
            data.sort(function (a, b) {
                var x = a.complete_date.toLowerCase();
                var y = b.complete_date.toLowerCase();
                return x < y ? -1 : x > y ? 1 : 0;
            });
            callback(data)
        }
    }

    static getDeaultData() {
        return data
    }

}

module.exports = Model