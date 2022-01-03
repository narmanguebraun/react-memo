import { useState } from 'react';
import './App.css';

import SingleCard from './components/SingleCard'

const cardImages = [
  { "src": "/img/01.jpg" },
  { "src": "/img/02.jpg" },
  { "src": "/img/03.jpg" },
  { "src": "/img/04.jpg" },
  { "src": "/img/05.jpg" },
  { "src": "/img/06.jpg" },
  { "src": "/img/07.jpg" },
  { "src": "/img/08.jpg" },
  { "src": "/img/09.jpg" }
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
  
      setCards(shuffledCards)
      setTurns(0)
  }

  console.log(cards, turns)

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
