import {Link} from "react-router-dom";

function CardItem({card}) {
    return (
        <div>
            <Link to={`/card/${card.id}`}>
                <img src={card.image + "/low.png"} alt={card.name} />
                <p>{card.name}</p>
            </Link>
        </div>
    );
}

export default CardItem;