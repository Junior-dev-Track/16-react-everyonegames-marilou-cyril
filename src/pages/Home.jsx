import SearchBar from "../component/SearchBar.jsx";
import Dock from '../component/Dock.jsx'


const Home = () => {

    return (
        <main className={'home'}>
            <div className="logo">
                <h1 className={'logoH1'}> Realm </h1>
                <h2 className={'logoH2'}> Unity</h2>
            </div>
            <SearchBar />
            <Dock />
        </main>
)
}

export default Home