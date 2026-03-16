import { useState } from 'react'
import Sidebar  from './components/Sidebar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Achievements from './pages/Achievements'
import Blog from './pages/Blog'
import Resume from './pages/Resume'
import BlogSelected from './components/blog/BlogSelected';

function App() { 
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='flex bg-[#ECECEC] h-screen overflow-hidden gap-3 w-full'>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About/>} />
      </Routes>
      <Routes>
        <Route path="/projects" element={<Projects/>} />
      </Routes>
      <Routes>
        <Route path="/achievements" element={<Achievements/>} />
      </Routes>
      <Routes>
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      <Routes>
        <Route path="/resume" element={<Resume/>} />
      </Routes>
      <Routes>
        <Route path="/blog-selected" element={<BlogSelected/>} />
      </Routes>
      </div>
    </Router>

  )
}

export default App
