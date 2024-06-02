import { useState } from 'react'

import './App.css'

function App() {

  const [randomQuote, setRandomQuote] = useState("Quotes")

  const quotes = ["quote 1","quote 2","quote 3","quote 4","quote 5","quote 6"]
  
  function handleRandomQuotes() {
    
    const randomIndex = Math.floor( Math.random()  * quotes.length  )

    setRandomQuote(quotes[randomIndex])

  }

  return (
    <>
      <h1>RAndom Quote Generator</h1>

      <h2>{randomQuote}</h2>

      <button onClick={handleRandomQuotes}>Generate Quote</button>
    </>
    
  )
}

export default App
