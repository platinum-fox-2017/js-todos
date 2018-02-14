var Model = require('./model.js')
var View = require('./view.js')



class Controler{
   constructor(argv){
     this.tampil=this.control(argv)
   }

  control(argv){

    if(argv.length<3){
      console.log('will call help')
    }
    else{
      if(argv[2]==='help'){
        require('./command.js')
      }
      else{
        switch (argv[2]) {
          case 'help':require('./command.js');break;
          case 'list':Model.list(View.list);break;
          case 'add':Model.addlist(argv[3],View.addlist);break;
          case 'findById':Model.findById(Number(argv[3]),View.findById);break;
          case 'delete':Model.hapus(Number(argv[3]),View.hapus) ;break;
          case 'complete':Model.completes(Number(argv[3]),View.completes);break;
          case 'uncomplete':Model.uncompletes(Number(argv[3]),View.uncompletes);break;
          case 'list:created':Model.created(argv[3],View.created);break;
          case 'list:complete':Model.lc(argv[3],View.lc);break;
          case 'tag':
            let arrtag=[]
            let id=argv[3]
            for(let i=4;i<argv.length;i++){
              arrtag.push(argv[i].slice(1,argv[i].length))
            }
            Model.tag(id,arrtag,View.tag);
            break;
          case 'filter':Model.filter(argv[3],View.filter);break;
          case 'list:outstanding':Model.outstanding(argv[3],View.outstanding);break;
          default: console.log('maaf kode salah')
        }
      }
    }
  }
}

module.exports=Controler
