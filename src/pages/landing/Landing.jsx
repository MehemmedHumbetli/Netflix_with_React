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
        <Trending/>
        <ReasonsToJoin/>
        <FAQ/>
    </div>
  )
}

export default Landing
