import React from 'react'
import Login from '../Login/components/Login.jsx'
import Footer from '../landing/components/Footer.jsx'

const LoginPage = () => {
  return (
    <>
        <Login/>
        <div className='w-full px-[165px] relative bg-black'>
            <Footer/>
        </div>
    </>
  )
}

export default LoginPage