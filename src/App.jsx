import React from 'react'
import './App.scss'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about/About'
import Skills from './pages/Skills'
import Layout from './components/Layout'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import { PageTransition } from '@steveeeie/react-page-transition'

function App() {
  const location = useLocation()
  return (
    <>
      <PageTransition
        preset="moveToLeftFromRight"
        transitionKey={location.pathname}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </PageTransition>
    </>
  )
}

export default App
