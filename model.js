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
				// console.log(a.created,'ini asc')
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
		// console.log(filedata[0].status,'iiiiiiiiiiii')
		let arrComplete = []
		for(let i=0;i<filedata2.length;i++){
			// console.log(filedata[i].status)
			if(filedata2[i].status === 'complete'){
				arrComplete.push(filedata2[i])
			}
		}
		if(type === 'asc'){
			let sort = arrComplete.sort(function(a,b){
				// console.log(a.created,'ini asc')
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
		let tagData = tag.split(' ').splice(1).join(' ')
		let id = Number(tag[0])
		// console.log(tagData,'------ini tag data')
		// console.log(id,'-------id task')
		// console.log(fileAwal[id-1].tags,'------------ini tagnya')
		let listTag = fileAwal[id-1].tags
			if(listTag.indexOf(tagData) === -1){
				fileAwal[id-1].tags.push(tagData)
				fs.writeFileSync('./data.json',JSON.stringify(fileAwal))
				return fileAwal[id-1].task
			}else{
				return 'duplicate tags'
			}
	}
	static filterTag(tag){
		let fileAwal = JSON.parse(fs.readFileSync('./data.json','utf8'))
		// console.log(tag+'-------ini tagnya')
		let arrFilter = []
		for(let i =0;i<fileAwal.length;i++){
			for(let j=0;j<fileAwal[i].tags.length;j++){
				if(fileAwal[i].tags[j] === tag){
					arrFilter.push(fileAwal[i])
				}
			}
		}
		// console.log(arrFilter)
		let sortDesc = arrFilter.sort(function(a,b){
			return new Date(b.created) - new Date(a.created);
		})
		// console.log(sortDesc,'hasil sort')
		return sortDesc
	}

}
// console.log(Model.completedList())
module.exports = Model