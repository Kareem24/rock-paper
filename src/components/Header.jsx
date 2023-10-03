/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

const Header = ({ score, compScore ,counter,setCounter}) => {
  let [level, setLevel] = useState(1)
  
  useEffect(() => {
  if (counter > 10) {
    setLevel(level=> level+1)
    setCounter(0)
   
  }
  
    
  },[counter])
  // if (score > 2) {
  //   setLevel(level=>level+1)
  // }
  return (
   <header className='flex justify-between py-1 px-3 border-headerOutline rounded md:w-[60%] w-[90%] border m-auto items-center'>
        <div>
          <p className=' text-lg font-bold md:text-xl capitalize text-white'>rock</p>
          <p className=' text-lg font-bold md:text-xl capitalize text-white'>paper</p>
          <p className=' text-lg font-bold md:text-xl capitalize text-white'>Scissors</p>
      </div>
      <p className='font-bold text-xl lg:text-4xl text-white '>Lvl. { level}</p>
        <div className="flex lg:gap-4 gap-2">
          <div className=' rounded-md bg-white   py-1 px-1 lg:py-2 lg:py-4 text-center'>

          <p className='text-sm text-scoreText capitalize'>your score</p>
          <p className='font-bold text-xl lg:text-4xl text-darkText '>{ score}</p>
          </div>
          <div className=' rounded-md bg-white  py-1 px-1 lg:py-2 lg:py-4 text-center'>

          <p className='text-sm text-scoreText capitalize'>comp. score</p>
          <p className='font-bold text-2xl lg:text-4xl text-darkText '>{compScore}</p>
          </div>
        </div>
      </header>
  )
}

export default Header
