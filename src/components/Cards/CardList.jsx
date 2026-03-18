import {useEffect, useState} from "react";
import {getCards} from "../../services/tcgdexApi.js";
import CardItem from "./CardItem.jsx";

function CardList() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCards() {
            try {
                const data = await getCards();
                setCards(data);
            } catch (err) {
                setError("Something went wrong during loading cards.");
            } finally {
                setLoading(false);
            }
        }

        fetchCards();
    }, []);

    return (
        <div>
            {cards.map((card) => (
                <CardItem key={card.id} card={card}/>
            ))}
        </div>
    );
}

export default CardList;