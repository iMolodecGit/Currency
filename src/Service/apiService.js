const axios = require('axios');

class ApiService {

    get(url, query, headers) {
        return axios.get(url, {
            params: query,
            headers: headers
        }).catch((err) => {
            console.log('API call error:', err.message);
        });
    }

    parse () {
        throw new Error('You should implement `parse` method !!!');
    }
}

module.exports = ApiService;