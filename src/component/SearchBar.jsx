import ApiClient from "../services/axios.js";
import {useEffect, useState} from "react";



const SearchBar = () => {

    /*

    chat GPT

    Filtrage : Si vous avez besoin de filtrer les objets en fonction de certains critères, vous pouvez utiliser la méthode filter(). Par exemple, si vous voulez filtrer les jeux avec une année de début spécifiée :
        const gamesWithYear = games.filter(game => game.year_start !== null);

    Recherche : Si vous voulez trouver un objet spécifique dans le tableau en fonction de certaines conditions, vous pouvez utiliser la méthode find(). Par exemple, si vous voulez trouver le jeu avec l'ID 4 :
        const gameWithId4 = games.find(game => game.id === 4);

    */
    const [isActive, setIsActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);



    useEffect(() => {

    }, [isActive]);

    const handleFocus = () => {
        setIsActive(!isActive)
        setSearchResults([])
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('search')
        setIsActive(true)
        console.log(searchValue)

        const details = `search=name=${searchValue}`
        const apiKey = import.meta.env.VITE_API_KEY;
        const apiUrl = import.meta.env.VITE_API_URL;
        const request = new ApiClient(apiUrl, apiKey);
        console.log(details)
        const { count, next, previous, results } = await request.getPage('games', details,1);

        console.log(count)
        console.log(next)
        console.log(previous)
        console.log(results)

        setSearchResults(results)
        setSearchValue('')
    }
    const handleChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }



    return (
        <>
            <form className="searchBar" onSubmit={(event) => handleSubmit(event)}>
                <input type='text' placeholder='Recherche' onFocus={handleFocus} onBlur={handleFocus} onChange={handleChange} value={searchValue} className='searchBarInput'/>
                <button type='submit' className='button submit'>Search</button>
            </form>
            <div className={`searchMode ${isActive ? '' : 'unvisible'}`}>
                <ul>
                    {searchResults.length > 0 ? (
                        searchResults.map((game) => (
                            <li key={crypto.randomUUID()}>{game.name}</li>
                        //     le li devrais renvoyer vers un lien qui donne l'id du jeu et ses données pours les afficher.
                        ))
                    ) : (
                        <li></li>
                    )}
                </ul>

            </div>
        </>
    )
}

export default SearchBar