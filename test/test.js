import axios from "axios";

async function get() {
    try {
        const response = await axios.get('https://api.rawg.io/api/games?dates=2022-03-01,2022-03-31&key=3ccd80bcce4846a6917c760924caaa96');
        console.log(response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(`HTTP error: ${error.response.status} - ${error.response.statusText}`);
        } else if (error.request) {
            throw new Error(`No response received: ${error.request}`);
        } else {
            throw new Error(`Error making request: ${error.message}`);
        }
    }
}

await get()