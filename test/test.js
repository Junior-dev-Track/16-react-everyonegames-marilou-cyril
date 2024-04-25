import axios from "axios";



async function get() {
    try {
        const response = await axios.get('https://api.rawg.io/api/games?key=$7ab00cfa8eb94750873da50b5b7617ec');
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