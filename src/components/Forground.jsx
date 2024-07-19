import React, { useRef } from 'react'
import Card from './Card'


function Forground() {
       const ref =useRef(null);



    const data =[
        {
            desc: "This is my card to show off how working be done at the time",
            filesize: "0.9mb",
            close: false,
            tag: {isOpen: true, tagtitle: "Download Now", tagColor: "green"},

    },
        {
            desc: "This is my card to show off how working be done at the time",
            filesize: "0.9mb",
            close: false,
            tag: {isOpen: true, tagtitle: "Download Now", tagColor: "blue"},

    },
    {
        desc: "This is my card to show off how working be done at the time",
        filesize: "0.9mb",
        close: false,
        tag: {isOpen: true, tagtitle: "Download Now", tagColor: "green"},

},
    
];
  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap">
        {data.map((item,index)=>(
             <Card  data={item}  reference={ref} />
        ))}
    </div>
  )
}

export default Forground
