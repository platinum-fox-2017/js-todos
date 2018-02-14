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
}



module.exports = Controller;