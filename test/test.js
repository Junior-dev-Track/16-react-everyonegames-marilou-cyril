import ApiClient from '../src/script/axios.js';
import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });


// Instanciation de l'ApiClient
const request = new ApiClient();
const search = 'platforms';

// Requete
request.get(search)