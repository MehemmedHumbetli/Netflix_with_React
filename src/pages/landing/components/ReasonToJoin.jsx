import ReasonCard from "./ReasonCard"
import television from "../../../assets/images/television.svg" 
import downArrow from "../../../assets/images/downArrow.svg" 
import binoculars from "../../../assets/images/binoculars.svg" 
import smileIcon from "../../../assets/images/smileICON.svg" 
 
const ReasonsToJoin = () => {
    const items = [
        {
            title: "Enjoy on your TV",
            desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            img: television
        },
        {
            title: "Download your shows to watch offline",
            desc: "Save your favorites easily and always have something to watch",
            img: downArrow
        },
        {
            title: "Watch everywhere",
            desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            img: binoculars
        },
        {
            title: "Create profiles for kids",
            desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            img: smileIcon
        }
    ]
 
  return (
    <>
        <h2 className="text-white text-[24px] font-medium mb-4">More Reasons to Join</h2>
        <div className="flex gap-4">
          {items.map((item)=><ReasonCard item={item}/>)}
        </div>
    </>
  )
}
 
export default ReasonsToJoin