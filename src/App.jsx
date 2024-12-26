import { useState } from 'react'
import {BrowserRouter, Routes, Route } from "react-router"
import Landing from './pages/landing/Landing'
import Homepage from './pages/homepage/Homepage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path='/home' element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
