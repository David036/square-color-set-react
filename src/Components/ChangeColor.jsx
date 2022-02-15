import React from 'react'

export default function ChangeColor({changeColorFunction} ) {
  return (
    <div className='btn-section'>
        <button onClick={changeColorFunction} className='btn'>Click</button>
    </div>
  )
}
