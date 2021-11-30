import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    setLoading(true)
    try {
      await fetch(url)
        .then(res => res.json())
        .then(result => {
          setTours(result)
          setLoading(false)
          console.log(result)
        });
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }
  
  useEffect(() => {
    getTours()
  }, [])

  if(loading){
    return (
      <main>
        <Loading />
       </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
