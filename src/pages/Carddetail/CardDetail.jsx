import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getCardById} from "../../services/tcgdexApi.js";

function CardDetail() {
    const {id} = useParams();

    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCard() {
            try {
                const data = await getCardById(id);
                setCard(data);
            } catch (err) {
                setError("could not find card");
            } finally {
                setLoading(false);
            }
        }

        fetchCard();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>{card.name}</h1>
            <img src={card.image + "/high.png"} alt={card.name}/>
        </div>
    );
}

export default CardDetail;