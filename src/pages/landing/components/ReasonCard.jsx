import React from 'react'
 
const ReasonCard = ({item}) => {
  return (
    <div className='bg-gradient-to-br from-[#192247] to-[#210E17] w-[400px] h-[268px] rounded-[16px] px-4 pt-6 relative mb-[64px]'>
      <h3 className='text-white text-[24px] font-media'>{item.title}</h3>
      <p className='text-white/70 mt-2'>{item.desc}</p>
      <img className='size-[80px] absolute right-4 bottom-4' src={item.img} alt="" />
    </div>
  )
}
 
export default ReasonCard