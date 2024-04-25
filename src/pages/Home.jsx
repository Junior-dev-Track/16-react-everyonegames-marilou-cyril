import  Dock from '../component/Dock.jsx'
import Header from "../component/Header.jsx";
import xTimeAgo from "../services/dateManagement.js";
import  ApiClient from "../services/axios.js";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

const request = new ApiClient(apiUrl, apiKey);

// let games = await request.get(`games`)
const { count, next, previous, results } = await request.get(`games`, 'dates=2024-03-25,2024-04-25')


// Générer un index aléatoire entre 0 et la longueur du tableau - 1
const randomIndex = Math.floor(Math.random() * results.length);

// Accéder à l'élément aléatoire à partir du tableau en utilisant l'index généré
const randomResult = results[randomIndex];


// Utiliser l'élément aléatoire





const Home = () => {

    return (
        <>
            {console.log(randomResult)}

            <main className={'home'}>

                <div className="homeBackground" style={{ backgroundImage: `url(${randomResult.background_image})` }}>
                    <div className="backgroundFilter">
                    </div>
                </div>
                <div className="homeContent">
                <Header/>

                    <div className="homeDetails">
                        <h2 className="homeTitle">{randomResult.name}</h2>

                        {console.log(randomResult.genres)}

                        <ul className='homeList'>
                            {
                                randomResult.genres.map(genre => (
                                    // mettre UUID
                                    <li key={genre.id}>{genre.name}</li>
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