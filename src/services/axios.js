import  axios from 'axios';

export class ApiClient {
    constructor(apiUrl, apiKey) {
        this.apiUrl = apiUrl;
        this.apiKey = apiKey;
    }

    test() {
        console.log('test');
    }

    async get(search) {
        try {
            const apiLogin = `?key=${this.apiKey}`;
            const response = await axios.get(this.apiUrl + search + apiLogin);
                console.log(response.data);
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

// Récupération des variables d'environnement
// const apiKey = process.env.VITE_API_KEY;
// const apiUrl = process.env.VITE_API_URL;

// Création d'une instance de ApiClient avec les variables d'environnement
// const request = new ApiClient(apiUrl, apiKey);

// Utilisation de l'instance pour récupérer les plateformes
// const platforms = await request.get('plateforms');

export default ApiClient;
