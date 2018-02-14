const Model = require ('./model.js');
const View = require ('./view.js');

class Controller {
    static show_help(){
        return View.help_menu();
    }
    static to_do_list(){
        return View.to_do_list(Model.to_do_list());
    }
    static add_to_do(new_task){
        return View.add_to_do(Model.add_to_do(new_task));
    }

    static find_by_id(id){
        // return View.find_by_id(Model.find_by_id(id));
        return Model.find_by_id(id, View.find_by_id)
    }


    static not_found(){
        return View.not_found();
    }
}



module.exports = Controller;