import React, { useState } from 'react'
import top10 from "../../../assets/images/Top10.svg"

const Home = ({visibleItem}) => {

return (
    visibleItem && <div style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${visibleItem.backdrop_path})`
    }} 
    className='flex items-center text-white w-full bg-cover bg-no-repeat bg-center h-screen bg-black/50 bg-blend-overlay '>
        <div className='max-w-[500px] text-white ml-[90px]'>
                <h2 className='text-7xl mb-4'>{visibleItem.title}</h2>
                <div className='flex items-center gap-2'>
                        <img src={top10} alt="" />
                        <h3 className='font-bold text-2xl '>#1 in Movies Today</h3>
                </div>
                <p className='mt-4 text-xl'>{visibleItem.overview.slice(0,150)}...</p>
                <div className='flex items-center gap-2 mt-4'>
                        <button className='bg-white px-6 py-3 font-bold text-black rounded-[4px]'>Play</button>
                        <button className='bg-[#515451] px-6 py-3 rounded-[4px]'>More Info</button>
                </div>
        </div>
    </div>
  )
}

export default Home