import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

const Trending = ({ setItem }) => {
        const [data, setData] = useState([])
        const [selectedOption, setSelectedOption] = useState("Movie")
        const options = ["Movie", "TV"]

        const getData = async () => {
                try {
                        const response = await fetch(`http://localhost:5001/api/v1/${selectedOption.toLowerCase()}/trending`)
                        const data = await response.json()

                        console.log(data.console)

                        setData(data.content)
                } catch (error) {
                        console.error(error)
                }
        }

        useEffect(() => {
                getData()
        }, [selectedOption])
        return (
                <div className='text-white bg-black'>
                        <div className='py-20 w-full h-screen px-[130px]'>
                                <h3 className='text-3xl font-semibold mb-4'>Trending Now</h3>
                                <select className='w-[280px] h-[40px] mr-5 bg-black/50 rounded-[5px] border border-gray-600'>
                                        <option value="" selected>Movie</option>
                                        <option value="">TV</option>
                                </select>
                                <div className='w-full flex gap-12 overflow-scroll overflow-y-hidden py-5 pl-7'>
                                        {data.map((item, index) =>
                                                <MovieCard className='' setItem={setItem} item={item} index={index} />
                                        )}
                                </div>
                        </div>
                </div>
        )
}

export default Trending