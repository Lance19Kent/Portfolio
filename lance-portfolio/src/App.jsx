import { useState } from 'react'
import Sidebar  from './components/Sidebar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidebar/>
     <h1>Hello World</h1>
    </>
  )
}

export default App
