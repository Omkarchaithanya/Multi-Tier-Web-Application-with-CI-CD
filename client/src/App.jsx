import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Determine API URL based on environment or default to localhost
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'

    axios.get(`${apiUrl}/`)
      .then(response => {
        setMessage(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        setMessage('Error connecting to backend')
      })
  }, [])

  return (
    <>
      <h1>MERN Stack App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Backend says: <strong>{message}</strong>
        </p>
      </div>
    </>
  )
}

export default App
