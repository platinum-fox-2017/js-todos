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
					TODOModels.list(this.command.split(':')[1], this.option, function (dataObj) {
						TODOViews.showListMessage(dataObj);
					});
					break;
				}
				case 'add' : {
					TODOModels.add(this.option, function (dataObj) {
						TODOViews.showMessage(`Added ${dataObj[dataObj.length - 1].todo} to your TODO list...`);
					});
					break;
				}
				case 'findById' : {
					TODOModels.findById(this.option, function (dataObj) {
						TODOViews.showMessage(`${dataObj[i].id}. ${dataObj[i].todo}`);
					});
					break;
				}
				case 'delete' : {
					TODOModels.delete(this.option, function (deletedData) {
						TODOViews.showMessage(`deleted ${deletedData} from your TODO list...`);
					});
					break;
				}
				case 'complete' : {
					TODOModels.complete(this.option, function () {
						TODOModels.list(null, null, function (dataObj) {
							TODOViews.showListMessage(dataObj);
						})
					});
					break;
				}
				case 'uncomplete' : {
					TODOModels.uncomplete(this.option, function () {
						TODOModels.list(null, null, function (dataObj) {
							TODOViews.showListMessage(dataObj);
						})
					});
					break;
				}
				case 'tag' : {
					TODOModels.tag(this.option, function (name_task, tags) {
						TODOViews.showMessage(`Tagged task "${name_task}" with tags: ${tags.join(' ')}`);
					});
					break;
				}
				case 'filter' : {
					TODOModels.filter(this.command.split(':')[1], function (result) {
						TODOViews.showListMessage(result);
					});
					break;
				}
				default :
				TODOViews.showMessage(
					`Usage: node "JS Todos.js" <command>

where <command> is one of:
	help			menampilkan command apa saja yang tersedia
	list			melihat daftar TODO
	add <task_content>	menambahkan TODO ke dalam list
	findById <task_id>	melihat detail TODO sesuai \`task_id\` nya
	delete <task_id>	menghapus TODO sesuai \`task_id\` nya
	complete <task_id>	menandai status TODO selesai
	uncomplete <task_id>	menandai status TODO belum selesai`);
			}
		} else TODOViews.showMessage(
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
}

module.exports = TODOControls;