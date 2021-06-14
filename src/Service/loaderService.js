const coinMarketApiService = require('./coinMarketApiService');

class loaderService {

    constructor() {
        this.loaders = [];
        this.loaders.push(coinMarketApiService);
    }

    async runAll() {
        let ret = [];
        for (let index in this.loaders ) {
            let loader = this.loaders[index];
            let data = await loader.parse();
            ret = ret.concat(data);
        }
        return ret;
    }

}

module.exports = new loaderService();
