/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Card = (props) => {
    console.log(props.username)
  return (
    <div className='inline-block mr-7 '>
    <div className='grid-flow-col bg-white text-black h-auto max-w-44 p-6 rounded-2xl place-items-center scale-3d mb-12 shadow-xl shadow-lime-300 sm:shadow-emerald-300 md:max-w-64'>
    <img className='h-40 w-40 rounded-full mb-5 border-black border-2 object-fit shadow-lime-300 shadow-lg' src={props.photo} alt="" />
    <h1 className='text-pretty mb-4 font-semibold font-serif md:text-xl'>{props.username}</h1>
    <h2 className='text-sm mb-5 font-semibold font-mono'>{props.city}</h2>
    <button className='bg-lime-400 font-semibold font-serif rounded-md hover:bg-green-600'>Add Friend</button>
    </div>
    </div>
 )
}

export default Card
