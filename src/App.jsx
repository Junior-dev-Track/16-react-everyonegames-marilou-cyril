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
    const [latestRelease, setlatestRelease] = useState()

    useEffect(() => {
        const loadedData = async () => {
            await loadData(latestRelease, setlatestRelease, 'games', 'dates=2024-03-25,2024-04-25')
        }

        loadedData()
    }, []);


    return (
        <Routes>
            <Route path="/" element={<Home list={latestRelease} />} />
            <Route path="/games" element={<Games list={latestRelease} />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default App;