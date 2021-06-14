
var loaderService = require('../Service/loaderService');
var storageService = require('../Service/storageService');

class actionParse { // extends Action {

   async run() {
       let data = await loaderService.runAll();
       storageService.update(data);
       return data;
    }
}

module.exports = actionParse;