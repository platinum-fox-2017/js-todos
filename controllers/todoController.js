'use strict'
const TodoModel = require('../models/todoModel');
const TodoView = require('../views/todoView');

class Todo {
    constructor() {}
    static process(input) {
        let tagHobby = input.slice(2)
        if (input[0] && input[0].indexOf(':') >= 0) {
            let sort = input[1]
            input = input[0].split(':')
            input.push(sort)
        }
        if (input[0] == 'list') {
            if (input[1]) {
                return new Todo().list(input.slice(1))
            } else {
                return new Todo().list()
            }
        } else if (input[0] == 'add') {
            return new Todo().add(input[1])
        } else if (input[0] == 'findById') {
            return new Todo().findById(input[1])
        } else if (input[0] == 'delete') {
            if (input.length === 2) {
                return new Todo().delete(input[1])
            } else if (input.length > 2){
                return new Todo().delete(input[1], tagHobby)
            }
        } else if (input[0] == 'complete') {
            return new Todo().complete(input[1])
        } else if (input[0] == 'uncomplete') {
            return new Todo().uncomplete(input[1])
        } else if (input[0] == 'tag') {
            return new Todo().tag(input.slice(1))
        } else if (input[0] == 'filter') {
            return new Todo().filter(input.slice(1))
        } else {
            return TodoView.help()
        }
    }
    list(input) {
        let data = TodoModel.findAll()
        if (input) {
            if (input[0] == 'outstanding') {
                data = this.outstanding(input, data)
            } else if (input[0] == 'completed') {
                data = this.completed(input, data)
            } else {
                return TodoView.help()
            }
            return TodoView.list(data)
        } else {
            return TodoView.list(data)
        }
    }
    outstanding(input, data) {
        if (input[1] == 'asc') {
            data = data.sort(function (a, b) {
                return new Date(b.createdAt) + new Date(a.createdAt);
            });
        } else if (input[1] == 'desc') {
            data = data.sort(function (a, b) {
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
        } else {
            return TodoView.help()
        }
        return data
    }
    completed(input, data) {
        data = data.filter(e => {
            return e.complete == true
        })
        if (input[1] == 'asc') {
            data = data.sort(function (a, b) {
                return new Date(b.updatedAt) + new Date(a.updatedAt);
            });
        } else if (input[1] == 'desc') {
            data = data.sort(function (a, b) {
                return new Date(b.updatedAt) - new Date(a.updatedAt);
            });
        } else {
            return TodoView.help()
        }
        return data
    }
    tag(input) {
        if (input[0]) {
            TodoModel.update([input[0], 'tag', input.slice(1)])
        }
        return this.list()
    }
    filter(input) {
        let data = TodoModel.findAll()
        data = data.filter(e => {
            let f = null
            f = e.tags.filter(g => {
                return g == input[0]
            })
            if (f[0]) {
                return true
            }
            return false
        })
        return TodoView.list(data)
    }
    add(content) {
        if (content) {
            TodoModel.add(content)
        }
        return this.list()
    }
    findById(id) {
        let data = null
        if (id) {
            data = TodoModel.findById(id)
        }
        return TodoView.list(data)
    }
    delete(id, tagHobby) {
        if (!tagHobby) {
            TodoModel.delete(id)
        } else if (tagHobby) {
            console.log('ini id-->'+ id, 'ini tag-->' +tagHobby)
            TodoModel.deleteTag(id, tagHobby)
        }
        return this.list()
    }
    complete(id) {
        if (id) {
            TodoModel.update([id, 'complete', true])
        }
        return this.list()
    }
    uncomplete(id) {
        if (id) {
            TodoModel.update([id, 'complete', false])
        }
        return this.list()
    }
}

module.exports = Todo