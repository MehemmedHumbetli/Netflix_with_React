import { useState } from 'react'
import {BrowserRouter, Routes, Route } from "react-router"
import Landing from './pages/landing/Landing'
import Homepage from './pages/homepage/Homepage'
import Details from './pages/details/Details'
import { useStore } from "zustand";
import { themeStore } from "./assets/common/Store.js";

function App() {
  const [count, setCount] = useState(0)
  const {token} = useStore(themeStore)

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/details' element={<Details/>}/>
        {/* {token && 
          <>
          </>
        } */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
