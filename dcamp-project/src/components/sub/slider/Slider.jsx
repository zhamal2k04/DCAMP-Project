import React  from'react'
import { Carousel, IconButton } from "@material-tailwind/react";
import rasim1 from "../../../img/FireShot Capture 025 - Каталог алмазного оборудования FORTEZZO - fortezzo 1.png"
import rasim2 from "../../../img/FireShot Capture 029 - Плиткорез ручной купить в СПБ - цены на профессиональные плиткорезы д_ - fortezzo 1.png"
import rasim3 from '../../../img/Group 7(1).png'
import rasim4 from '../../../img/Group 8.png'
const Slider = ( ) => {
    
    
  return (
        <Carousel
          className="rounded-xl sm:w-[80%] md:w-[70%] md:h-[80vh] md:ml-[15%] sm:ml-[10%] mt-7  "
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="blacsk"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-[15vh] sm:top-[20vh] sm:ml-[-1] md:top-2/4  -translate-y-2/4"
            >
              <svg
                src={rasim3}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="blacsk"
              size="lg"
              onClick={handleNext}
              className="!absolute top-[15vh] right-1 sm:top-[20vh] md:top-2/4 md:!right-[100px] -translate-y-2/4 "
            >
              <svg
              src={rasim4}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          <img
          width={1000}
            src={rasim1}
            alt="image 1"
            className=" object-cover bg-auto   md:w-[85%] md:ml-[4%] "
          />
          <img
           width={1000}
            src={rasim2}
             alt="image 2"
            className="  object-cover bg-auto  md:w-[85%] md:ml-[4%]"
          /> 
        </Carousel>
      );
    }

export default Slider
