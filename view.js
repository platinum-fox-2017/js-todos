class TODOViews {
	static showListMessage(dataObj) {
		for (let i = 0; i < dataObj.length; i++) {
			TODOViews.showMessage(`${dataObj[i].id}. [${dataObj[i].status ? 'x' : ' '}] ${dataObj[i].todo}`);
		}
	}

	static showMessage(data) {
		console.log(data);
	}
}

module.exports = TODOViews;