const data = require('./data.json');

class Model{
    static to_do_list(){
        return data;
    }
}



module.exports = Model;