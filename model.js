"use strict"

const fs = require('fs');
const path = './data.json';

class TODOModels {
	static readFile(callback) {
		fs.readFile(path, 'utf8', function (err, data) {
			if (err) console.log(err);
			else {
				let dataObj = JSON.parse(data);
				callback(dataObj);
			}
		});
	}

	static writeFile(data, callback) {
		fs.writeFile(path, JSON.stringify(data), (err) => {
		  if (err) console.log(err);
		  callback();
		});
	}

	static list(option, sort, callback) {
		TODOModels.readFile(function (dataObj) {
			switch (option) {
				case 'created' : {
					TODOModels.sort(dataObj, sort, 'created_date');
					callback(dataObj);
					break;
				}
				case 'completed' : {
					let dataObjCompleted = [];
					for (let i = 0; i < dataObj.length; i++) {
						if (dataObj[i].completed_date != '' && dataObj[i].status) dataObjCompleted.push(dataObj[i]);
					}
					TODOModels.sort(dataObjCompleted, sort, 'completed_date')
					callback(dataObjCompleted);
					break;
				}
				default : callback(dataObj);
			}
		});
	}

	static add(data, callback) {
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
				callback(dataObj);
			});
		});
	}

	static findById(id, callback) {
		TODOModels.readFile(function (dataObj) {
			for (let i = 0; i < dataObj.length; i++) {
				if (dataObj[i].id == id) {
					callback(dataObj);
				}
			}
		});
	}

	static delete(id, callback) {
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
				callback(deletedData);
			});
		});
	}

	static complete(id, callback) {
		TODOModels.readFile(function (dataObj) {
			for (let i = 0; i < dataObj.length; i++) {
				if (dataObj[i].id == id) {
					dataObj[i].status = true;
					dataObj[i].completed_date = new Date();
					break;
				}
			}


			TODOModels.writeFile(dataObj, function() {
				callback();
			});
		});
	}

	static uncomplete(id, callback) {
		TODOModels.readFile(function (dataObj) {
			for (let i = 0; i < dataObj.length; i++) {
				if (dataObj[i].id == id) {
					dataObj[i].status = false;
					dataObj[i].completed_date = '';
					break;
				}
			}

			TODOModels.writeFile(dataObj, function() {
				callback();
			});
		});
	}

	static tag(option, callback) {
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
				callback(name_task, tags);
			});
		});
	}

	static filter(option, callback) {
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

			callback(result);
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

module.exports = TODOModels;