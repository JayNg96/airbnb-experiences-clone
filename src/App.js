import { Header } from './components/Header';
// import { Footer } from './components/Footer';
import { PageContent } from './components/PageContent';
import { Card } from './components/Card'
import { cardsData } from './cardsData'
import './index.css';


function App() {
    const cardElement = cardsData.map(card => {
        return (
            <Card 
                key = {card.id}
                title = {card.title}
                coverImg = {card.coverImg}
                rating = {card.stats.rating}
                reviewCount = {card.stats.reviewCount}
                country = {card.country}
                price = {card.price}
                openSpots = {card.openSpots}
                location = {card.location}
            />
        )
    })

    return (
        <div>
            <Header/>
            <PageContent/>
            <section className="cards">
                { cardElement }
            </section>
        </div>
    )
}

export default App;
