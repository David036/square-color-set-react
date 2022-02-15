import React, { useState } from 'react'
import ChangeColor from './ChangeColor'
import Squares from './Squares'
import './style.scss'
export default function Home() {
    const [colors, setColors] = useState(['red','blue','green','yellow'])
    const changeColorFunction = () => {
        const newColors = [...colors]
        const color = newColors.pop()
        newColors.unshift(color)
        setColors(newColors)
    }
  return (
      
    <div className='home-section'>
        <Squares colors = {colors} />
        <ChangeColor changeColorFunction={changeColorFunction} />
    </div>
  )
}
