/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import NewProduct from "./components/NewProduct";
import Remove from "./components/Remove";
import Products from "./components/Products";
import Search from "./components/Search";
const App = () => {
  return (
    <>
 
<Header />
<Navbar />
<Routes>
  <Route path="/" element={<HomePage />}/>
  <Route path="/NewProduct" element={<NewProduct />}/>
  <Route path="/Remove/:" element={<Remove/>}></Route>
  <Route path="/Products" element={<Products />}></Route>
  <Route path="/Search" element={<Search />}></Route>
 
</Routes>


    </>
  );
};

export default App;

 /*  <Header />
    <Navbar />
    <div>
  <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/NewProduct" element={<NewProduct />}/>
    <Route path="/Remove" element={<Remove/>}></Route>
    <Route path="/Products" element={<Products />}></Route>
    <Route path="/Search" element={<Search />}></Route>
    
      </Routes>
  </div>
*/

/* import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

  const [data, setdata] = useState([])

const getData = async ()=>{

const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
setdata(response.data)
}


  return (
   <> <div className='grid place-items-center'>

      <button onClick={getData} className='ml-16 text-center bg-lime-200 h-16 w-36 border-4 border-whitefont-mono font-semibold rounded-lg active:scale-90 my-16'>GET DATA</button>
<div className='h-auto w-screen gap-2'>
      {
        data.map(function(elem,idx){
         return <div key={idx} className=' text-black w-96 px-1
          py-7 mb-10 inline-grid'>
          <img className='h-72 w-64 object-fit' src={elem.download_url} alt="" />
          <div className='h-10 w-64 bg-slate-400 font-mono font-bold  mt-2 mb-2 flex items-center justify-center'> {elem.id}  {elem.author}</div>
         </div>
        })
      }
</div>

</div>
      
      </>
  )
}

export default App

*/

/*   import React from 'react'
import Main from './components/Main'
import Header from './Components/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Main />

      
    </div>
  )
}

export default App
*/

/* import React from 'react';
import Card from './components/Card';

const App = () => {

  const users = [
    {
      "name": "jenny_doe",
      "age": 28,
      "city": "New York",
      "profile_photo": "https://photoszilla.com/wp-content/uploads/instagram-profile-picture-blurry_67.webp"
    },
    {
      "name": "jenny_smith",
      "age": 34,
      "city": "Los Angeles",
      "profile_photo": "https://photoszilla.com/wp-content/uploads/instagram-profile-picture-blurry_67.webp"
    },
    {
      "name": "jessica_jones",
      "age": 22,
      "city": "Chicago",
      "profile_photo": "https://photoszilla.com/wp-content/uploads/instagram-profile-picture-blurry_67.webp"
    },
    {
      "name": "lucy_brown",
      "age": 26,
      "city": "San Francisco",
      "profile_photo": "https://photoszilla.com/wp-content/uploads/instagram-profile-picture-blurry_67.webp"
    },
    {
      "name": "swift_williams",
      "age": 30,
      "city": "Miami",
      "profile_photo": "https://photoszilla.com/wp-content/uploads/instagram-profile-picture-blurry_67.webp"
    },
    {
      "name": "jenny_doe",
      "age": 28,
      "city": "New York",
      "profile_photo": "https://photoszilla.com/wp-content/uploads/instagram-profile-picture-blurry_67.webp"
    },
    {
      "name": "jenny_smith",
      "age": 34,
      "city": "Los Angeles",
      "profile_photo": "https://photoszilla.com/wp-content/uploads/instagram-profile-picture-blurry_67.webp"
    },
    {
      "name": "jessica_jones",
      "age": 22,
      "city": "Chicago",
      "profile_photo": "https://photoszilla.com/wp-content/uploads/instagram-profile-picture-blurry_67.webp"
    },
    {
      "name": "lucy_brown",
      "age": 26,
      "city": "San Francisco",
      "profile_photo": "https://photoszilla.com/wp-content/uploads/instagram-profile-picture-blurry_67.webp"
    },
    {
      "name": "swift_williams",
      "age": 30,
      "city": "Miami",
      "profile_photo": "https://photoszilla.com/wp-content/uploads/instagram-profile-picture-blurry_67.webp"
    }
  ]
  
  return (
   <div className='p-10'>
    {users.map(function(elem,idx){
      return <Card key={idx} username={elem.name} age={elem.age} city={elem.city} photo={elem.profile_photo}/>
    })}
     
   </div>


  )
}

export default App

*/

/* import React, { useState } from "react";


const App = () => {

  const [username, setusername] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    setusername('')
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
        value={username}
       onChange={(e)=>{
        setusername(e.target.value)
      
       }}
          className="px-4 py-4 pt-1 pb-1 text-center"
          type="text"
          placeholder="Enter your Name......"
        />
        <button className="bg-yellow-400 font-semibold text-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;

*/

/* import React, { useState } from "react";
const App = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h2 className="text-2xl , bg-red-200 , flex items-center">Number is {num}</h2>
      <button
        onClick={() => {
          setNum(num + 10);
        }}
      >
        Increament
      </button>
      <button
        onClick={() => {
          setNum(num - 10);
        }}
      >
        Decreament
      </button>
    </div>
  );
};

export default App;
*/
