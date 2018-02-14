// Model
// Read Input from user and input from userFile
const fs = require('fs');
// const dataFile = fs.readFileSync('./data.json', 'utf8');

class ToDoModel {
    static read(callback,option){
        fs.readFile('./data.json', 'utf8',(err,data)=> {
            if(err)
                throw err;
            let dataParse = JSON.parse(data);
            callback(option,dataParse);
        });
    }

    static write(callback,callback2,option,option2){
        fs.readFile('./data.json', 'utf8',(err,data)=> {
            if(err)
                throw err;
            let dataParse = JSON.parse(data);
            callback(dataParse,option,option2);
            callback2(option,dataParse,option2);
        });
    }

    static writeToFile(task){
        fs.writeFile('./data.json', JSON.stringify(task), (err) => {
            if(err) throw err;
            console.log('The file has been saved');
        });
    }

    static tag(data, id, tags){
        for(let i = 0; i < tags.length; i++){
            if(data[id-1].tag.indexOf(tags[i])==-1)
                data[id-1].tag.push(tags[i]);
        }
        ToDoModel.writeToFile(data);
    }

    static add(dataParse,task) {
        dataParse.push({
            "task": task,
            "done": false,
            "date": new Date().toString(),
            "tag": []
        });
        ToDoModel.writeToFile(dataParse);
    }

    static length_count(option,arr){
        return arr.length;
    }

    static delete(option, data) {
        data.splice(option-1,1);
        ToDoModel.writeToFile(data);
    }

    static complete(data, option){
        data[option-1].done = true;
        ToDoModel.writeToFile(data);
    }

    static uncomplete(data,option){
        data[option-1].done = false;
        ToDoModel.writeToFile(data);
    }
}

module.exports = {Model: ToDoModel};
