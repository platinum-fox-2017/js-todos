// Model
// Read Input from user and input from userFile
const fs = require('fs');
// const dataFile = fs.readFileSync('./data.json', 'utf8');



class ToDoModel {
    constructor(data) {
        this._data = data;
        this._task = JSON.parse(this._data);
    }

    get task() {
        return this._task;
    }

    write(task){
        fs.writeFile('./data.json', JSON.stringify(task), (err) => {
            if(err) throw err;
            console.log('The file has been saved');
        });
    }

    tag(id, tags){
        for(let i = 0; i < tags.length; i++){
            this._task[id-1].tag.push(tags[i]);
        }
        this.write(this._task);
    }

    add(input) {
        this._task.push({
            "task": input,
            "done": false,
            "date": new Date().toString()
        });
        this.write(this._task);
    }

    delete(input) {
        this._task.splice(input-1,1);
        this.write(this._task);
    }

    complete(input){
        this.task[input-1].done = true;
        this.write(this._task);
    }

    uncomplete(input){
        this.task[input-1].done = false;
        this.write(this._task);
    }
}

module.exports = {Model: ToDoModel};
