import React from 'react'

const EmailSection = () => {
  return (
    <div className='text-white'>
        <h2 className=' text-center text-[1.125rem] mt-[64px]'>Ready to watch? Enter your email to create or restart your membership.</h2>
        <div className='flex gap-3 pt-[16px] justify-center'>
            <input className='bg-transparent border border-gray-600 rounded-[5px] p-2 text-[1rem] w-[600px] h-[60px]' type="text" placeholder='Email address' />
            <button className='text-[1.5rem] w-[200px] bg-[#e50914] rounded-[5px]'>Get Started</button>
        </div>
    </div>
   )
}

export default EmailSection