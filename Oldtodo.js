const fs = require('fs');

var fileJSON = fs.readFileSync('./data.json', 'utf8');


var list = process.argv
// console.log(list);

// HELP FUNCTION
if (!list[2] || list[2] == 'help') {
    // console.log(`$ node todo.js`);
    console.log(`$ node todo.js help`);
    console.log(`$ node todo.js list`);
    console.log(`$ node todo.js add <task_content>`);
    console.log(`$ node todo.js findById <task_id>`);
    console.log(`$ node todo.js delete <task_id>`);
    console.log(`$ node todo.js complete <task_id>`);
    console.log(`$ node todo.js uncomplete <task_id>`);
}


// LIST FUNCTION
if (list[2] == 'list') {
    
    // CARA STRING
    // var arrFileSplit = fileJSON.trim().split('\r\n'); // length: 4
    // var arrFileTask = [];
    // for (var i = 1; i < arrFileSplit.length-1; i++) {
    //     arrFileTask.push(arrFileSplit[i].trim());
    // }
    // console.log(arrFileTask);

    // CARA OBJECT
    var arrTaskJSON = JSON.parse(fileJSON);
    var arrTask = [];
    for (var i = 0; i < arrTaskJSON.length; i++) {
        arrTask.push(arrTaskJSON[i].task); 
    }

    // console.log(arrTaskJSON[0].task); // { task: 'Bikin aplikasi' }
    // console.log(arrTask);

    for (var i = 0; i < arrTask.length; i++) {
        console.log(`${i+1}. ${arrTask[i]}`) //[ 'Bikin aplikasi', 'Main Node.js' ]
    }
}


// ADD FUNCTION
if (list[2] == 'add') {

    var arrTaskJSON = JSON.parse(fileJSON);
    var arrTask = [];
    for (var i = 0; i < arrTaskJSON.length; i++) {
        arrTask.push(arrTaskJSON[i].task); 
    }
    // console.log(arrTaskJSON[0].task); // { task: 'Bikin aplikasi' }
    // console.log(arrTask);

    arrTask.push(list[3]);
    
    var arrNewTask = [];
    for (var i = 0; i < arrTask.length; i++) {
        var obj = {}
        obj.task = arrTask[i]
        arrNewTask.push(obj);
    }
    // console.log(arrNewTask);
    
    var newTaskJSON = JSON.stringify(arrNewTask);
    console.log(`Added "${list[3]}" to your TODO list...`)
    return fs.writeFileSync('./data.json', newTaskJSON, {encoding:'utf8',mode:0o666,flag:'w'});

}


// FINDBYID FUNCTION
if (list[2] == 'findById') {
    
    var arrTaskJSON = JSON.parse(fileJSON);
    var arrTask = [];
    for (var i = 0; i < arrTaskJSON.length; i++) {
        arrTask.push(arrTaskJSON[i].task); 
    }

    if (list[3] <= arrTask.length) {
        console.log(`${list[3]}. ${arrTask[(Number(list[3])-1)]}`);
    } else {
        console.log(`Tidak ada TODO list sesuai input Anda.`);
    }

}


// DELETE FUNCTION
if (list[2] == 'delete') {

    var arrTaskJSON = JSON.parse(fileJSON);
    var arrTask = [];
    for (var i = 0; i < arrTaskJSON.length; i++) {
        arrTask.push(arrTaskJSON[i].task); 
    }
    // console.log(arrTask); //[ 'Bikin aplikasi', 'Main Node.js', 'shut down my computer' ]

    if (list[3] <= arrTask.length) {

        var index = list[3] - 1;
        console.log(`Deleted "${arrTask[index]}" to your TODO list...`);
        
        arrTask.splice(index,1);
        
        var arrNewTask = [];
        for (var i = 0; i < arrTask.length; i++) {
            var obj = {}
            obj.task = arrTask[i]
            arrNewTask.push(obj);
        }
        var newTaskJSON = JSON.stringify(arrNewTask);
        return fs.writeFileSync('./data.json', newTaskJSON, {encoding:'utf8',mode:0o666,flag:'w'});
    } else {
        console.log(`File yang ingin Anda delete tidak ada !`)
    }
    
}









