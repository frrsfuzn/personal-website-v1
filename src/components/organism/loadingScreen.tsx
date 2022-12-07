import React from 'react'

function LoadingScreen() {
  return (
    <div className='fixed flex justify-center items-center top-0 bottom-0 left-0 right-0 w-screen h-screen z-50 bg-slate-900/50 backdrop-blur-sm'>
        <div className='relative bg-white'>
            <div className='absolute top-0 bottom-0 animate-sliding-width backdrop-invert'/>
            <h1 className='text-xl'>loading</h1>
        </div>
    </div>
  )
}

export default LoadingScreen