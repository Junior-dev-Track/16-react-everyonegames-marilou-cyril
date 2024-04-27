// Charger les rappels depuis le stockage local au chargement de l'application
import ApiClient from "./axios.js";

const loadFromLocalStorage = (itemName) => {
    const itemJSON = localStorage.getItem(itemName);
    return itemJSON ? JSON.parse(itemJSON) : [];
};

// Fonction pour enregistrer les rappels dans le stockage local
const saveToLocalStorage = (itemName, item) => {
    localStorage.setItem(itemName, JSON.stringify(item));
};

// Fonction pour charger les données depuis le stockage local ou l'API
const loadData = async (list, setList, search, details='') => {
    console.log('loading data')
    const storedList = loadFromLocalStorage(`${list}`);
    if (storedList.length >0) {
        console.log('loading from local storage')
        setList(storedList);
        console.log('loaded from local storage')
        console.log(storedList)

    } else {
        console.log('loading from API')
        const apiKey = import.meta.env.VITE_API_KEY;
        const apiUrl = import.meta.env.VITE_API_URL;
        const request = new ApiClient(apiUrl, apiKey);
        const { count, next, previous, results } = await request.get(search, details);
        console.log(count)
        console.log(next)
        console.log(previous)
        console.log(results)
        setList(results);
        saveToLocalStorage(`${list}`, results)
        console.log('loaded from API')
    }
}

export { loadFromLocalStorage, saveToLocalStorage, loadData};
