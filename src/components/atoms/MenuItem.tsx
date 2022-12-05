import React, { useState } from 'react'
import cx from 'classnames'

interface MenuItemProps {
    title: string
}

function MenuItem({title}:MenuItemProps) {
    const [hover, setHover] = useState(false)
    let highlight = cx({
        'transition-all duration-500 bg-white/0 absolute top-0 bottom-0 left-0 right-0 w-0':true,
        'backdrop-invert w-full': hover,
    })
  return (
    <div className='relative inline-block'>
        <div className={highlight} onMouseLeave={() => setHover(false)}  onMouseEnter={() => setHover(true)}/>
        <span className='border-b-2 border-red-400 z-10' onMouseLeave={() => setHover(false)}  onMouseEnter={() => setHover(true)} >{title}</span>
    </div>
  )
}

export default MenuItem