import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'

import Particles_bg from './components/Particles_bg.jsx'
import AnimatedCursor from 'react-animated-cursor'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Particles_bg />
      <AnimatedCursor />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
