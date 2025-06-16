import React from 'react'

function Background() {
  return (
    <>
    <div>
        <div className="fixed w-full h-screen z-[2] bg-zinc-800">
            <h1 className="absolute py-10 top-[5%] w-full flex justify-center text-zinc-600 text-xl">Documents.</h1>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  text-[13vw] font-semibold text-zinc-900 leading-none tracking-tighter">Docs.</h1>
        </div>
    </div>
    </>
  )
}

export default Background