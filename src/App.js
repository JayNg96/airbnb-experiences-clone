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
                card = {card}
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
