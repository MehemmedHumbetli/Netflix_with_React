import React from 'react'

const Entry = () => {
    return (

        <div className=" p-10 w-full h-screen bg-black/70 bg-blend-overlay bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_large.jpg')]">
            <div className='flex justify-between items-center'>
                <img className='w-[180px] h-[60px] ' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logoNetflix" />
                <div>
                    <button className='w-[132px] h-[32px] mr-5'>Language</button>
                    <button className='w-[75.59px] h-[32px] bg-[#e50914] rounded-[5px]'>Sign in</button>
                </div>
            </div>

            <div className='text-white flex flex-col justify-center items-center min-h-[31rem] w-full font-bold text-center'>
                <h1 className='text-[3.5rem] w-[588px] h-[140px] mb-[1rem]'>    
                    Unlimited movies, TV shows, and more
                </h1>

                <p className='text-[1.5rem] mb-[1rem]'>Starts at EUR 7.99. Cancel anytime.</p>

                <p className='text-[1rem] '>Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
        </div>


    )
}

export default Entry
