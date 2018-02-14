class View{
    constructor(){}
    static helpFunctionView(){
        console.log(`node todo.js`)
        console.log(`node todo.js help`)
        console.log(`node todo.js list`)
        console.log(`node todo.js add <task_content>`)
        console.log(`node todo.js findById <task_id`)
        console.log(`node todo.js delete <task_id>`)
        console.log(`node todo.js complete <task_id>`)
        console.log(`node todo.js uncomplete < task_id>`)
    }

    static listView(data){
        const view = data.map(each=>{
            if(each.status === true){
                console.log(`${each.id}. [X] ${each.task}`)
            }else{
                console.log(`${each.id}. [ ] ${each.task}`)
            }  
        })
    }

    static deleteView(data){
        console.log(`Deleted ${data.task} from your TODO list...`)
    }

    static addView(data){
        console.log(`Added ${data.task} to your TODO list...`)
    }
}

module.exports = View