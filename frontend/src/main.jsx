import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import Salepage from './pages/Salepage.jsx'
import Aboutpage from './pages/Aboutpage.jsx'
import Profilepage from './pages/Profilepage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/products' element={<Salepage />} />
        <Route path='/profile' element={<Profilepage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
