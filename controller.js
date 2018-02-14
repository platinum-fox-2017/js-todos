const Model = require('./model')
const View = require('./view')

class Controller{
	constructor(){

	}
	static command(inputTodo){
		if(inputTodo === undefined){
			View.callHelp()

		}
		else if(inputTodo === 'help'){
			View.showHelp()
		}
		else if(inputTodo === 'list'){
			let listData = Model.showList()
			View.showList()
		}
	}

}

module.exports = Controller