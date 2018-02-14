// const Model = require ('./model.js');
const View = require ('./view.js');

class Controller {
    static show_help(){
        return View.help_menu();
    }
}



module.exports = Controller;