import React from 'react'
import Entry from './components/Entry'
import Arch from './components/Arch'
import Trending from './components/Trending'
import ReasonsToJoin from './components/ReasonToJoin'
import FAQ from './components/FAQ'

const Landing = () => {
  

    return (
    <div className='w-screen'>
        <Entry/>
        <Arch/>
        <div className='w-full px-[144px] relative bg-black'>
            <Trending/>
            <ReasonsToJoin/>
            <FAQ/>
        </div>
    </div>
  )
}

export default Landing
