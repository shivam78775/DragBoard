import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference, onDelete}) {
   
  return (
    <>
      <motion.div 
        drag 
        dragConstraints={reference} 
        whileDrag={{scale:1.2}} 
        dragElastic={0.1}  
        dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} 
        className="relative flex-shrink-0 w-60 h-72 md:w-60 md:h-72 w-40 h-52 rounded-[30px] md:rounded-[45px] bg-zinc-900/90 text-white px-4 py-6 md:px-8 md:py-10 overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
        <div className="footer absolute bottom-0 left-0 w-full">
            <div className="flex items-center justify-between py-3 px-4 md:px-8 mb-3">
                <h5>{data.fileSize}</h5>
                <button 
                  onClick={onDelete}
                  className="w-7 h-7 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <IoClose />
                </button>
            </div>
            <div 
              className="w-full py-3 md:py-4 flex items-center justify-center"
              style={{ backgroundColor: data.tag.tagColor }}
            >
              <h3 className="text-sm font-semibold">{data.title}</h3>
            </div>
        </div>
      </motion.div>
    </>
  );
}

export default Card;
