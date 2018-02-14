"use strict"

const TODOModels = require('./model.js');
const TODOViews = require('./view.js');

class TODOControls {
	constructor(input) {
		this._command = input.command;
		this._option = input.option;
	}

	get command() {
		return this._command;
	}

	get option() {
		return this._option;
	}

	execute() {
		if (this.command) {
			switch (this.command.split(':')[0]) {
				case 'list': {
					TODOControls.list(this.command.split(':')[1], this.option);
					break;
				}
				case 'add' : {
					TODOControls.add(this.option);
					break;
				}
				case 'findById' : {
					TODOControls.findById(this.option);
					break;
				}
				case 'delete' : {
					TODOControls.delete(this.option);
					break;
				}
				case 'complete' : {
					TODOControls.complete(this.option);
					break;
				}
				case 'uncomplete' : {
					TODOControls.uncomplete(this.option);
					break;
				}
				case 'tag' : {
					TODOControls.tag(this.option);
					break;
				}
				case 'filter' : {
					TODOControls.filter(this.command.split(':')[1]);
					break;
				}
				default : 
				console.log(
		`Usage: node "JS Todos.js" <command>

where <command> is one of:
	help			menampilkan command apa saja yang tersedia
	list			melihat daftar TODO
	add <task_content>	menambahkan TODO ke dalam list
	findById <task_id>	melihat detail TODO sesuai \`task_id\` nya
	delete <task_id>	menghapus TODO sesuai \`task_id\` nya
	complete <task_id>	menandai status TODO selesai
	uncomplete <task_id>	menandai status TODO belum selesai`
				);
			}
		} else console.log(
		`Usage: node "JS Todos.js" <command>

where <command> is one of:
	help			menampilkan command apa saja yang tersedia
	list			melihat daftar TODO
	add <task_content>	menambahkan TODO ke dalam list
	findById <task_id>	melihat detail TODO sesuai \`task_id\` nya
	delete <task_id>	menghapus TODO sesuai \`task_id\` nya
	complete <task_id>	menandai status TODO selesai
	uncomplete <task_id>	menandai status TODO belum selesai`
			);
	}

	static list(option, sort) {
		TODOModels.readFile(function (dataObj) {
			switch (option) {
				case 'created' : {
					TODOControls.sort(dataObj, sort, 'created_date');
					TODOViews.showListMessage(dataObj);
					break;
				}
				case 'completed' : {
					let dataObjCompleted = [];
					for (let i = 0; i < dataObj.length; i++) {
						if (dataObj[i].completed_date != '' && dataObj[i].status) dataObjCompleted.push(dataObj[i]);
					}
					TODOControls.sort(dataObjCompleted, sort, 'completed_date')
					TODOViews.showListMessage(dataObjCompleted);
					break;
				}
				default : TODOViews.showListMessage(dataObj);
			}
		});
	}

	static add(data) {
		TODOModels.readFile(function (dataObj) {
			let newObj = {
				id : (Number(dataObj[dataObj.length - 1].id) + 1).toString(),
				todo : data,
				status : false,
				created_date : new Date(),
				completed_date : '',
				tag : []
			};

			dataObj.push(newObj);
			TODOModels.writeFile(dataObj, function() {
				TODOViews.showMessage(`Added ${dataObj[dataObj.length - 1].todo} to your TODO list...`);
			});
		});
	}

	static findById(id) {
		TODOModels.readFile(function (dataObj) {
			for (let i = 0; i < dataObj.length; i++) {
				if (dataObj[i].id == id) {
					TODOViews.showMessage(`${dataObj[i].id}. ${dataObj[i].todo}`);
				}
			}
		});
	}

	static delete(id) {
		TODOModels.readFile(function (dataObj) {
			let deletedData = '';

			for (let i = 0; i < dataObj.length; i++) {
				if (dataObj[i].id == id) {
					deletedData = dataObj[i].todo;
					dataObj.splice(i, 1);
					break;
				}
			}

			TODOModels.writeFile(dataObj, function() {
				TODOViews.showMessage(`deleted ${deletedData} from your TODO list...`);
			});
		});
	}

	static complete(id) {
		TODOModels.readFile(function (dataObj) {
			for (let i = 0; i < dataObj.length; i++) {
				if (dataObj[i].id == id) {
					dataObj[i].status = true;
					dataObj[i].completed_date = new Date();
					break;
				}
			}


			TODOModels.writeFile(dataObj, function() {
				TODOControls.list();
			});
		});
	}

	static uncomplete(id) {
		TODOModels.readFile(function (dataObj) {
			for (let i = 0; i < dataObj.length; i++) {
				if (dataObj[i].id == id) {
					dataObj[i].status = false;
					dataObj[i].completed_date = '';
					break;
				}
			}

			TODOModels.writeFile(dataObj, function() {
				TODOControls.list();
			});
		});
	}

	static tag(option) {
		let id = option.split(' ')[0];

		TODOModels.readFile(function (dataObj) {
			let name_task = '';
			let tags = [];

			for (let i = 0; i < dataObj.length; i++) {
				if (dataObj[i].id == id) {
					name_task = dataObj[i].todo;
					for (let j = 1; j < option.split(' ').length; j++) {
						if (dataObj[i].tag.indexOf(option.split(' ')[j]) == -1) {
							dataObj[i].tag.push(option.split(' ')[j]);
							tags.push(option.split(' ')[j]);
						}
					}
					break;
				}
			}

			TODOModels.writeFile(dataObj, function() {
				TODOViews.showMessage(`Tagged task "${name_task}" with tags: ${tags.join(' ')}`);
			});
		});
	}

	static filter(option) {
		TODOModels.readFile(function (dataObj) {
			let result = [];

			for (let i = 0; i < dataObj.length; i++) {
				for (let j = 0; j < dataObj[i].tag.length; j++) {

					if (dataObj[i].tag[j] == option) {
						result.push(dataObj[i]);
						break;
					}
				}
			}

			TODOViews.showListMessage(result);
		});
	}

	static sort(data, option, property) {
		for (let i = 1; i < data.length; i++) {
			for (let j = 0; j < i; j++) {
				if (option == 'desc') {
					if (data[i][property] > data[j][property]) {
						let temp = data[i];
			  			data[i] = data[j];
			  			data[j] = temp;
					}
				} else {
					if (data[i][property] < data[j][property]) {
						let temp = data[i];
			  			data[i] = data[j];
			  			data[j] = temp;
					}
				}
			}
		}
	}
}

module.exports = TODOControls;