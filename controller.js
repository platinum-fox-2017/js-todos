const Model = require ('./model.js');
const View = require ('./view.js');

class Controller {
    static show_help(){
        return View.help_menu();
    }
    static show_to_do_list(){
        return View.to_do_list(Model.to_do_list());
    }
}



module.exports = Controller;