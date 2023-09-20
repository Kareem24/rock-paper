import Image from '../components/Image'
import scissors from '../assets/images/icon-scissors.svg'
import paper from '../assets/images/icon-paper.svg'
import rock from '../assets/images/icon-rock.svg'


const YouWin = () => {
  return (
    <div className='text-white md:w-3/5  w-4/5 m-auto  grid grid-cols-2 mt-6 gap-14 md:grid-cols-3 mb-10 '>
      <div  className='flex flex-col  justify-self-end md:order-1'>
        <p className='uppercase font-semibold text-xs lg:text-sm mt-7 order-last md:order-first md:mb-7'>you picked </p>
        <Image color={'cyanStart'} src={paper}/>
     </div>
      <div className='flex flex-col w-full md:order-3 '>
        <p className='uppercase font-semibold text-xs lg:text-sm mt-7 order-last md:order-first md:mb-7 w-full'>the house picked </p>
        <Image color={'rockStart'} src={rock}/>
      </div>
      <div className='w-full col-span-2 self-center justify-self-center text-center md:col-span-1 md:order-2'>
        <p className='text-4xl font-bold uppercase mb-4'>you win</p>
        <button className='py-2 px-4 rounded-md text-darkText bg-white w-3/5 md:w-full text-xs m-auto
         uppercase'>play again</button>
      </div>
    </div>
  )
}

export default YouWin
