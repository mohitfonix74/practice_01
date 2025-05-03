import React, { useState } from 'react'
import '../Componentscss/Form.css'

const Form = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [dob, setDob] = useState("");

    const formdataa = ()=>{
        alert("Form submitted successfully")
        setName("")
        setCity("")
        setDob("")
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-10 formcontainer">
                    <form onSubmit={formdataa}>
                    <input type="text"className='mt-2 mb-2' value={name} placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} required /> <br />
                    <input type="text" className='mb-2' value={city} placeholder='Enter Your City' onChange={(e) => setCity(e.target.value)} required /> <br />
                    <input type="date" className='mb-2' value={dob} placeholder='Enter Your D.o.b' onChange={(e) => setDob(e.target.value)} required />

                    <button className='btn btn-dark ms-2'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form