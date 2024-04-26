import { v4 as UUID } from 'react-uuid';
import  Dock from '../component/Dock.jsx'
import Header from "../component/Header.jsx";
import xTimeAgo from "../services/dateManagement.js";
import  ApiClient from "../services/axios.js";
import {useEffect, useState} from "react";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

const request = new ApiClient(apiUrl, apiKey);

// let games = await request.get(`games`)
const { count, next, previous, results } = await request.get(`games`, 'dates=2024-03-25,2024-04-25')

// Générer un index aléatoire entre 0 et la longueur du tableau - 1
const randomIndex = Math.floor(Math.random() * results.length);

// Accéder à l'élément aléatoire à partir du tableau en utilisant l'index généré
const randomResult = results[5];


// Utiliser l'élément aléatoire



// const sensitivities = [
//     25, - 30, 10
// ];





const Home = () => {

    const [isClicked, setIsClick] = useState(false)


    const handleClick = () => {
        setIsClick(true); // Utilisation d'une fonction de mise à jour
        alert('salut');

        // Utilisation de setTimeout pour revenir à false après 1 seconde
        setTimeout(() => {
            setIsClick(false); // Utilisation d'une fonction de mise à jour
        }, 1000);
    };


   //
   // useEffect(() => {
   //
   //
   //     console.log('salut')
   //
   //     const  homeBackground = document.querySelector('.homeBackground')
   //          homeBackground.addEventListener("oncki", () => {
   //     });
   //
   // },[])

    return (
        <>
            {console.log(randomResult)}

            <main className={'home'}>

                <div className="homeBackground" onClick={handleClick}
                     style={{backgroundImage: `url(${randomResult.background_image})`}}>

                    {/*<img src={randomResult.background_image} alt="" className="homeBackground"/>*/}

                    <div className="backgroundFilter" />



                </div>
                <div className="homeContent">
                    <Header/>

                    <div className="homeDetails">
                        <h2 className="homeTitle" >{randomResult.name}</h2>

                        {console.log(randomResult.genres)}

                        <ul className='homeList'>
                            {
                                randomResult.genres.map(genre => (
                                    <li key={crypto.randomUUID()}>{genre.name}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <Dock/>
                </div>
            </main>
        </>
    )
}

export default Home