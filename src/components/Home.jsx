import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../Componentscss/Home.css'

const Home = () => {
    let navigate = useNavigate()
    const originaltitle = "i am original title"
    const [title, setTitle] = useState(originaltitle)
    
    
    let alertfunction = () => {


        alert("Welcome to Props Page😊")
        setTimeout(() => {
            navigate('/props');
        }, 1000)
    }

    
   

   
    console.log(alertfunction);

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/Car.jpg" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/Car2.jpg" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/Car3.jpg" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="back">Back</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className='next'>Next</span>
                        </button>
                    </div>
                    <button className='btn1' onClick={alertfunction}>click me</button>

                    <h1 className='text-center'> {title}</h1>
                    <button className='btn2' onClick={() => setTitle("hello i am new title")}>click me for changing the title</button>
            
                    <button className='btn2' onClick={() => setTitle(originaltitle)}>click me for getting the old title</button>

                    
                </div>
             

            </div>
        </div>


    )
}

export default Home