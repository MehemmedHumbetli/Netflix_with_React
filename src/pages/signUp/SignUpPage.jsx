import React from 'react'
import SignUp from '../signUp/components/SignUp.jsx'
import Footer from '../landing/components/Footer.jsx'

const SignUpPage = () => {
  return (
    <>
        <SignUp/>
        <div className='w-full px-[165px] relative bg-black'>
            <Footer/>
        </div>
    </>
  )
}

export default SignUpPage