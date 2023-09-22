const Header = ({score}) => {
  return (
   <header className='flex justify-between py-1 px-3 border-headerOutline rounded md:w-[60%] w-[90%] border m-auto items-center'>
        <div>
          <p className=' text-lg font-bold md:text-xl capitalize text-white'>rock</p>
          <p className=' text-lg font-bold md:text-xl capitalize text-white'>paper</p>
          <p className=' text-lg font-bold md:text-xl capitalize text-white'>Scissors</p>
        </div>
        <div>
          <div className=' rounded-md bg-white  py-2 px-4 text-center'>

          <p className='text-sm text-scoreText'>score</p>
          <p className='font-bold text-2xl lg:text-4xl text-darkText '>{ score}</p>
          </div>
        </div>
      </header>
  )
}

export default Header
