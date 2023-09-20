import scissors from '../assets/images/icon-scissors.svg'
import paper from '../assets/images/icon-paper.svg'
import rock from '../assets/images/icon-rock.svg'
import triangle from '../assets/images/bg-triangle.svg'
const Mainpage = () => {
  return (
    <>
      <header className='flex justify-between py-1 px-3 border-headerOutline rounded md:w-[60%] w-[90%] border m-auto items-center'>
        <div>
          <p className='font-bold text-xl capitalize text-white'>rock</p>
          <p className='font-bold text-xl capitalize text-white'>paper</p>
          <p className='font-bold text-xl capitalize text-white'>Scissors</p>
        </div>
        <div>
          <div className=' rounded-md bg-white  py-2 px-4 text-center'>

          <p className='text-sm text-scoreText'>score</p>
          <p className='font-bold text-4xl text-darkText'>12</p>
          </div>
        </div>
      </header>
      <div className='w-[50%] m-auto flex items-center justify-center bg-triangle bg-no-repeat bg-center bg-[length:200px] mt-20 relative '>
        
        <div>

        <div className='m-auto flex space-x-10  items-center' >
          <div className='bg-white lg:w-32 lg:h-32 w-24 h-24  rounded-full flex items-center border-[10px] justify-center border-cyanStart mt-[-20px]'>
            <img src={paper} alt="paper" className='md:w-8 w-8'/>
          </div>
          <div className='bg-white  lg:w-32 lg:h-32 w-24 h-24 rounded-full flex items-center justify-center border-[10px] border-scissorsStart  mt-[-20px] '>
            <img src={scissors} alt="scissors" className='m-7 w-8' />
          </div>
        </div>
        <div className='bg-white lg:w-32 lg:h-32 w-24 h-24  rounded-full flex items-center  justify-center border-[10px] border-rockStart ml-16 mt-10 lg:ml-24 '>
            <img src={rock} alt="scissors" className='m-7 w-8' />
        </div>
        </div>
      </div>
      <div className='flex items-center justify-center md:justify-end py-20 px-6'>
        <button className="border-white border-2 px-5 capitalize py-1 text-white">reset</button>
      </div>
      
    </>
  )
}

export default Mainpage
