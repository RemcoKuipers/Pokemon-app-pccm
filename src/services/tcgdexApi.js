import axios from 'axios'

const BASE_URL = "https://api.tcgdex.net/v2/en";

export async function getCards() {
    try {
        const response = await axios.get(`${BASE_URL}/cards`);
        return response.data;
    } catch (error) {
        console.error("Error getting cards", error);
        throw error;
    }
}