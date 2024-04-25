const SearchBar = () => {

    return (
        <div className="searchBar">
            <input type='text'  placeholder='Recherche' className='searchBarInput' />
            <button type='submit'className='button submit'>Search</button>
        </div>
    )
}

export default SearchBar