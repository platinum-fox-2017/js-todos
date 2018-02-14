const Controller = require ('./controller.js');


let argv = process.argv;
let command = argv[2];
let value = argv[3];

switch(true){
    case(command === 'help' || command === undefined):
    Controller.show_help();
    break;
    case(command === 'list'):
    Controller.to_do_list();
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
}
