const data = require('./data.json');

const fs = require('fs');

class Model{
    static to_do_list(){
        return data;
    }
    static add_to_do(new_task){
        let new_object = {
            task: new_task,
            status:"[ ]",
            created_at: Date.now(),
            completed_date:"Uncomplete",
            tag:""
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
                cb(Model.to_do_list()[i].task);
            } else {
                counter++;
            }
        }
        if (counter === Model.to_do_list().length) cb(err);
    }
    static delete_to_do(delete_task){
        let deleted_data =data.splice(delete_task,1);
        fs.writeFileSync('./data.json',JSON.stringify(Model.to_do_list()));
        return (deleted_data)[0].task;
    }
    static complete(check){
        let data_x = data;
        for(let i=0; i<data_x.length; i++){
            if(parseInt(check) === i){
                data_x[i].status = "[X]";
                data_x[i].completed_date = new Date();
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
                data_x[i].created_at = new Date();
                data_x[i].completed_date = "";
            }
        }
        fs.writeFileSync('./data.json',JSON.stringify(data_x));
        return data_x;
    }
    static outstanding(ascdesc){
        let data_x = data;
        let date_array =[];
        for(let i=0; i<data_x.length; i++){
            date_array.push(data_x[i].created_at);
        }
        if(ascdesc === 'desc'){
            date_array.sort((a,b)=>{return b>a});
        } else {
            date_array.sort((a,b)=>{return a>b});
        }
        let new_data =[];
        for(let i=0; i<date_array.length; i++){
            for(let j=0; j<data_x.length; j++){
                if(date_array[i] === data_x[j].created_at && data_x[j].status === "[ ]"){
                    new_data.push(data_x[j]);
                }
            }
        }
        return new_data;
    }
    static completed(ascdesc){
        let data_x = data;
        let date_array =[];
        for(let i=0; i<data_x.length; i++){
            date_array.push(data_x[i].created_at);
        }
        if(ascdesc === 'desc'){
            date_array.sort((a,b)=>{return b>a});
        } else {
            date_array.sort((a,b)=>{return a>b});
        }
        let new_data =[];
        for(let i=0; i<date_array.length; i++){
            for(let j=0; j<data_x.length; j++){
                if(date_array[i] === data_x[j].created_at && data_x[j].status === "[X]"){
                    new_data.push(data_x[j]);
                }
            }
        }
        return new_data;
    }
    static tag(index,tags_to_be_added){
        let new_array =[];
        let temporary_string ='';
        for(let i=0; i<tags_to_be_added.length+1; i++){
            if(tags_to_be_added[i] === ' '||tags_to_be_added[i] === undefined){
                new_array.push(temporary_string);
                temporary_string ='';
            } else {
                temporary_string += tags_to_be_added[i];
            }
        }
        let show_array =[]
        let final_array =[];
        let data_x = data;
        for(let i=0; i<data_x.length; i++){
            if(i === parseInt(index)){
                data_x[i].tag = new_array;
                show_array.push(data_x[i]);
            }
            final_array.push(data_x[i]);
        }
        fs.writeFileSync('./data.json',JSON.stringify(final_array));
        return show_array;
    }
    static filter(tag){
        let show_array = [];
        let data_x = data;
        for(let i=0; i<data_x.length; i++){
            // console.log(data_x[i].tag);
            for(let j=0; j<data_x[i].tag.length; j++){
                // console.log(data_x[i].tag[j]);
                if(data_x[i].tag[j] === tag){
                    show_array.push(data_x[i]);
                }
            }
        }
        return (show_array);
    }
}
module.exports = Model;