import Header from './components/Header'
import Button from './components/Button'
import MainPage from './pages/Mainpage'
import YouWin from './pages/Youwin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Modal from './components/Modal'
import WinMessage from './components/WinMessage'

import { useState } from 'react'

function App() {
  const [isModal, setIsModal] = useState(false)
  const [image, setImage] = useState(null)
  const [image2, setImage2] = useState(null)
  const [winMessage, setWinMessage] = useState('')
  const [showWinMessage,setShowWinMessage]=useState(false)
  const [score, setScore] = useState(0)
  const [compScore, setCompScore] = useState(0)
  const [housePick, setHousePick] = useState(false)
  const [counter, setCounter] = useState(0)
  

 
  return (
    <div className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-start to-end w-full min-h-screen pt-8 md:pt-20 relative'>
      <Header score={score}  compScore={compScore} counter={counter} setCounter={setCounter}  />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage setImage={setImage} setImage2={setImage2} setWinMessage={setWinMessage} setScore={setScore} setHousePick={ setHousePick} setShowWinMessage={setShowWinMessage} setCompScore={setCompScore} setCounter={setCounter}  />}></Route>
          <Route path="win" element={
            <YouWin image={image} image2={image2}housePick={housePick} showWinMessage={showWinMessage}>
              <WinMessage winMessage={winMessage} setHousePick={ setHousePick} setShowWinMessage={setShowWinMessage} />
            </YouWin>
          }>
          </Route>
        </Routes>
      
      </BrowserRouter>
      
      <Button setIsModal={ setIsModal} />
   {isModal && <Modal setIsModal={ setIsModal}/>}
    </div>
  )
}

export default App
