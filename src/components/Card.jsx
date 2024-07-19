import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}}  dragElastic={0.2} className='relative flex-shrink w-56 h-64 rounded-[40px] bg-zinc-300 p-5 overflow-hidden '>
     <FaRegFileAlt/>   

     <p className='mt-5 tracking-tight leading-none'>{data.desc}</p>
     <div className='footer w-full absolute left-0 bottom-0 '>
        <div className='flex items-center justify-between py-2 px-8 mb-3'>
            <h5>{data.filesize}</h5>
            <span>
            {data.close ? <IoMdCloseCircle/> :   <FaDownload/> }
            </span>
        </div>
        {data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600" } flex items-center justify-center`}>
            <h4 className=' text-sm font-semibold'>{data.tag.tagtitle}</h4>
        </div> 
        )} 

     </div>
    </motion.div>
  )
}

export default Card
