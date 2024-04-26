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
const randomResult = results[5];


// Utiliser l'élément aléatoire


/*
const sensitivities = [
    25, - 30, 10
];

    let homeBackground = document.querySelector('.homeBackground')
    homeBackground.addEventListener("mousemove", e =>{
        setTimeout(() =>{
            const x = e.clientX;
            const y = e.clientY;
            const w = homeBackground.offsetWidth /2;
            const h = homeBackground.offsetHeight /2;
            let convertX = ((x - w) * sensitivities[i]) /w;
            let convertY = ((y - h) * sensitivities[i]) /h;
        
            images[i].style.transform = `
            translateX(${convertX}px)
            translateY(calc(-50% - ${convertYp}x))`;
        }, 200);
       
    });
*/



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