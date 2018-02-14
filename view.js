class View {
    static viewHelp() {
        console.log('node todo.js')
        console.log('node todo.js help')
        console.log('node todo.js list')
        console.log('node todo.js add <task_content>')
        console.log('node todo.js findById <task_id>')
        console.log('node todo.js delete <task_id>')
        console.log('node todo.js complete <task_id>')
        console.log('node todo.js uncomplete <task_id>')
    }

    static viewList(data) {
        let dataList = new Array()
        console.log('LIST')
        for (let i = 0; i < data.length; i++) {
            if (data[i].status === true) {
                dataList.push(`${i + 1}. [x] ${data[i].task}`)
            } else {
                dataList.push(`${i + 1}. [ ] ${data[i].task}`)
            }
            
        }
        console.log(dataList.join('\n'))
    }

    static addData(data) {
        console.log(data)
        console.log(`Added ${data} to your TODO list...`);
    }

    static findId(data) {
        console.log(`${data.id}. ${data.task}`)
    }
    
    static deleteId(data) {
        console.log(`Deleted ${data} from your TODO list...`);
    }

    static createdList(data, sort) { 
        let dataList = new Array()
        if(sort === 'asc') {
            data.sort((a, b) => { return a.id - b.id })
            console.log('LIST')
            for (let i = 0; i < data.length; i++) {
                if (data[i].status === true) {
                    dataList.push(`${i + 1}. [x] ${data[i].task}`)
                } else {
                    dataList.push(`${i + 1}. [ ] ${data[i].task}`)
                }
            }
            console.log(dataList.join('\n'))
        } else {
            data.sort((a, b) => { return b.id - a.id })
            console.log('LIST')
            for (let i = 0; i<data.length; i++) {
                if (data[i].status === true) {
                    dataList.push(`${data[i].id}. [x] ${data[i].task}`)
                } else {
                    dataList.push(`${data[i].id}. [ ] ${data[i].task}`)
                }
            }
            console.log(dataList.join('\n'))
        }       
    }

    static sortListStatus(data) {
        let dataList = new Array()
        for (let i = 0; i < data.length; i++) {
            if (data[i].status === true) {
                dataList.push(`${data[i].id}. [x] ${data[i].task}`)
            } else {
                dataList.push(`${data[i].id}. [ ] ${data[i].task}`)
            }
        }
        console.log(dataList.join('\n'))
    }

    static addTag(data) {
        console.log(`Tagged task "${data.task}" with tags: ${data.hobby[0]} ${data.hobby[1]}`)
    }

    static filterTag(data) {
        console.log(data)
    }
}

module.exports = View