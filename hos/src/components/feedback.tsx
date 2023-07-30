'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react';
import arrowRight from '../../public/arrowRight.svg'

interface FeedbackProps {
    
}


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
    const [itemsPerSlide, setItemsPerSlide] = useState(1);
    const totalPages = Math.ceil(images.length / itemsPerSlide);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - itemsPerSlide + images.length) % images.length);
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + itemsPerSlide) % images.length);
    };
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1400) {
          setItemsPerSlide(3);
        } else {
          setItemsPerSlide(1);
        }
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return( 
    
    <div className="relative bg-fundo">
        <div className='text-[1.25rem] pt-[3rem] text-center font-extrabold text-grafite leading-tight w-[16rem] flex mx-auto pb-[2rem] tablet:w-[41.12rem] tablet:text-[2rem] tablet:pt-[10rem]'>
                <h2>Já ajudamos <span className='text-vermelho'> centenas de farmácias</span> e drogarias a descomplicar suas rotinas. </h2>
        </div>

      <div className="carousel overflow-hidden tablet:w-[1200px] flex mx-auto">
        <div className="carousel-slides flex transition-transform ease-in-out duration-300 tablet:w-1/3" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className={`carousel-slide flex-shrink-0 w-full ${index === currentIndex ? 'active' : ''}`}>
              <Image src={image} alt={`Image ${index + 1}`} width={250} height={210} className='flex mx-auto tablet:w-[25rem]'/>
            </div>
          ))}
        </div>
      </div>

        <div className="flex justify-center -mt-[0.4rem]   ">
            <button
            className=" bg-fundo mr-[1rem] border-2 rounded-full text-[24px] px-[0.5rem] py-[1rem] cursor-pointer hover:bg-magenta hover:transition hover:ease-in hover:duration-300 hover:border-0"
            onClick={prevSlide}
            >
            <Image src={arrowRight} alt='' className='rotate-180 w-[1rem] h-[1rem] mx-[0.4rem] hover:mx-[0.6rem] hover:filter hover:grayscale '/>
            </button>
            <button
            className=" bg-fundo  border-2 rounded-full text-[24px] px-[0.5rem] py-[1rem] cursor-pointer   hover:bg-magenta hover:hover:transition hover:ease-in hover:duration-300 hover:border-0"
            onClick={nextSlide}
            >
            <Image src={arrowRight} alt='' className='w-[1rem] h-[1rem] mx-[0.4rem] hover:mx-[0.6rem]'/>
            </button>
        </div>
    </div>
    )
};