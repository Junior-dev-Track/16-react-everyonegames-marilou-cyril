// PlugIn
import { Routes, Route } from 'react-router-dom';
import {useEffect, useState} from "react";
// Components
import Home from './pages/Home.jsx';
import Games from './pages/Games.jsx';
import ErrorPage from "./pages/ErrorPage.jsx";
// Services
import {loadData} from "./services/loadSystem.js";



const App = () => {
    console.log('app')

    const [gameList, setGameList] = useState()


    useEffect(() => {
        const loadedData = async () => {
            await loadData(gameList, setGameList, 'games')
        }

        loadedData()
    }, []);

    console.log(gameList)

    return (
        <Routes>
            <Route path="/" element={<Home list={gameList} />} />
            <Route path="/games" element={<Games list={gameList} />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default App;