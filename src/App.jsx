import Header from './components/Header'
import Button from './components/Button'
import Mainpage from './pages/Mainpage'
import YouWin from './pages/Youwin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Modal from './components/Modal'
import { useState } from 'react'

function App() {
  const [isModal, setIsModal] = useState(false)
  const [image, setImage] = useState(null)
  const [image2,setImage2] =useState(null)
 
  return (
    <div className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-start to-end w-full min-h-screen pt-8 md:pt-20 relative'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage setImage={setImage} setImage2={setImage2} />}></Route>
          <Route path="win" element={<YouWin image={image} image2={image2} />}></Route>
        </Routes>
      
      </BrowserRouter>
      
      <Button setIsModal={ setIsModal} />
   {isModal && <Modal setIsModal={ setIsModal}/>}
    </div>
  )
}

export default App
