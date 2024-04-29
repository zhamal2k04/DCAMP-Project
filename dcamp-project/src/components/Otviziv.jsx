import React from 'react'
import rasim from '../img/YouTube - Opera 1.png'

const  Yotube=[1,2,3,4,5,6]
const Otviziv = () => {
  return (
    <div className='mt-5'>
      <div className=' ml-5 w-[80%] ml-[15%] flex text-[#2A2367] font-bold justify-left md:justify-start text-3xl'>
        Отзывы <span className='ml-2 text-[#4338ca]'>о работе</span>
         </div>
         <div className='w-[80%] ml-[15%] mt-4  flex flex-col  md:flex-row  sm:flex-row flex-wrap'>
            {Yotube.map((el)=>(
                <img className='p-2' src={rasim} alt="" />
            ))}
         </div>
    </div>
  )
}

export default Otviziv
