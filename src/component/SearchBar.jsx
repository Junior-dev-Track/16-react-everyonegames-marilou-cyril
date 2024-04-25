const SearchBar = () => {

    /*

    chat GPT

    Filtrage : Si vous avez besoin de filtrer les objets en fonction de certains critères, vous pouvez utiliser la méthode filter(). Par exemple, si vous voulez filtrer les jeux avec une année de début spécifiée :
        const gamesWithYear = games.filter(game => game.year_start !== null);

    Recherche : Si vous voulez trouver un objet spécifique dans le tableau en fonction de certaines conditions, vous pouvez utiliser la méthode find(). Par exemple, si vous voulez trouver le jeu avec l'ID 4 :
        const gameWithId4 = games.find(game => game.id === 4);

    */


    return (
        <div className="searchBar">
            <input type='text'  placeholder='Recherche' className='searchBarInput' />
            <button type='submit'className='button submit'>Search</button>
        </div>
    )
}

export default SearchBar