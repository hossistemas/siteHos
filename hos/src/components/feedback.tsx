'use client'

import Image from 'next/image'
import { useState } from 'react';
import arrowRight from '../../public/arrowRight.svg'

interface FeedbackProps {
    
}

<div className='text-[1.25rem] font-extrabold text-grafite leading-tight w-[16rem] flex mx-auto pb-[2rem]'>
                <h2>Já ajudamos <span className='text-vermelho'> centenas de farmácias</span> e drogarias a descomplicar suas rotinas. </h2>
            </div>
const images = [
    '/geraldo.png',
     '/luciana.png',
   '/marilva.png',
    '/roberto.png',
    '/rodrigo.png',
    '/valfarma.png'
    
  ];

export function Feedback(props: FeedbackProps){
    const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
    return( 
    
    <div className="relative bg-fundo">
      <div className="carousel overflow-hidden">
        <div className="carousel-slides flex transition-transform ease-in-out duration-300 tablet:w-1/3" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className={`carousel-slide flex-shrink-0 w-full ${index === currentIndex ? 'active' : ''}`}>
              <Image src={image} alt={`Image ${index + 1}`} width={284} height={222} className='flex mx-auto'/>
            </div>
          ))}
        </div>
      </div>

        <div className="flex justify-center mt-[1rem] ">
            <button
            className=" bg-fundo rounded-full text-[24px] px-[0.5rem] py-[1rem] cursor-pointer hover:bg-magenta"
            onClick={prevSlide}
            >
            <Image src={arrowRight} alt='' className='rotate-180'/>
            </button>
            <button
            className="rounded-full bg-fundo text-[24px] px-[0.5rem] py-[1rem] cursor-pointer hover:bg-magenta"
            onClick={nextSlide}
            >
            <Image src={arrowRight} alt='' className=''/>
            </button>
        </div>
    </div>
    )
};