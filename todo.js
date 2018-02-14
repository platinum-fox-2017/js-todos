const Controller = require ('./controller.js');


let argv = process.argv;
let command = argv[2];
let value = argv[3];

switch(true){
    case(command === 'help' || command === undefined):
    Controller.show_help();
    break;
    case(command === 'list'):
    Controller.show_to_do_list();
    break;
    case(command === 'add'):
    break;
    case(command === 'find_by_id'):
    break;
    case(command === 'delete'):
    break;
    case(command === 'complete'):
    break;
    case(command === 'uncomplete'):
    break;
}
