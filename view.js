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
}

module.exports = View