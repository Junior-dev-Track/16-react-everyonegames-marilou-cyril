import React, { useEffect, useState } from "react";
import Dock from '../component/Dock.jsx';
import Header from "../component/Header.jsx";
// Importations retirées car non utilisées dans ce composant
import { loadData } from "../services/loadNsave.js";

const Home = ({ list }) => {
    const [gameList, setGameList] = useState([]);
    const [randomResult, setRandomResult] = useState({});


    useEffect(() => {
        localStorage.clear();
        const loadedData = async () => {
            await loadData(gameList, setGameList, 'games')
        }

        loadedData()
        const randomIndex = Math.floor(Math.random() * list.length);
        setRandomResult(list[randomIndex]);
    }, []);


    return (
        <>
            <main className="home">
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
                                        <li key={genre.id}>{genre.name}</li>
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
