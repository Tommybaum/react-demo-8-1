import { useState } from 'react'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <About />
      <Contact />
    </>
  )
}

export default App
