const fs = require('fs')


class Model{
	constructor(){
		this.file = fs.readFileSync('./data.json','utf8')	
	}
	static showList(){
		let read = JSON.parse(this.file)
		console.log(read)
		return read
	}
	
}

module.exports = Model