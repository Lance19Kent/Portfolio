import { useState } from 'react'
import Sidebar  from './components/Sidebar'
import Content from './components/Content'
import './App.css'

function App() { 
  const [count, setCount] = useState(0)

  return (
    <div className='flex bg-[#ECECEC] p-3 h-screen w-screen gap-3'>
    <Sidebar/>
    <Content/>
    </div>
  )
}

export default App
