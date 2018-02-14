const Model = require('../models/model')
const View = require('../views/view')

class Controller{
    static checkInput(input){
        if(input === 'help'){
            View.showHelp()
        }

    }

}

module.exports = Controller