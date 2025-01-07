import { useState } from 'react'
import {BrowserRouter, Routes, Route } from "react-router"
import Landing from './pages/landing/Landing'
import Homepage from './pages/homepage/Homepage'
import Details from './pages/details/Details'
import { useStore } from "zustand";
import { themeStore } from "./assets/common/Store.js";
import LoginPage from './pages/Login/LoginPage.jsx';
import SignUpPage from './pages/signUp/SignUpPage.jsx';

function App() {
  const [count, setCount] = useState(0)
  const {token} = useStore(themeStore)

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Landing/>}/>
        
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signUp' element={<SignUpPage/>}/>

        {token && 
          <>
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/details' element={<Details/>}/>
          </>
        }
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
