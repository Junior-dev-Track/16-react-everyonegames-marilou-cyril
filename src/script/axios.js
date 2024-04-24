const axios = require('axios');

axios.get('https://api.example.com/data')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
    });
