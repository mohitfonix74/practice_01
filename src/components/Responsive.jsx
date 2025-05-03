import React from 'react'
import '../Componentscss/Responsive.css'

const Responsive = () => {
  return (
    <div>
        <h1 className='text-center'>Media query using</h1>
        <h1 className='text-center'>Before Applying media query</h1>
        <h1 className='text-center animated-text'>After Applying media query</h1>
        <div className='ball'></div>

    </div>

  )
}

export default Responsive