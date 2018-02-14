let startToDo = process.argv
let start = true

console.log(startToDo);

switch(startToDo[2]) {
  case '': console.log('will can help'); break;
  // console.log('Menampilkan command apa saja yang tersedia'); break;
  case 'help': help(); break;
  case 'list': list(); break;
  case 'add': console.log('Menambahkan TODO ke dalam list'); break;
  case 'findById': console.log('Melihat detail TODO sesuai <task_id>nya'); break;
  case 'delete': console.log('Menghapus TODO sesuai <task_id>nya'); break;
  case 'complete': console.log('Menandai status TODO selesai'); break;
  case 'uncomplete': console.log('Menandai status TODO belum selesai'); break;
  default: console.log('tidak ada mode itu');
}

function help() {
  let arrComamand = ['','help','list','add <task_content>','findById <task_id>','delete <task_id>','complete <task_id>','uncomplete <task_id>']
  for(let i=0; i<arrComamand.length; i++) {
    console.log(`node todo.js ${arrComamand[i]}`);
  }
}

function list() {
  let fs = require('fs');
  let obj = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
  for(let i=0; i<obj.length; i++) {
    console.log(`${obj[i].id}. ${obj[i].task}`);
  }
}
