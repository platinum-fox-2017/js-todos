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
					switch (this.command.split(':')[1]) {
						case 'created' : {
							TODOControls.listCreated(this.option);
							break;
						}
						// case 'completed' : {
						// 	TODOControls.list();
						// 	break;
						// }
						default : TODOControls.list();
					}
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

	static list() {
		TODOModels.readFile(function (dataObj) {
			TODOViews.showListMessage(dataObj);
		});
	}

	static listCreated(option) {
		TODOModels.readFile(function (dataObj) {
			TODOControls.sort(dataObj, option);
			TODOViews.showListMessage(dataObj);
		});
	}

	static add(data) {
		TODOModels.readFile(function (dataObj, callback) {
			let newObj = {
				id : (Number(dataObj[dataObj.length - 1].id) + 1).toString(),
				todo : data,
				status : false
			};

			dataObj.push(newObj);
			TODOModels.writeFile(dataObj);

			TODOViews.showMessage(`Added ${dataObj[dataObj.length - 1].todo} to your TODO list...`);
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
		TODOModels.readFile(function (dataObj, callback) {
			let deletedData = '';

			for (let i = 0; i < dataObj.length; i++) {
				if (dataObj[i].id == id) {
					deletedData = dataObj[i].todo;
					dataObj.splice(i, 1);
					break;
				}
			}

			TODOModels.writeFile(dataObj);
			TODOViews.showMessage(`deleted ${deletedData} from your TODO list...`);
		});
	}

	static complete(id) {
		TODOModels.readFile(function (dataObj, callback) {
			let deletedData = '';

			for (let i = 0; i < dataObj.length; i++) {
				if (dataObj[i].id == id) {
					dataObj[i].status = true;
					break;
				}
			}

			TODOModels.writeFile(dataObj);
			TODOControls.list();
		});
	}

	static uncomplete(id) {
		TODOModels.readFile(function (dataObj, callback) {
			let deletedData = '';

			for (let i = 0; i < dataObj.length; i++) {
				if (dataObj[i].id == id) {
					dataObj[i].status = false;
					break;
				}
			}

			TODOModels.writeFile(dataObj);
			TODOControls.list();
		});
	}

	static sort(data, option) {
		for (let i = 1; i < data.length; i++) {
			for (let j = 0; j < i; j++) {
				if (option == 'desc') {
					if (data[i].created_date > data[j].created_date) {
						let temp = data[i];
			  			data[i] = data[j];
			  			data[j] = temp;
					}
				} else {
					if (data[i].created_date < data[j].created_date) {
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