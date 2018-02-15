const fs = require('fs')

class DataProcess {
  constructor(input) {
    this.argv = input
  }

  readDataJSON(callback) {
    fs.readFile('./data.json', 'utf-8', function (err, data) {
        if (err) {
          console.log(err);
        } else {
          callback(null, data)
        }
    })
  }

  deleteDataJSON(id, callback) {
    // console.log(id);
    this.readDataJSON(function(err,data){
      let array = JSON.parse(data)
      let deletedData = array[id-1]
      // console.log(deletedData);

      array.splice(id-1,1)
      let jsonData = JSON.stringify(array)

      fs.writeFile('./data.json', jsonData, 'utf-8', function(err) {
        if (err) {
          console.log(err);
        } else {
          callback(deletedData)
        }
      })

    })
  }

  addDataJSON(message, callback) {
    let messageParsed ={task: message}
    // console.log(messageParsed);
    this.readDataJSON(function(err, data){
      let array = JSON.parse(data)
      array.push(messageParsed)
      for (let i = 0; i < array.length; i++) {
        if(array[i].check === undefined) {
          array[i].check = ' '
        }
        if (array[i].created === undefined) {
          array[i].created = new Date()
        }
      }
      let jsonData = JSON.stringify(array)

      fs.writeFile('./data.json', jsonData, 'utf-8', function(err) {
        if (err) {
          console.log(err);
        } else {
          // console.log('message saved');
          callback()
        }
      })
    })
  }

  completeDataJSON(id, callback) {
    this.readDataJSON(function(err, data){
      let array = JSON.parse(data)
      for (let i = 0; i < array.length; i++) {
        // if(array[i].check === undefined) {
        //   array[i].check = ' '
        // }
        if(array[i].completedDate === undefined) {
          array[i].completedDate = ''
        }
        if (id-1 === i) {
          array[i].check = 'X'
          array[i].completedDate = new Date()
        }
      }
      let jsonData = JSON.stringify(array)

      fs.writeFile('./data.json', jsonData, 'utf-8', function(err) {
        if (err) {
          console.log(err);
        } else {
          // console.log(array);
          callback(err, array)
        }
      })
    })
  }

  uncompleteDataJSON(id, callback) {
    this.readDataJSON(function(err, data){
      let array = JSON.parse(data)
      for (let i = 0; i < array.length; i++) {
        if(array[i].completedDate !== undefined) {
          array[i].completedDate = ''
        }
        // if(array[i].check === undefined) {
        //   array[i].check = ' '
        // }
        if (id-1 === i) {
          array[i].check = ' '
        }
      }
      let jsonData = JSON.stringify(array)

      fs.writeFile('./data.json', jsonData, 'utf-8', function(err) {
        if (err) {
          console.log(err);
        } else {
          // console.log(array);
          callback(err, array)
        }
      })
    })
  }

  tagDataJSON(argv, callback) {
    this.readDataJSON(function(err, data){
      let id = argv[3]
      let tags = argv.slice(4)
      // console.log(id, tags);
      let array = JSON.parse(data)
      for (let i = 0; i < array.length; i++) {
        if(array[i].tag === undefined) {
          array[i].tag = []
        }
        if (id-1 === i) {
          array[i].tag = tags
        }
      }
      let jsonData = JSON.stringify(array)

      fs.writeFile('./data.json', jsonData, 'utf-8', function(err) {
        if (err) {
          console.log(err);
        } else {
          callback(err, array)
        }
      })

    })
  }

}

module.exports = {
  DataProcess : DataProcess
}
