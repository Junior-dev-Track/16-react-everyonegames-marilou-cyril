import SearchBar from "./SearchBar.jsx";

export const Header = () => {

  return (
      <header className='Header'>
          <div className="logo">
              <h1 className={'logoH1'}> Realm </h1>
              <h2 className={'logoH2'}> Unity</h2>
          </div>
            <SearchBar/>
      </header>
  );
}

export default Header