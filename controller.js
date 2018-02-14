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
		else if(inputTodo === 'list:created'){
			let sort = Model.sortCreated(input2)
			View.showList(sort)

		}
		else if(inputTodo === 'list:completed'){
			let completeTodo = Model.completedList(input2)
			View.showList(completeTodo)

		}
		else if(inputTodo === 'tag'){
			let inputTag = Model.addTag(input2)
			View.showAddedTag(inputTag,input2)
		}
		else if(inputTodo === 'filter'){
			let filtered = Model.filterTag(input2)
			View.showFilterTag(filtered)
		}
	}


}

module.exports = Controller