
const loaderService = require('../Service/loaderService');
const currencyRepository = require('../Repository/currencyRepository');

class actionParse { // extends Action {

    run() {
        const repo = new currencyRepository();
        return loaderService.runAll()
            .then(data => {
                return repo.setData(data);
            })
            .catch(err => {
                console.log(err);
                return 'Set data to storage error';
            });
    }
}

module.exports = actionParse;