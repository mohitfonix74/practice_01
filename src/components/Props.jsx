import React, { useEffect, useState } from 'react'

const Props = (props) => {

    const [isVerify, setIsVerify] = useState(null)

    useEffect(() => {
            setTimeout(() => {

                const age = prompt("enter your age");
                if (age > 18) {
                    setIsVerify(true)
                }
                else {
                    setIsVerify(false)
                }
            }, 2000);
        


    }, [])



    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-6">

                    Hello i am {props.name}
                    <b> and</b> i am from {props.city}👍

                    {
                        isVerify === null ? (<h1>Loading...</h1>) :
                            isVerify ? (<h1>you are able to drive</h1>)
                                : (<h2> you are not eligible for driving</h2>)

                    }
                </div>
            </div>
        </div>
    );
};

export default Props