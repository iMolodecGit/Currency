const currencyEntity = require('../Entity/currencyEntity');
const apiService = require('./apiService');

class coinMarketApiService extends apiService {

    constructor() {
        super();
    }

    async parse () {
        let url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        qs = {
            'start': '1',
            'limit': '10',
            'convert': 'USD'
        },
        headers= {
            'X-CMC_PRO_API_KEY': '383ff0a2-ee1a-4fff-87ca-15d4b186f3c9'
        };

        let ret = [];
        
        try {
            let response = await this.get(url, qs, headers);
            let responseData = response.data;
            let currencyData = responseData.data;
            currencyData.forEach((item) => {
                item.rate = item.quote["USD"] ? item.quote["USD"].price : null;
                ret.push(new currencyEntity(item));
            });
        } catch (err) {
            console.log('API call error:', err.message);
        }
        return ret; 
    }
}

module.exports = new coinMarketApiService();