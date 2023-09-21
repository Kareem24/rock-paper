/* eslint-disable react/prop-types */
const Image = ({ src,color,extraStyle,onClick,id }) => {
  return  <div className={`bg-white lg:w-32 lg:h-32 w-24 h-24  rounded-full flex items-center  justify-center border-[10px] ${color} ${extraStyle} cursor-pointer` } onClick={onClick} data-id={id}>
    <img src={src} alt={color} className='m-7 w-8' />
    </div>
}

export default Image
