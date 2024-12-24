import React from 'react'
import Entry from './components/Entry'
import Arch from './components/Arch'
import Trending from './components/Trending'
import ReasonsToJoin from './components/ReasonToJoin'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import EmailSection from './components/EmailSection'

const Landing = () => {
  

    return (
    <div className='w-screen'>
        <Entry/>
        <Arch/>
        <div className='w-full px-[165px] relative bg-black'>
            <Trending/>
            <ReasonsToJoin/>
            <FAQ/>
            <EmailSection/>
            <Footer/>
        </div>
    </div>
  )
}

export default Landing
