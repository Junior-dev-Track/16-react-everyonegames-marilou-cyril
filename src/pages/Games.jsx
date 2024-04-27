import { v4 as UUID } from 'react-uuid';
import  Dock from '../component/Dock.jsx'
import Header from "../component/Header.jsx";
import xTimeAgo from "../services/dateManagement.js";
import  ApiClient from "../services/axios.js";
import React from "react";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

const request = new ApiClient(apiUrl, apiKey);

// let games = await request.get(`games`)
const { count, next, previous, results } = await request.get(`games`, 'dates=2024-03-25,2024-04-25')

const Games = () => {
    return (
        <main className="page games">
            <Header />
                <h1 className='title1'>Games</h1>
                <div className="gameCards">
                    {
                        results.map(game => (
                            <div key={crypto.randomUUID()} className="gameCardItem">
                                <img  className="gameImg" src={`${game.background_image}`} alt={`${UUID}`}/>
                                <h3 className="title3">${game.name}</h3>
                            </div>
                        ))
                    }
                </div>
            <Dock />
        </main>
    );
}

export default Games;