import { useState, useEffect} from "react";
import { getCards} from "../../services/tcgdexApi.js";
import CardItem from "../../components/Cards/CardItem.jsx";

function Search() {

    const [searchTerm, setSearchTerm] = useState("");
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilterdCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCards() {
            try {
                const data = await getCards();
                setCards(data);
                setFilterdCards(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCards();
    }, []);

    useEffect(() => {
        const results = cards.filter((card) => card.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilterdCards(results);
    }, [searchTerm, cards]);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Search</h1>

            <input
                type="text"
                placeholder="Zoek een Pokémon kaart..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div>
                {filteredCards.map((card) => (
                    <CardItem key={card.id} card={card} />
                ))}
            </div>
        </div>
    )
}

export default Search;