import { useState } from 'react'
import './App.css'
import Images from './Images'
import { shuffle } from 'lodash'

function App() {
  const [cards, setCards] = useState(shuffle([...Images, ...Images]))
  const [activeCards, setActiveCards] = useState([])
  const [foundMatches, setFoundMatches] = useState([])

  function flipCard(index) {
    if (activeCards.length === 0) {
      setActiveCards([index])
    }
    if (activeCards.length === 1) {
      const firstIndex = activeCards[0]
      const secondIndex = index
      if (cards[firstIndex] === cards[secondIndex]) {
        setFoundMatches([...foundMatches, firstIndex, secondIndex])
      }
      setActiveCards([...activeCards, index])
    }
    if (activeCards.length === 2) {
      setActiveCards([])
    }
  }
  return (
    <div>
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
    </div>
  )
}

export default App
