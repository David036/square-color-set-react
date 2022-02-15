import React from 'react'

export default function Squares({ colors }) {
  return (
    <div className='squares-section'>
        {colors.map((elem) => {
            return (
                <div style={{backgroundColor:elem}} className="square"></div>
            )
        })}
    </div>
  )
}
