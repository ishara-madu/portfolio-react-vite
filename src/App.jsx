import React, { useRef } from 'react'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Navbar from './components/top-nav-bar/Navbar'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {

  
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact/>
    </div>
  )
}

export default App