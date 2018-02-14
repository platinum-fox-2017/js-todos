'use strict'
const Model = require('../models')
const View = require('../views')

class Controller {
    constructor() {

    }

    static getCommand(command, input) {
        if (command === 'help') {
            View.showCommand()
        } else if (command === 'list') {
            let data = Model.getData()
            View.showData(data)
        } else if (command === 'add') {
            let data = Model.addData(input)
            View.addedAction(data)
        } else if (command === 'findById') {
            let data = Model.getId(input)
            View.showData(data)
        } else if (command === 'delete') {
            let data = Model.deleteById(input)
            View.deleteAction(data)
        } else if (command === 'complete') {
            Model.complete(input)
            let data = Model.getData()
            View.showData(data)
        } else if (command === 'uncomplete') {
            Model.uncomplete(input)
            let data = Model.getData()
            View.showData(data)
        } else {
            View.getHelp()
        }
    }
}

module.exports = Controller