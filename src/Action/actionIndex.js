var storageService = require('../Service/storageService');

class actionIndex { // extends Action {

    async run() {
       return await storageService.select();
    }
}

module.exports = actionIndex;