class TodoView{

    static help(commands){
        let commandList = []
        for (let i=0; i<commands.length; i++){
            commandList.push(`node todo.js ${commands[i]}`)
        }
        console.log(commandList.join('\n'));
    }

    static list(file){
        console.log(file.join('\n'));
    }

    static add(task){
        console.log(`Added "${task}" to your TODO list`);
    }

    static findById(id, task){
        console.log(`${id}. ${task}`);
    }
    
    static delete(task){
        console.log(`Deleted "${task}" from your TODO list`);
    }

    static addTags(task, tags){
        console.log(`Tagged task "${task}" with tags: ${tags.join(' ')}`);
    }

    static filtered(tasks){
        console.log(tasks.join('\n'));;
    }
}

module.exports = TodoView;