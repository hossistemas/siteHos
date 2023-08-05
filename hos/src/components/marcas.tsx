'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';


interface MarcasProps {}

const images = [
  '/ifood.svg',
  '/bling.svg',
  '/IQVIA.svg',
  '/stone.svg',
  '/REDESOMA.svg',
  '/AGAFARMA.svg',
  '/AVANT.svg',
  '/CB.svg',
  'DROGABEK.svg',
  '/guiafarmacia.svg',
  '/IMENDES.svg',
  '/INOVA.svg',
  '/melhorcompra.svg',
  '/multifarma.svg',
  '/NAPP.svg',
  '/REDESOMA.svg',
  '/ifood.svg',
  '/bling.svg',
  '/IQVIA.svg',
  '/stone.svg',
  '/REDESOMA.svg',
  '/AGAFARMA.svg',
  '/AVANT.svg',
  '/CB.svg',
  'DROGABEK.svg',
  '/guiafarmacia.svg',
  '/IMENDES.svg',
  '/INOVA.svg',
  '/melhorcompra.svg',
  '/multifarma.svg',
  '/NAPP.svg',
  '/REDESOMA.svg',
];

export function Marcas(props: MarcasProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1400) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };

    handleResize(); // Call it once to set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startTransition = () => {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Change slide every 3 seconds (adjust the interval as desired)
    };

    const stopTransition = () => {
      clearInterval(interval);
    };

    startTransition();

    return () => stopTransition();
  }, []);

    useEffect(() => {
        if (currentIndex === images.length - 1) {
        // Quando chegar ao último card, reinicie o carrossel para o primeiro card após 500ms
        const timeout = setTimeout(() => {
            setCurrentIndex(0);
        }, 2000);

        // Limpar o timeout quando o componente é desmontado ou o currentIndex muda antes dos 500ms
        return () => clearTimeout(timeout);
        }
    }, [currentIndex]);


  return (
    <div className="relative bg-fundo">
     <div className='text-[1.25rem] pt-[3rem] text-center font-extrabold text-grafite leading-tight w-[16rem] flex mx-auto pb-[2rem] tablet:w-[41.12rem] tablet:text-[2rem] tablet:pt-[10rem]'>
                <h2>Já ajudamos <span className='text-vermelho'> centenas de farmácias</span> e drogarias a descomplicar suas rotinas. </h2>
        </div>

      <div className="carousel overflow-hidden tablet:w-[1000px] flex mx-auto">
        <div className="carousel-slides flex transition-transform ease-in-out duration-500 tablet:w-1/3" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}>
          {images.map((image, index) => (
             <div key={index} className={`carousel-slide flex-shrink-0 w-full drop-shadow-lg pb-[2rem] tablet:-mx-[2.7rem] ${index === currentIndex ? 'active' : ''}`}>
              <Image src={image} alt={`Image ${index + 1}`} width={150} height={75} className='flex mx-auto tablet:w-[10rem] '/>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
