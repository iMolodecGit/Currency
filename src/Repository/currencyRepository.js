let storageService = require('./../Service/storageService');

class currencyRepository {
    
    async getData() {
        return await storageService.select();
    }

    async setData(data) {
        return await storageService.update(data);
    }
}

module.exports = currencyRepository;
