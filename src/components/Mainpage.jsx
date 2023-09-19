import React from 'react'

const Mainpage = () => {
  return (
    <div>
      <header className='flex justify-between py-1 px-3 border-white rounded w-[50%] border m-auto items-center'>
        <div>
          <p className='font-bold text-xl capitalize text-white'>rock</p>
          <p className='font-bold text-xl capitalize text-white'>paper</p>
          <p className='font-bold text-xl capitalize text-white'>Scissors</p>
        </div>
        <div>
          <div className=' rounded-md bg-white  py-2 px-4 text-center'>

          <p className='text-sm'>score</p>
          <p className='font-bold text-4xl'>12</p>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Mainpage
