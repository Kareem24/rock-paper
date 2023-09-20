import scissors from '../assets/images/icon-scissors.svg'
import paper from '../assets/images/icon-paper.svg'
import rock from '../assets/images/icon-rock.svg'
import Image from '../components/Image'
const Mainpage = () => {
  return (
    <>
    
      <div className='w-1/2 m-auto flex items-center justify-center bg-triangle bg-no-repeat bg-center bg-[length:200px] mt-20'>
        
        <div>

          <div className='m-auto flex space-x-10  items-center' >
            <Image src={paper} color={'cyanStart'} extraStyle={' mt-[-20px]'}/>
            <Image src={scissors} color={'scissorsStart'} extraStyle={' mt-[-20px]'}/>
          </div>
          <Image src={rock} color={'rockStart'} extraStyle={' ml-[70px] lg:ml-20 mt-5 '} />
        </div>
      </div>
    </>
  )
}


export default Mainpage
