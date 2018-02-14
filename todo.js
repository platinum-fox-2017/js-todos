const model = require('./model.js');
const view = require('./view.js');

var argv = process.argv;
switch(argv[2]){
  case 'help': model.modelHelper(view.viewHelper);break;
  case 'list': model.modelList(view.viewList);break;
  case 'add': model.modelAddList(view.viewAddList);break;
  case 'findById': model.modelFindId(view.viewFindId);break;
  case 'delete': model.modelDataDelete(view.viewDataDelete);break;
  case 'complete': model.modelFinished(view.viewFinished);break;
  case 'uncomplete': model.modelUnfinished(view.viewUnfinished);break;
  default: console.log('Masukkan perintah yang benar');
}
