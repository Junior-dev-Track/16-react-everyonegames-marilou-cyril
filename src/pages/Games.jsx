import {useEffect, useState} from "react";
import {loadData} from "../services/loadNsave.js";





const Games = ({list, setlist}) => {


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


