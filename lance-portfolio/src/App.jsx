import { useState } from 'react'
import Sidebar  from './components/Sidebar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex bg-[#ECECEC] p-3 h-screen w-screen'>
    <Sidebar/>
     {/* <h1>Hello World</h1> */}
    </div>
  )
}

export default App
