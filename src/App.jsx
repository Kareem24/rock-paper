import Header from './components/Header'
import Button from './components/Button'
import Mainpage from './pages/Mainpage'
import YouWin from './pages/Youwin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-start to-end w-full min-h-screen pt-8 md:pt-20'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="win" element={<YouWin/>}></Route>
        </Routes>
      
      </BrowserRouter>
      
     <Button/>
    </div>
  )
}

export default App
