export function Card(props) {
    let badgeText
    if(props.card.openSpots === 0){
        badgeText = "SOLD OUT!"
    }
    else if(props.card.location === "Online"){
        badgeText = "ONLINE"
    }

    return (
        <div id="cards-section">
            { badgeText && <div className="card-badge">{badgeText}</div> }
            <img className="cards-image" src={`./images/${props.card.coverImg}`} alt="card"/>
            <div className="cards-rating">
                <img className="cards-star-icon" src="./images/star.png" alt="star"/>
                <p><span>{props.card.stats.rating}</span></p>
                <p><span className="grey-text">({props.card.stats.reviewCount}) • </span></p>
                <p><span className="grey-text">{props.card.country}</span></p>
            </div>
            <p>{props.card.title}</p>
            <p><span className="bold-text">From ${props.card.price} </span>/ person</p>
        </div>
    )
}