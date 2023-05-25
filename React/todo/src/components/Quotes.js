import React,{useState, useEffect} from 'react'

function Quotes() {

    const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        const randomIndex = Math.floor(Math.random() * data.length)
        const randomQuote = data[randomIndex]
        setQuote(randomQuote);
    })
  },[])


  return (
    <div>
        <h1>{quote.text}</h1>
        <p>{quote.author}</p>
    </div>
  )
}

export default Quotes