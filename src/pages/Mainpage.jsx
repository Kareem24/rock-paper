/* eslint-disable react/prop-types */
import scissors from '../assets/images/icon-scissors.svg'
import paper from '../assets/images/icon-paper.svg'
import rock from '../assets/images/icon-rock.svg'
import Image from '../components/Image'
import { NavLink } from 'react-router-dom'
import { data } from '../data'
const Mainpage = ({ setImage,setImage2 }) => {
  const random = Math.floor( Math.random() * 3)
  const handleClick = (e) => {
    const currTarget = e.currentTarget
    const id = currTarget.dataset.id
    console.log(id);
    const iconSelect = data.find((item) => item.id === +id)
    console.log(random);

    setImage(iconSelect)
    setImage2(data[Number(random)])
  }
  return (
    <>
    
      <div className='w-1/2 m-auto flex items-center justify-center bg-triangle bg-no-repeat bg-center bg-[length:200px] mt-20'>
        
        <div>

          <div className='m-auto flex space-x-10  items-center' >
            <NavLink to='/win'>
              <Image src={paper} color={'cyan'} extraStyle={' mt-[-20px]'} onClick={handleClick} id={1 } />
            </NavLink>
            <NavLink to='/win'>

            <Image src={scissors} color={'scissors'} extraStyle={' mt-[-20px]'} onClick={handleClick}id={2}/>
            </NavLink>
          </div>
          <NavLink to='/win'>

          <Image src={rock} color={'rock'} extraStyle={' ml-[70px] lg:ml-20 mt-5 '}  onClick={handleClick} id={3}/>
          </NavLink>
        </div>
      </div>
    </>
  )
}


export default Mainpage
