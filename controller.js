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
        return Model.find_by_id(id, View.find_by_id)
    }
    static delete_to_do(delete_task){
        return View.delete_to_do(Model.delete_to_do(delete_task));
    }
    static complete(check){
        return View.to_do_list(Model.complete(check));
    }
    static uncomplete(uncheck){
        return View.to_do_list(Model.uncomplete(uncheck));
    }
    static outstanding(ascdesc){
        return View.to_do_list(Model.outstanding(ascdesc));
    }
    static completed(ascdesc){
        return View.to_do_list(Model.completed(ascdesc));
    }
    static tag(index,tags_to_be_added){
        return View.tag(Model.tag(index,tags_to_be_added));
    }
    static filter(tag){
        return View.filter(Model.filter(tag));
    }
}


module.exports = Controller;