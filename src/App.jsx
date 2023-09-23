import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pizzamenu from './pizzamenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Pizzamenu />

    </>
  )
}

export default App
