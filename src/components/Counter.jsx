import React, { useState } from 'react'
import '../Componentscss/Counter.css'

const Counter = () => {
    const [value, setValue] = useState(0);
    const initial = 0


  return (
    <div>
        <h1 className='mt-3 text-center'>Counter App</h1>
        <div className="boxx">
            <h1 className='text-center'> value is {value}</h1>
            <button className='btn btn-success margin ' onClick={()=>setValue(value+1)}>+</button>
            <button className='btn btn-primary ms-2' onClick={()=>setValue(value-1)}>-</button>
            <button className='btn btn-danger ms-2' onClick={()=>setValue(initial)}>Reset</button>

        </div>

    </div>
  )
}

export default Counter