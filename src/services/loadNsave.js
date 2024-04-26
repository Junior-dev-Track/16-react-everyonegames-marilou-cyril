// Charger les rappels depuis le stockage local au chargement de l'application
const loadFromLocalStorage = (itemName) => {
    const itemJSON = localStorage.getItem(itemName);
    return itemJSON ? JSON.parse(itemJSON) : [];
};




// Fonction pour enregistrer les rappels dans le stockage local
const saveToLocalStorage = (itemName, item) => {
    localStorage.setItem(itemName, JSON.stringify(item));
};

const test = (txt) => {
    console.log(txt);
};

export { loadFromLocalStorage, saveToLocalStorage, test };
