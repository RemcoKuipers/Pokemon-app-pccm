import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getCardById} from "../../services/tcgdexApi.js";
import { useNavigate } from "react-router-dom";

function CardDetail() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCard() {
            try {
                const data = await getCardById(id);
                setCard(data);
            } catch (err) {
                setError("could not load card");
            } finally {
                setLoading(false);
            }
        }

        fetchCard();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!card) return <p>No Card Found</p>;

    return (
        <div>
            <h1>{card.name}</h1>

            {card.image ? (
                <img src={card.image + "/high.png"} alt={card.name} />
            ) : (
                <p>No image available</p>
            )}

            <p><strong>Set:</strong> {card.set?.name}</p>
            <p><strong>HP:</strong> {card.hp}</p>

            <p><strong>Types:</strong></p>
            <ul>
                {card.types?.map((type, index) => (
                    <li key={index}>{type}</li>
                ))}
            </ul>
            <button onClick={() => navigate(-1)}>
                Back
            </button>
        </div>
    );
}

export default CardDetail;