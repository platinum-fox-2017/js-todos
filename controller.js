const Model = require('./model')
const View = require('./view')

class Controller{
	constructor(){

	}
	static command(inputTodo,input2){
		if(inputTodo === undefined){
			View.callHelp()

		}
		else if(inputTodo === 'help'){
			View.showHelp()
		}
		else if(inputTodo === 'list'){
			let listData = Model.showList()
			View.showList(listData)
		}
		else if(inputTodo === 'add'){
			Model.addTodo(input2)
			View.addTodo(input2)
		}
		else if(inputTodo === 'findById'){
			let find = Model.findById(input2)
			// console.log(find,'=============')
			View.findById(find)	
		}
		else if(inputTodo === 'delete'){
			let deleted = Model.deleteTodo(input2)
			View.deleteTodo(deleted)	
		}
		else if(inputTodo === 'complete'){
			let complete = Model.completedTodo(input2)
			View.showList(complete)
		}
		else if(inputTodo === 'uncomplete'){
			let uncomplete = Model.uncompletedTodo(input2)
			View.showList(uncomplete)
		}
	}

}

module.exports = Controller