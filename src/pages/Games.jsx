import  Dock from '../component/Dock.jsx'
import Header from "../component/Header.jsx";
import xTimeAgo from "../services/dateManagement.js";
import {useEffect, useState} from "react";
import {loadFromLocalStorage, saveToLocalStorage} from "../services/loadNsave.js";


import  ApiClient from "../services/axios.js";



const Games = () => {

    // const[isClicked, setIsClick] = useState()
    const [gameList, setGameList] = useState(loadFromLocalStorage())


    useEffect(() => {

        const loadData = async () => {

            const storedGameList = loadFromLocalStorage('gameList')
            if (storedGameList && storedGameList.length > 0) {

                console.log('storedGameList')
                console.log(storedGameList)


                setGameList(gameList)

            }   else {
                const apiKey = import.meta.env.VITE_API_KEY;
                const apiUrl = import.meta.env.VITE_API_URL;
                const request = new ApiClient(apiUrl, apiKey);
                const { count, next, previous, results } = await request.get(`games`)

                console.log('games')
                console.log(results)

                setGameList(results)
            }
        }

        loadData()
    },[])




    return (
        <div className={'games'}>
            <h1 className='title1'>Games</h1>
            <div className="gameCards">
                {
                    console.log(gameList)
                }
            </div>
        </div>
    );
}

export default Games;


