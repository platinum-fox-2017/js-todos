const View = require('./view')
const Model = require('./model');

class Controller {
    static viewHelp() {
        View.viewHelp();
    }

    static viewList() {
        let data = Model.viewList();
        View.viewList(data);
    }

    static addData(data) {
        Model.addData(data)
        View.addData(data)
    }

    static findId(data) {
        //callback to get data and parsing to view
        Model.findId(data, View.findId)
    }

    static deleteId(data) {
        Model.deleteId(data, View.deleteId)
    }

    static completeId(data) {
        Model.completeId(data);
        this.viewList()
    }

    static uncompleteId(data) {
        Model.uncompleteId(data)
        this.viewList()
    }
}

module.exports = Controller