import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";

export const Header = () => {

  return (
      <header className='Header'>
          <Link to={'/'} className="logo">

              <h1 className={'logoH1'}> Realm </h1>
              <h2 className={'logoH2'}> Unity</h2>
          </Link>

          <SearchBar/>
      </header>
  );
}

export default Header