const fs = require('fs')

class Model{
	constructor(){
	}

	static showList(){
		let file = fs.readFileSync('./data.json','utf8')
		let read = JSON.parse(file)
		return read
	}
	static addTodo(input){
		let data = JSON.parse(fs.readFileSync('./data.json','utf8'))
		let obj = {
			task : input,
			status: 'uncomplete',
			created: new Date(),
			finishedDate :new Date(),
			tags : []
		}
		data.push(obj)
		fs.writeFileSync('./data.json',JSON.stringify(data))
	}

	static findById(input){
		let datafind = JSON.parse(fs.readFileSync('./data.json','utf8'))
		let id = Number(input)
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
		datatodo[id-1].finishedDate = new Date()
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
	static sortCreated(type){
		let filedata = JSON.parse(fs.readFileSync('./data.json','utf8'))
		if(type === 'asc'){
			let sort = filedata.sort(function(a,b){
				return new Date(a.created) - new Date(b.created);
			})
			return sort
		}
		else{
			let sortAsc = filedata.sort(function(a,b){
				return new Date(b.created) - new Date(a.created);
			})
			return sortAsc
		}
	}
	static completedList(type){
		let filedata2 = JSON.parse(fs.readFileSync('./data.json','utf8'))
		let arrComplete = []
		for(let i=0;i<filedata2.length;i++){
			if(filedata2[i].status === 'complete'){
				arrComplete.push(filedata2[i])
			}
		}
		if(type === 'asc'){
			let sort = arrComplete.sort(function(a,b){
				return new Date(a.finishedDate) - new Date(b.finishedDate);
			})
			return sort
		}
		else{
			let sortAsc = arrComplete.sort(function(a,b){
				return new Date(b.finishedDate) - new Date(a.finishedDate);
			})
			return sortAsc
		}
		
	}

	static addTag(tag){
		let fileAwal = JSON.parse(fs.readFileSync('./data.json','utf8'))
		let tagData = tag.split(' ').splice(1)
		// console.log(tagData,'iiiiiiiiiiiiiiiii')
		let id = Number(tag[0])
		let listTag = fileAwal[id-1].tags
		for(let i=0;i<tagData.length;i++){
			if(listTag.indexOf(tagData[i]) === -1){
				fileAwal[id-1].tags.push(tagData[i])	
			}
		}
		fs.writeFileSync('./data.json',JSON.stringify(fileAwal))
		return fileAwal[id-1].task
			
	}
	static filterTag(tag){
		let fileAwal = JSON.parse(fs.readFileSync('./data.json','utf8'))
		let arrFilter = []
		for(let i =0;i<fileAwal.length;i++){
			for(let j=0;j<fileAwal[i].tags.length;j++){
				if(fileAwal[i].tags[j] === tag){
					arrFilter.push(fileAwal[i])
				}
			}
		}
		let sortDesc = arrFilter.sort(function(a,b){
			return new Date(b.created) - new Date(a.created);
		})
		return sortDesc
	}

}
// console.log(Model.completedList())
module.exports = Model