import { useState } from 'react'
import Sidebar  from './components/Sidebar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'

function App() { 
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='flex bg-[#ECECEC] h-screen overflow-hidden gap-3 w-full'>
      <Sidebar/>

      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      </div>
    </Router>

  )
}

export default App
