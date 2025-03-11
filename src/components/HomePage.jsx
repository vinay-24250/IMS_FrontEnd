/* eslint-disable no-unused-vars */
import React from 'react'

const HomePage = () => {
  return (
    <>
    <div className='bg-emerald-100 h-[750px] flex justify-center place-items-center text-center w-screen gap-x-28'>
     <div className='h-auto w-[800px] mb-40'> <h2 className='font-[Roboto] font-semibold text-5xl text-pink-600 text-center'>Smarter Inventory, Faster Decisions</h2>
     <h2 className='font-[Roboto] font-semibold text-5xl text-gray-800 text-center mt-3'>Your All-in-One Solution for Effortless Management.</h2>
     </div>
      <img className='animate-bounce object-contain' src="src\components\IMS_Home.png" alt="Hello Vinay" />
    </div>
  
    </>
  )
}

export default HomePage
