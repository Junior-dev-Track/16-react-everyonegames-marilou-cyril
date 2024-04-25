import  SearchBar from "../component/SearchBar.jsx";
import  Dock from '../component/Dock.jsx'
// import axios from "axios";
import  ApiClient from "../services/axios.js";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

console.log(apiKey)
console.log(apiUrl)


const request = new ApiClient(apiUrl, apiKey);

const plateforms = async () => { await request.get('plateforms') }


const Home = () => {

    return (
        <main className={'home'}>

            {console.log(plateforms())}

            {
                console.log(apiKey)
            }
            {
                console.log(apiUrl)
            }

            <div className="logo">
                <h1 className={'logoH1'}> Realm </h1>
                <h2 className={'logoH2'}> Unity</h2>
            </div>
            <SearchBar />
            <Dock />
        </main>
)
}

export default Home