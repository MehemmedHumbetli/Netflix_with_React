import React from 'react'

const Entry = () => {
    return (

        <div className="text-white p-10 w-full h-screen bg-black/70 bg-blend-overlay bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_large.jpg')]">
            <div className='flex justify-between items-center max-w-[120rem] pl-[100px] pr-[125px] mt-[-20px]'>
                <img className='w-[9.9rem] h-[3rem] ' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logoNetflix" />
                <div>
                    <select className='w-[132px] h-[32px] mr-5 bg-black/50 rounded-[5px] border border-gray-600'>   
                        <option value="" selected>English</option>
                        <option value="">Russian</option>
                    </select>
                    <button className='w-[75.59px] h-[32px] bg-[#e50914] rounded-[5px]'>Sign in</button>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center min-h-[50rem] w-full font-bold text-center'>
                <h1 className='text-[3.5rem] w-[700px] h-[140px] mb-[2.3rem]'>    
                    Unlimited movies, TV shows, and more
                </h1>

                <p className='text-[1.5rem] mb-[2.1rem]'>Starts at EUR 7.99. Cancel anytime.</p>

                <p className='text-[1rem] '>Ready to watch? Enter your email to create or restart your membership.</p>
                
                <div className='flex gap-3 pt-[16px]'>
                    <input className='bg-transparent border border-gray-600 rounded-[5px] p-2 text-[1rem] w-[370px] h-[60px]' type="text" placeholder='Email address' />
                    <button className='text-[1.5rem] w-[230px] bg-[#e50914] rounded-[5px]'>Get Started</button>
                </div>
            </div>
        </div>


    )
}

export default Entry
