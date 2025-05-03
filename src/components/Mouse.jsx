import React, { useEffect, useState } from 'react'

const Mouse = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const mouselog = (e) => {
        console.log("this is mouse event");
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log("useEffect is called");
        window.addEventListener('mousemove', mouselog)

    },[])
    return (
        <div>
            <h1>Mouse positions checking</h1>
            <h2>{x}</h2>
            <h2>{y}</h2>
        </div>
    )
}

export default Mouse