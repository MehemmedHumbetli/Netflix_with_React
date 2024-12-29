import {useState} from 'react'
import Movies from './components/Movies'
import Shows from './components/Shows'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { useEffect } from 'react'

const Homepage = () => {
        const [selectedTab, setSelectedTab] = useState(
                {
                        title: "Home",
                        value: "home"
                }
        )
        const [trendingMovies, setTrendingMovies] = useState([])
        const [trendingShows, setTrendingShows] = useState([])
        
        const tabItems = [
                {
                        title: "Home",
                        value: "home"
                },
                {
                        title: "TV Shows",
                        value: "tv"
                },
                {
                        title: "Movies",
                        value: "movie"
                },
        ]

        const visibleTab = () => {
                switch (selectedTab.value) {
                        case "movie":
                                return <Movies data={trendingMovies}/>
                        case "tv":
                                return <Shows data={trendingShows}/>
                        default:
                                return <Home visibleItem={trendingMovies[0]}/>
                }
        }

        const getMovies = async () => {
                try{
                        const response = await fetch(`http://localhost:5001/api/v1/movie/trending`)
                        const data = await response.json()
                        if(response.ok)
                        {
                                setTrendingMovies(data.content)
                        }
                }
                catch(error){
                        console.error(error)
                }
        }
        const getShows = async () => {
                try{
                        const response = await fetch(`http://localhost:5001/api/v1/tv/trending`)
                        const data = await response.json()
                        if(response.ok)
                        {
                                setTrendingShows(data.content)
                        }
                }
                catch(error){
                        console.error(error)
                }
        }

        useEffect(() => {
                getMovies()
                getShows()
        }, [])
        
  return (
    <div className='relative bg-black min-h-screen'>
        <Navbar tabItems={tabItems} setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        {visibleTab()}

    </div>
  )
}

export default Homepage