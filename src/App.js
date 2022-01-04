import { useEffect, useState } from 'react';
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
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
  
      setCards(shuffledCards)
      setTurns(0)
  }

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {

      if (choiceOne.src === choiceTwo.src) {
        console.log('those cards match')
        resetTurn()
      } else {
        console.log('those cards do not match')
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])

  // reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
