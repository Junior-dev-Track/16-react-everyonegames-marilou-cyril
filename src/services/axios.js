import  axios from 'axios';

export class ApiClient {
    constructor(apiUrl, apiKey) {
        this.apiUrl = apiUrl;
        this.apiKey = apiKey;
    }

    test() {
        console.log('test');
    }

    async get(search, details = '') {
        try {
            const apiLogin = `key=${this.apiKey}`;
            const details = details ? `&${details}`: '';
            const apiRequest = this.apiUrl + search + '?' + details + apiLogin
            console.log(apiRequest)
            const response = await axios.get(apiRequest);
            // console.log(response.data);
                return response.data;
        } catch (error) {
            if (error.response) {
                throw new Error(`HTTP error: ${error.response.status} - ${error.response.statusText}`);
            } else if (error.request) {
                throw new Error(`No response received: ${error.request}`);
            } else {
                throw new Error(`Error making request: ${error.message}`);
            }
        }
    }
}

export default ApiClient;
