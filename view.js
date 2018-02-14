class View {
    constructor(){

    }
    static help (){
        let help = ['$ node todo.js list', 
                    '$ node todo.js list:created asc||desc',
                    '$ node todo.js list:completed asc||desc',
                    '$ node todo.js list:outstanding asc||desc',
                    '$ node todo.js add <task_content>', 
                    '$ node todo.js findById <task_id>', 
                    '$ node todo.js delete <task_id>', 
                    '$ node todo.js complete <task_id>', 
                    '$ node todo.js uncomplete <task_id>',
                    '$ node todo.js tag <tag_name1> <tag_name2> .. <tag_name3>',
                    '$ node todo.js filter <tag_name>'
                    ]
        for (let i = 0; i < help.length; i++){
            console.log(help[i])
        }
    }
    static list (todos){
        for (let i = 0; i < todos.length; i++){
            console.log(`${i+1}. [${todos[i].complete}] ${todos[i].task}`)
        }
    }
    static create (todos){
        for (let i = 0; i < todos.length; i++){
            console.log(`${i+1}.`, todos[i].task)
        }
    }
    static completedList (todos){
        let count = 0
        for (let i = 0; i < todos.length; i++){
            if (todos[i].complete === 'x'){
                count++
                console.log(`${count}. [${todos[i].complete}] ${todos[i].task} - completed at ${new Date(todos[i].time_completed).toLocaleTimeString()}, ${new Date(todos[i].time_completed).toDateString()}`)
            }
        }
    }
    static outstandingList (todos){
        let count = 0
        for (let i = 0; i < todos.length; i++){
            if (todos[i].complete !== 'x'){
                count++
                console.log(`${count}. [${todos[i].complete}] ${todos[i].task} - completed at ${new Date(todos[i].time_created).toLocaleTimeString()}, ${new Date(todos[i].time_created).toDateString()}`)
            }
        }
    }
    static add (input){
        console.log(`Added ${input} to your TODO list`)
    }
    static findId (input, todos){
        let search = input -1
        console.log(`${input}. ${todos[search].task}`)
    }
    static delete (todos, index){
        console.log(`Deleted ${todos[index].task} from your TODO list...`)
    }
    static filter (todos, word){
        for (let i = 0; i < todos.length; i++){
            for (let j = 0; j < todos[i].tag.length; j++){
                if (todos[i].tag[j] === word){
                    console.log(`${i+1}.`,todos[i].task, `[${todos[i].tag.join(', ')}]`)
                }
            }
        }
    }
    static tag (todos, index, word){
        console.log(`Tagged task ${todos[index].task} with tags: ${word}`)
    }
    static duplicateTag (tag){
        for(let k = 0; k < tag.length-1; k++){
            if (tag[k] === tag[k+1]){
                console.log('Duplicate tags found, ensure input does not have the same tags')
                return
            }
        }
    }
}

module.exports = View