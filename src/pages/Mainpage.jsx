/* eslint-disable react/prop-types */
import scissors from '../assets/images/icon-scissors.svg'
import paper from '../assets/images/icon-paper.svg'
import rock from '../assets/images/icon-rock.svg'
import Image from '../components/Image'
import { NavLink } from 'react-router-dom'
import { data } from '../data'
const MainPage = ({ setImage,setImage2,setWinMessage,setScore,setHousePick,setShowWinMessage ,setCompScore,setCounter,levelMsg}) => {
  const random = Math.floor(Math.random() * 3)
  

  const checkWin = (user, house) => {
      setCounter(counter=>counter+1)
    if (user.name === house.name) {
     setWinMessage('its a tie');
      return
    }
    
    if (user.name === 'paper' && house.name !== 'rock') {
      setWinMessage('you loose');
      setCompScore(score=>score+1)
      return
    }

    if (user.name === 'rock' && house.name !== 'scissors') {
      setWinMessage('you loose');
      setCompScore(score=>score+1)
      return
    }

    if (user.name === 'scissors' && house.name !== 'paper') {
      setWinMessage('you loose');
      setCompScore(score=>score+1)
      return
    }
    setWinMessage('you win');
    setScore(score=> score+1)
  }
 
  const handleClick = (e) => {
    const currTarget = e.currentTarget
    const id = currTarget.dataset.id
    const iconSelect = data.find((item) => item.id === +id)
    setTimeout(() => {
    setHousePick(true)
      setTimeout(() => {
        checkWin(iconSelect,data[Number(random)])
        setShowWinMessage(true)
      }, 400)
  },400)

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



export default MainPage
