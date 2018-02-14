const fs = require('fs');


class Todo {
    constructor() {
    }

    static readFile() {
        var fileJSON = fs.readFileSync('./data.json', 'utf8');
        var arrTaskJSON = JSON.parse(fileJSON);
        return arrTaskJSON
    }

    static manageCommand(argv_data) {
        let command = argv_data[2]
        
        if (!command || command == 'help') {

            console.log(`$ node todo.js help`);
            console.log(`$ node todo.js list`);
            console.log(`$ node todo.js add <task_content>`);
            console.log(`$ node todo.js findById <task_id>`);
            console.log(`$ node todo.js delete <task_id>`);
            console.log(`$ node todo.js complete <task_id>`);
            console.log(`$ node todo.js uncomplete <task_id>`);
            console.log(`$ node todo.js list:created asc|desc`);
            console.log(`$ node todo.js list:completed asc|desc`);
            console.log(`$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>`);
            console.log(`$ node todo.js filter:<tag_name>`);

        } else if (command.toLowerCase() == 'list') {

            var arrTaskJSON = Todo.readFile() // [ { task: 'Bikin aplikasi' }, { task: 'Main Node.js' } ]
            
            for (var i = 0; i < arrTaskJSON.length; i++) {
                console.log(`${i+1}. ${arrTaskJSON[i].task}`)
            }

        } else if (command.toLowerCase() == 'add') {
            
            var arrTaskJSON = Todo.readFile(); // array of objects
            
            var obj = {
                task: '[ ] ' + argv_data[3],
                created_date: new Date(),
                tags: []
            }
            arrTaskJSON.push(obj); // array of objects
            
            var newTaskJSON = JSON.stringify(arrTaskJSON);
            console.log(`Added "${argv_data[3]}" to your TODO list...`)
            fs.writeFileSync('./data.json', newTaskJSON, {encoding:'utf8',mode:0o666,flag:'w'});

        } else if (command.toLowerCase() == 'findbyid') {
            
            var arrTaskJSON = Todo.readFile();

            if (argv_data[3] <= arrTaskJSON) {
                console.log(`${argv_data[3]}. ${arrTaskJSON[(Number(argv_data[3])-1)].task}`)
            }
       
        } else if (command.toLowerCase() == 'delete') {

            var arrTaskJSON = Todo.readFile();
        
            if (argv_data[3] <= arrTaskJSON.length) {
                var index = argv_data[3] - 1;
                console.log(`Deleted "${arrTaskJSON[index].task}" to your TODO list...`);
                
                arrTaskJSON.splice(index,1);
                
                var newTaskJSON = JSON.stringify(arrTaskJSON);
                fs.writeFileSync('./data.json', newTaskJSON, {encoding:'utf8',mode:0o666,flag:'w'});
            } else {
                console.log(`File yang ingin Anda delete tidak ada !`)
            }
            
        } else if (command.toLowerCase() == 'complete') {
            
            var arrTaskJSON = Todo.readFile(); // array of objects
            if (argv_data[3] <= arrTaskJSON.length) {
                var newArrTaskJSON = [];
                for (var i = 0; i < arrTaskJSON.length; i++) {
                    var markCheck = arrTaskJSON[i].task.slice(0,4);
                    if (Number(argv_data[3])-1 == i && markCheck == '[ ] ') {
                        var obj = {};
                        var doneMark = '[x] ';
                        var markedTask = arrTaskJSON[Number(argv_data[3])-1].task.split('[ ] ').join('');
                        console.log(`${i+1}. ${doneMark + markedTask}`)
                        obj.task = doneMark + markedTask;
                        obj.created_date = arrTaskJSON[i].created_date;
                        obj.tags = arrTaskJSON[i].tags;
                        newArrTaskJSON.push(obj);
                    } else {
                        console.log(`${i+1}. ${arrTaskJSON[i].task}`)
                        newArrTaskJSON.push(arrTaskJSON[i]);
                    }
                }
                var newTaskJSON = JSON.stringify(newArrTaskJSON);
                fs.writeFileSync('./data.json', newTaskJSON, {encoding:'utf8',mode:0o666,flag:'w'});
            } else {
                console.log(`List yang dicomplete tidak ada !`);
            }

        } else if (command.toLowerCase() == 'uncomplete') {

            var arrTaskJSON = Todo.readFile(); // array of objects
            if (argv_data[3] <= arrTaskJSON.length) {
                var newArrTaskJSON = [];
                for (var i = 0; i < arrTaskJSON.length; i++) {
                    var markCheck = arrTaskJSON[i].task.slice(0,4);
                    if (Number(argv_data[3])-1 == i && markCheck == '[x] ') {
                        var obj = {};
                        var unDoneMark = '[ ] ';
                        var unMarkedTask = arrTaskJSON[Number(argv_data[3])-1].task.split('[x] ').join('');
                        console.log(`${i+1}. ${unDoneMark + unMarkedTask}`)
                        obj.task = unDoneMark + unMarkedTask;
                        obj.created_date = arrTaskJSON[i].created_date;
                        obj.tags = arrTaskJSON[i].tags;
                        newArrTaskJSON.push(obj);
                    } else {
                        console.log(`${i+1}. ${arrTaskJSON[i].task}`)
                        newArrTaskJSON.push(arrTaskJSON[i]);
                    }
                }
                var newTaskJSON = JSON.stringify(newArrTaskJSON);
                fs.writeFileSync('./data.json', newTaskJSON, {encoding:'utf8',mode:0o666,flag:'w'});
            } else {
                console.log(`List yang diuncomplete tidak ada !`);
            }

        } else if (command.toLowerCase() == 'list:created') {

            var arrTaskJSON = Todo.readFile();

            if (argv_data[3] == 'asc' || !argv_data[3]) {
                var arrTime = []; // TO OBTAIN SORTED ITEMS
                for (var i = 0; i < arrTaskJSON.length; i++) {
                    arrTime.push(new Date(arrTaskJSON[i].created_date));    
                }
                var arrTimeSorted = arrTime.sort(function(a, b){return a-b});
    
                var arrIndex = []; // TO OBTAIN INDEX OF SORTED ITEMS
                for (var i = 0; i < arrTaskJSON.length; i++) {
                    for (var j = 0; j < arrTimeSorted.length; j++) {
                        if (new Date(arrTaskJSON[i].created_date) == String(arrTimeSorted[j])) {
                            arrIndex.push(j);
                        }
                    }
                }
                // console.log(arrIndex); // [1,0,2]
    
                for (var i = 0; i < arrTaskJSON.length; i++) {
                    console.log(`${i+1}. ${arrTaskJSON[arrIndex[i]].task}, created date: ${new Date(arrTaskJSON[arrIndex[i]].created_date)}`)
                }

            } else if (argv_data[3] == 'desc') {

                var arrTime = []; // TO OBTAIN SORTED ITEMS
                for (var i = 0; i < arrTaskJSON.length; i++) {
                    arrTime.push(new Date(arrTaskJSON[i].created_date));    
                }
                var arrTimeSorted = arrTime.sort(function(a, b){return b-a});
    
                var arrIndex = []; // TO OBTAIN INDEX OF SORTED ITEMS
                for (var i = 0; i < arrTaskJSON.length; i++) {
                    for (var j = 0; j < arrTimeSorted.length; j++) {
                        if (new Date(arrTaskJSON[i].created_date) == String(arrTimeSorted[j])) {
                            arrIndex.push(j);
                        }
                    }
                }
    
                for (var i = 0; i < arrTaskJSON.length; i++) {
                    console.log(`${i+1}. ${arrTaskJSON[arrIndex[i]].task}, created date: ${new Date(arrTaskJSON[arrIndex[i]].created_date)}`)
                }   
            }

        } else if (command.toLowerCase() == 'tag') {

            var arrTaskJSON = Todo.readFile();

            if (argv_data[3] <= arrTaskJSON.length) {
                var arrTags = []
                for (var i = 4; i < argv_data.length; i++) {
                    arrTags.push(argv_data[i]);
                }
                console.log(`Tagged task "${arrTaskJSON[(Number(argv_data[3])-1)].task}" with ${arrTags.join(' ')} `);
                
                var newArrTaskJSON = [];
                for (var i = 0; i < arrTaskJSON.length; i++) {
                    if (Number(argv_data[3])-1 == i) {
                        for (var i = 0 ; i < arrTags.length; i++) {
                            var obj = {};
                            obj.task = arrTaskJSON[i].task;
                            obj.created_date = arrTaskJSON[i].created_date;
                            obj.tags = arrTags;
                            newArrTaskJSON.push(obj);
                        }
                    } else {
                        newArrTaskJSON.push(arrTaskJSON[i]);
                    }
                }
                var newTaskJSON = JSON.stringify(newArrTaskJSON);
                fs.writeFileSync('./data.json', newTaskJSON, {encoding:'utf8',mode:0o666,flag:'w'});
                       
            } else {
                console.log('Input index Anda kurang tepat !');
            }

        } else if (command.toLowerCase() == 'filter') {

            var arrTaskJSON = Todo.readFile();

            for (var i = 0; i < arrTaskJSON.length; i++) {
                for (var j = 0; j < arrTaskJSON[i].tags; j++) {
                    for (var k = 0; k < arrTaskJSON[i].tags[j]; k++) {
                        if (arrTaskJSON[i].tags[j] == argv_data[3]) {
                            console.log(`${arrTaskJSON[i].task} ${arrTaskJSON[i].tags}`);
                        }
                    }
                }
            }
            // console.log(arrTaskJSON[0].tags[0]) // home
            // console.log(arrTaskJSON[0].tags);
        }
    }
}


var argv_data = process.argv
Todo.manageCommand(argv_data)