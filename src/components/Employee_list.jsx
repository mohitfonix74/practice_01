import React from 'react'

const Employee_list = () => {

  const list = [
    {
      id: 1,
      name: "Mohit",
      city: "jaipur",
      role: "Frontend developer",
    },
    {
      id: 2,
      name: "Rahul",
      city: "Delhi",
      role: "Frontend desiginer",
    },
    {
      id: 3,
      name: "Umesh",
      city: "Mumbai",
      role: "Graphic designer",
    },


  ]

  return (
    <div className='container'>
      {
        list.map((items) => {

return(
          <div key={items.id}>
            <h1>{`Hiii I am ${items.name} and from ${items.city} and i am ${items.role}`}</h1>
          
          </div>

)



        })
      }

    </div>
  )
}

export default Employee_list