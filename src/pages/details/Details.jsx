import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import { details, div } from 'motion/react-client'

const Details = () => {
  const {id,type} = useLocation().state
//   const [detailsData, setDetailsData] =
  return (
    <div>
        <iframe className='w-[800px] h-[400px] mx-auto' src="" frameborder="0">

        </iframe>
        <div className='p-10'>
            <h1 className='text-white text-4xl'>{detailsData.name ? detailsData.name : detailsData.title}</h1>
            <div className='flex items-center gap-2 my-5'>
                {detailsData?.genres.map(item => <div className='text-white bg-zinc-800 w-fit p-3 rounded-[4px]'>{item.name}</div>)}
            </div>
            <p className='text-white'>{detailsData.overview}</p>
        </div>
    </div>  
  )
}

export default Details