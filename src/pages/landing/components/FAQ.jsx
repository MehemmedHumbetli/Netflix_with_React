import React, { useState } from 'react'
import FAQitem from './FAQitem'

const FAQ = () => {
const [openAccordion, setOpenAccordion] = useState(null)

        const items = [
                {
                        title: "sjdfhjksdhfksdhfkdhfsdkjsdkfk",
                        desc: "dfbgkjhfdf",
                        id : 1,
                },
                {
                        title: "aa",
                        desc: "aaassaf",
                        id : 2,
                },
                {
                        title: "aaa",
                        desc: "ffff",
                        id : 3,
                },
                {
                        title: "",
                        desc: "",
                        id : 4,
                },
                {
                        title: "",
                        desc: "",
                        id : 5,
                },
                {
                        title: "",
                        desc: "",
                        id : 6,
                },
                {
                        title: "",
                        desc: "",
                        id : 7,
                },
        ]
  return (
    <div className='flex flex-col gap-4'>
        {items.map(item => <FAQitem item={item} openAccordion={openAccordion} setOpenAccordion={setOpenAccordion}/>)}
    </div>
  )
}

export default FAQ