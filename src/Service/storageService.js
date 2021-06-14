//@todo add mysql and implement work with it
//const mysql = require('mysql');

class storageService {

    constructor() {
        this.storage = [];
    }

    select() {
        //@todo db select
        return Promise.resolve(this.storage);
    }

    update(data) {
        // @todo db update
        this.storage = data;
        return Promise.resolve(this.storage);
    }

}

module.exports = new storageService();
