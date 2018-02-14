const Controller = require ('./controller.js');


let argv = process.argv;
let command = argv[2];
let value = argv[3];
let value2 = argv[4];
let value3 = argv.splice(4).join(' ');

switch(true){
    case(command === 'help' || command === undefined):
    Controller.show_help();
    break;
    case(command === 'list'):
    if(!value){
        Controller.to_do_list();
    } else if (value === 'outstanding'){
        Controller.outstanding(value2);
    } else if (value === 'completed'){
        Controller.completed(value2);
    }
    break;
    case(command === 'add'):
    Controller.add_to_do(value);
    break;
    case(command === 'find_by_id'):
    Controller.find_by_id(value);
    break;
    case(command === 'delete'):
    Controller.delete_to_do(value);
    break;
    case(command === 'complete'):
    Controller.complete(value);
    break;
    case(command === 'uncomplete'):
    Controller.uncomplete(value);
    break;
    case(command === 'tag'):
    Controller.tag(value,value3);
    break;
    case(command === 'filter'):
    Controller.filter(value);
    break;
}
