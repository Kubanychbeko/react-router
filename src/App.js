import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import About from './components/About'
import Header from './components/Header'
import Corzi from './pages/Corzi'
import './style.scss'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('http://localhost:3000/db.json')
      const data = await resp.json()
      setData(data)
    }
    fetchData()
  }, [])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<About data={data} />} />
        <Route path="/corzi" element={<Corzi />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
