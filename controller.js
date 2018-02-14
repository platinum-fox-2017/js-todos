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
        //callback
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

    static createdList(data) {
        let getDeaultData = Model.getDeaultData()
        View.createdList(getDeaultData, data)  
    }

    static sortListStatus(data) {
        Model.sortListStatus(data, View.sortListStatus)
    }

    static addTag(data, tag_1, tag_2) {
        Model.addTag(data, tag_1, tag_2, View.addTag)
    }

    static filterTag(task) {
        Model.filterTag(task, View.filterTag)
    }
}

module.exports = Controller