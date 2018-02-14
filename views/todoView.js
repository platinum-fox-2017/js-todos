'use strict'
class TodoView {
    constructor() {}
    static help() {
        console.log('Todo Input:\n1. help\n2. list\n3. add {content}\n4. findById {id}\n5. delete {id}\n6. complete {id}\n7. uncomplete {id}\n');
    }
}

module.exports = TodoView