import { useEffect, useState } from "react";
import Dock from '../component/Dock.jsx';
import Header from "../component/Header.jsx";

const Home = ({ list }) => {
    const [gameList, setGameList] = useState([]);
    const [randomResult, setRandomResult] = useState({});


    useEffect(() => {

        if (list && list.length > 0) {
            setGameList(list);
            console.log(list)
            const randomIndex = Math.floor(Math.random() * list.length);
            setRandomResult(list[randomIndex]);
        }

    }, [list]);


    return (
        <>
            <main className="page home">
                <div className="homeBackground" style={{backgroundImage: `url(${randomResult.background_image})`}}>
                    <div className="backgroundFilter" />
                </div>
                <div className="homeContent">
                    <Header />
                    <div className="homeDetails">
                        {/* Ajout d'une vérification pour s'assurer que randomResult est défini */}
                        {randomResult && (
                            <>
                                <h2 className="homeTitle">{randomResult.name}</h2>
                                <ul className='homeList'>
                                    {/* Utilisation de map() seulement si randomResult.genres est un tableau */}
                                    {randomResult.genres && randomResult.genres.map(genre => (
                                        <li key={crypto.randomUUID()}>{genre.name}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                    <Dock />
                </div>
            </main>
        </>
    );
};

export default Home;
