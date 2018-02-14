const fs = require('fs')

class Model{
	constructor(){
	}

	static showList(){
		let file = fs.readFileSync('./data.json','utf8')
		let read = JSON.parse(file)
		// console.log(read,'--------------')
		return read
	}
	static addTodo(input){
		let data = JSON.parse(fs.readFileSync('./data.json','utf8'))
		let obj = {
			task : input,
			status: 'uncomplete'
		}
		data.push(obj)
		fs.writeFileSync('./data.json',JSON.stringify(data))
	}

	static findById(input){
		let datafind = JSON.parse(fs.readFileSync('./data.json','utf8'))
		let id = Number(input)
		// console.log(data[id-1],"modeeeeeeeeeeeel")
		return `${id}. ${datafind[id-1].task}`
	}
	static deleteTodo(idinput){
		let datadel = JSON.parse(fs.readFileSync('./data.json','utf8'))
		let id = Number(idinput)
		let deleted = datadel.splice(id-1,1)
		fs.writeFileSync('./data.json',JSON.stringify(datadel))
		return deleted
	}

	static completedTodo(inputId){
		let datatodo = JSON.parse(fs.readFileSync('./data.json','utf8'))
		let id = Number(inputId)
		datatodo[id-1].status = 'complete'
		fs.writeFileSync('./data.json',JSON.stringify(datatodo))
		return datatodo
	}

	static uncompletedTodo(inputId){
		let datatodo = JSON.parse(fs.readFileSync('./data.json','utf8'))
		let id = Number(inputId)
		datatodo[id-1].status = 'uncomplete'
		fs.writeFileSync('./data.json',JSON.stringify(datatodo))
		return datatodo
	}

}
// console.log(Model.deleteTodo(3))
module.exports = Model