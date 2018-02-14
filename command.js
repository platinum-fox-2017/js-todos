let data =['$ node todo.js',
          '$ node todo.js help',
          '$ node todo.js list',
          '$ node todo.js add <task_content>',
          '$ node todo.js findById <task_id>',
          '$ node todo.js delete <task_id>',
          '$ node todo.js complete <task_id>',
          'node todo.js uncomplete <task_id>'
        ]

for(let i=0;i<data.length;i++){
  console.log(data[i]);
}
