import React from 'react'

const Search = () => {
  return (
    <>
   
    <div className='flex-cols justify-center place-items-center pt-32 h-screen w-screen bg-emerald-100'>
 <input className='h-14 w-[1200px] rounded-full placeholder:text-center placeholder:text-black text-xl pl-5 pr-5' type="text" placeholder='Search Product' />
         <button
             
  className="bg-slate-50 font-[Roboto] h-10 text-xl flex justify-center place-items-center transition delay-150 duration-300 ease-in-out my-11 rounded-3xl hover:-translate-y-1 hover:scale-110 hover:bg-pink-600 hover:text-white">
               Search Product
             </button>
    </div>
    </>
  )
}

export default Search
