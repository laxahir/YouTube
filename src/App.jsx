import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Pages/Home/Home'
import Videos from './Video/Videos'
import { useState } from 'react'

function App() {

  const [sidebar, setSidebar] = useState(true)

  return (
    <>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Videos />} />
      </Routes>

    </>
  )
}

export default App
