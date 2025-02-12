import React from 'react'

export default function Header() {
  return (
    <div>
        <header className='flex items-center justify-between gap-4 max-w-[1000px] mx-auto w-full p-4 bolfd font-medium'>
          <h1 className='text-red-400 font-bold text-center'>
          <a href="/">
            Lexi<span className='text-blue-400'>Flex</span>
            </a>
             

          </h1>
          <a href="/" className='flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-blue-400'>
                    <p>New</p>
                    <i className="fa-solid fa-plus"></i>
                </a>


        </header>
      
    </div>
  )
}
