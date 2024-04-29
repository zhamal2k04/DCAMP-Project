import React from 'react'
import Slider from './slider/Slider'
import rasim from "../../img/emoji__rock 1.png"

const Carusel = () => {
 
  return (
    <div className='   mt-5   '>
      <div className=' ml-5 w-[40%] flex text-[#2A2367] font-bold justify-left md:justify-center text-3xl'>
      Избранные <span className='ml-2 text-[#4338ca]'> проекты</span>
      <img  src={rasim} alt="" />
      </div>
      <div className='w-[100%] ml-11 flex text-[#2A2367] mt-6 font-bold justify-left md:justify-center font-semibold text-lg ml-5'>
      Fortezzo <span className='ml-2 text-[#6366f1]'>Алмазное оборудование</span>
      </div>
    <Slider/>
    </div>
  )
}

export default Carusel
