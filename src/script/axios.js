import  axios from 'axios';
import  dotenv from 'dotenv';
        dotenv.config();


export class ApiClient {
    constructor(apiUrl = process.env.API_URL, apiKey = process.env.API_KEY) {
        this.apiUrl = apiUrl;
        this.apiKey = apiKey;
    }

    test() {
        console.log('test')
    }

    async get(search) {
        try {
            const apiLogin = `?key=${this.apiKey}`;

            const response = await axios.get(this.apiUrl + search + apiLogin);

            console.log(response.data);

            return response.data
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

export default ApiClient
