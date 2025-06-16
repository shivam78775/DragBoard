import React, {useRef} from 'react'
import Card from './Card'

function Forground() {
  const ref = useRef(null);
  const data = [
    {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    fileSize: "0.9mb",
    close: false,
    tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  fileSize: "0.9mb",
  close: false,
  tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  fileSize: "0.9mb",
  close: false,
  tag: {isOpen: false, tagTitle: "Download Now", tagColor: "blue" },
    }];

  return (
    <>
    <div>
        <div ref={ref} className='w-full fixed h-screen top-0 left-0 z-[3]  flex gap-10 flex-wrap p-5'>
      <div id="add">
      </div>
          {data.map((item, index)=>(
            <Card data={item} reference={ref}/>
          ))}
        </div>
    </div>
    </>
  )
}

export default Forground