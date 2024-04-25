import Dock from '../component/Dock.jsx'

const Home = () => {

    return (
        <main className={'home'}>
            <div className="logo">
                <h1 className={'logoH1'}> Realm </h1>
                <h2 className={'logoH2'}> Unity</h2>
            </div>
            <div className="searchBar"></div>

            <Dock />
        </main>
)
}

export default Home