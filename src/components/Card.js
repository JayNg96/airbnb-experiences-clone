export function Card(props) {
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT!"
    }
    else if(props.location === "Online"){
        badgeText = "ONLINE"
    }

    return (
        <div id="cards-section">
            { badgeText && <div className="card-badge">{badgeText}</div> }
            <img className="cards-image" src={`./images/${props.coverImg}`} alt="card"/>
            <div className="cards-rating">
                <img className="cards-star-icon" src="./images/star.png" alt="star"/>
                <p><span>{props.rating}</span></p>
                <p><span className="grey-text">({props.reviewCount}) • </span></p>
                <p><span className="grey-text">{props.country}</span></p>
            </div>
            <p>{props.title}</p>
            <p><span className="bold-text">From ${props.price} </span>/ person</p>
        </div>
    )
}