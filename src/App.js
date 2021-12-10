import { useState } from 'react'
import './App.css'
import Images from './Images'
import { shuffle } from 'lodash'

function App() {
  const [cards, setCards] = useState(shuffle([...Images, ...Images]))
  const [activeCards, setActiveCards] = useState([])
  const [won, setWon] = useState(false)
  const [foundMatches, setFoundMatches] = useState([])
  const [clicks, setClicks] = useState(0)

  function flipCard(index) {
    if (won) {
      setCards(shuffle([...Images, ...Images]))
      setFoundMatches([])
      setWon(false)
      setClicks(0)
    }
    if (activeCards.length === 0) {
      setActiveCards([index])
    }
    if (activeCards.length === 1) {
      const firstIndex = activeCards[0]
      const secondIndex = index
      if (cards[firstIndex] === cards[secondIndex]) {
        if (foundMatches.length + 2 === cards.length) {
          setWon(true)
        }
        setFoundMatches([...foundMatches, firstIndex, secondIndex])
      }
      setActiveCards([...activeCards, index])
    }
    if (activeCards.length === 2) {
      setActiveCards([])
    }
    setClicks(clicks + 1)
  }
  return (
    <div>
      <h1>Memes Match</h1>
      <div className='container'>
        {cards.map((card, index) => {
          const flippedToFront =
            activeCards.indexOf(index) !== -1 ||
            foundMatches.indexOf(index) !== -1
          return (
            <div
              className={'card-outer ' + (flippedToFront ? 'flipped' : '')}
              onClick={() => flipCard(index)}
            >
              <div className='card'>
                <div className='front'>
                  <img src={card} alt='' />
                </div>
                <div className='back' />
              </div>
            </div>
          )
        })}
      </div>
      <div className='score'>
        {won && <h3>You Won the game, Congratulations!</h3>}
        <br />
        Clicks : {clicks} &nbsp; &nbsp; You found : {foundMatches.length / 2}{' '}
        pairs
      </div>
    </div>
  )
}

export default App
