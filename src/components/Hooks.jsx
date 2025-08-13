import button from 'daisyui/components/button';
import React, { useEffect } from 'react'

const Hooks = () => {

 useEffect(()=>{
    console.log("Hooks component mounted");
    window.scrollTo(0, 0);
 }, []);    
  return (
    <div>
        <h2 className='text-2xl font-bold mt-2 mb-4 text-center'>Hooks</h2>
        <p className='text-center'>Hooks are a new addition in React 16.8 that let you use state and other React features without writing a class.</p>
        <button className='btn border-2 rounded-2xl !bg-amber-900 !hover:bg-amber-300' onClick={() => console.log("Button clicked")}>click</button>
    </div>
  )
}

export default Hooks