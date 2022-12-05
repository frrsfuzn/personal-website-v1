import React from 'react'

function Button() {
  return (
    <button onClick={() => alert('Clicked')} className='p-5 bg-blue-500'>Click me!</button>
  )
}

export default Button