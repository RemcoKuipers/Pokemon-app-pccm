import axios from 'axios'

const BASE_URL = "https://api.tcgdex.net/v2/en";

export async function getCards() {
    try {
        const response = await axios.get(`${BASE_URL}/cards`);
        return response.data;
    } catch (error) {
        console.error("Fout bij ophalen van kaarten:", error.message);
        throw error;
    }
}

export async function getCardById(id) {
    try {
        const response = await axios.get(`${BASE_URL}/cards/${id}`);
        return response.data;
    } catch (error) {
        console.error("Fout bij ophalen van kaart:", error.message);
        throw error;
    }
}