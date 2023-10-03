import mobile from '../assets/design/original/mobile-rules-modal.jpg'

const Modal = ({setIsModal}) => {
  return (<>
      <div className="absolute w-full h-full bg-slate-950 opacity-30 z-[1] top-0 left-0 flex justify-center items-center">
    </div>
    <div className='absolute top-0 z-10 max-h-screen flex justify-center items-center w-full'>

    <img src={mobile} alt="" className='w-96 h-screen cursor-pointer' onClick={()=>{setIsModal(false)}}/>
    </div>
  </>
  )
}

export default Modal
