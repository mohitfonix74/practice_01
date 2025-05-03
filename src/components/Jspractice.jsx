import React, { useEffect, useState } from 'react';

let a = 5;

const loop = () => {
  for (let i = 0; i < a; i++) {
    console.log("helloo i am for loop<br>");
  }
};
const loop2 = () => {
  let i = 2;
  while (i < a) {
    console.log("helloo i am while loop <br>");
    i++;
  }
};
const loop3 = () => {
  let i = 2;
  do {
    console.log("helloo i am do while loop <br>");
    i++;
  } while (i < a);
};
const loop4 = () => {
  let colors = ["red", "green", "blue"];
  for (let color of colors) {
    console.log(color);
  }
};
const array = () => {
  const arr = ["apple", "banana", "mango"];
  console.log(arr);
};
const objfun = () => {
  let obj = {
    name: "mohit",
    city: "jaipur",
  };
  console.log(obj);
};
const arrowfun = (a, b) => {
  return a + b;
};
console.log(arrowfun(6, 4));

const callback = (name, call) => {
  console.log("hello " + name);
  call();
};
const bye = () => {
  console.log("Goodbye");
};
callback("Mohit", bye);

const eventfun = () => {
  document.getElementById('event').addEventListener("click", () => {
    alert("Event done");
  });
  document.getElementById('event').innerHTML = " add me";
  setTimeout(() => {
    alert("button content changed");
  }, 1000);
};

const Jspractice = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((dataa) => {
  //       setData(dataa);
  //     })
  //     .catch((err) => {
  //       console.log("Fetch error:", err);
  //     });
  // }, []);
  useEffect(() => {

    const asyncfun = async () => {
      try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
        let response = await res.json();
        setData(response);
        console.log("async operation done successfully");
      }
      catch (err) {
        console.log("something went wrong", err);
      }

    }
    asyncfun();
  }, []);

  return (
    <div className='container'>
      <h1>For loop</h1>
      <button className='btn btn-primary' onClick={loop}>click For loop</button>
      <hr />
      <h1>while loop</h1>
      <button className='btn btn-primary' onClick={loop2}>click While loop</button>
      <hr />
      <h1>Do while loop</h1>
      <button className='btn btn-primary' onClick={loop3}>click Do While loop</button>
      <hr />
      <h1>For of loop</h1>
      <button className='btn btn-primary' onClick={loop4}>click For of loop</button>
      <br />
      <hr />
      <h2 className='ms-4'>Array example : result in console</h2>
      <button className='btn btn-primary m-4' onClick={array}>click for array</button>
      <hr />
      <h2 className='ms-4'>Object example : result in console</h2>
      <button className='btn btn-primary m-4' onClick={objfun}>click for Object</button>
      <hr />

      <div className='w-vw h-lvh bg-cyan-700 container-fluid'>
        <h1 className='text-center pt-3'>Event Listener</h1>
        <button className='btn btn-success' id='event' onClick={eventfun}>Click me I am event listener</button>

        <h1 className='text-white mt-3'>Fetched Data:</h1>
        {
          data.map((res) => (
            <div className='flex 'key={res.id}>
                <h2 className='text-white' >{res.name}</h2>
                <h2 className='text-black'>{res.email}</h2>
            </div>
        
          ))
        }
      </div>
    </div>
  );
};

export default Jspractice;
