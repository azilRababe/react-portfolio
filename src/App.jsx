import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about/About'
import Skills from './pages/Skills'
import Sidebar from './components/Sidebar'
import News from './pages/News'
function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="news" element={<News />} />
      </Routes>
    </>
  )
}

export default App
