const data = require('./data.json');

const fs = require('fs');

class Model{
    static to_do_list(){
        return data;
    }
    static add_to_do(new_task){
        let new_object = {
            task: new_task
        };
        Model.to_do_list().push(new_object);
        fs.writeFileSync('./data.json',JSON.stringify(Model.to_do_list()));
        return new_task;
    }
}

// console.log(Model.add_to_do());

module.exports = Model;