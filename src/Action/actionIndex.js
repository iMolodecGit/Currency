const currencyRepository = require('../Repository/currencyRepository');

class actionIndex { // extends Action {

    run() {
        const repo = new currencyRepository;
        return repo.getData()
            .catch(err => {
                console.log(err);
                return 'Get data from storage error';
            });
    }
}

module.exports = actionIndex;