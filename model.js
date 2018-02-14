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
    static find_by_id(id, cb){
        let counter =0;
        let err = '==================== NOT FOUND  =========================';
        for(let i = 0; i < Model.to_do_list().length; i++) {
            if(i == id) {
                cb(Model.to_do_list()[i-1].task);
            } else {
                counter++;
            }
        }
        if (counter === Model.to_do_list().length) cb(err);
    }
    static delete_to_do(delete_task){
        let deleted_data =data.splice(delete_task,1);
        fs.writeFileSync('./data.json',JSON.stringify(Model.to_do_list()));
        return deleted_data;
    }
    static complete(check){
        let data_x = data;
        for(let i=0; i<data_x.length; i++){
            if(parseInt(check) === i){
                data_x[i].status = "[x]";
            }
        }
        fs.writeFileSync('./data.json',JSON.stringify(data_x));
        return data_x;
    }
    static uncomplete(uncheck){
        let data_x = data;
        for(let i=0; i<data_x.length; i++){
            if(parseInt(uncheck) === i){
                data_x[i].status = "[ ]";
            }
        }
        fs.writeFileSync('./data.json',JSON.stringify(data_x));
        return data_x;
    }
}

module.exports = Model;