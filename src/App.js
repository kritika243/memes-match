import { useState } from 'react'
import './App.css'
import Images from './Images'

function App() {
  const [cards, setCards] = useState([...Images, ...Images])
  return (
    <div>
      <div className='container'>
        {cards.map((card, index) => {
          return (
            <div className='card-outer'>
              <div className='card'>
                <div className='front'>
                  <img src={card} alt='' />
                </div>
                <div className='back'></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
