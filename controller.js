const Model = require('./model.js')
const View = require('./view.js')


class Controller{
    constructor(){}

    static helpFunction(){
        return View.helpFunctionView()
    }

    static listFunction(){
        let list = Model.listFunction()
        return View.listView(list)
    }

    static addFunction(data){
        let list = Model.addFunction(data)   
        return View.addView(list)
    }

    static findByIdFunction(id){
        let list = Model.findByIdFunction(id)
        return View.listView(list)
    }

    static deleteFunction(id){
        let deleteData = Model.deleteFunction(id)
        return View.deleteView(deleteData)
    }

    static completeFunction(id){
        let complete = Model.completeFunction(id)
        return View.listView(complete)
    }

    static unCompleteFunction(id){
        let unComplete = Model.unCompleteFunction(id)
        return View.listView(unComplete)
    }
}

module.exports = Controller