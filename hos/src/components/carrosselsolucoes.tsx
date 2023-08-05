'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react';
import arrowRight from '../../public/arrowRight.svg'

interface RenderProps {
    
}

interface CarouselItem {
  image: string;
  title: string;
  text: string;
}

export function Render(props: RenderProps) {
  const images: CarouselItem[] = [
    {
      image: '/simultaneas.png',
      title: 'Vendas Simultâneas',
      text: 'Flexibilidade de usar múltiplas telas de vendas para consultar preços e atender clientes de forma simultânea.',
    },
    {
      image: '/pbms.png',
      title: 'PBMS',
      text: 'Proporcionamos a integração com os principais Planos de Benefícios de Medicamentos (PBM) do mercado.',
    },
    {
      image: '/tef.png',
      title: 'TEF',
      text: ' Compras realizadas na maquininha são automaticamente registradas no nosso sistema.',
    },  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const totalPages = Math.ceil(images.length / itemsPerSlide);



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
        <div className='text-[1.25rem] pt-[5rem] text-left font-extrabold text-grafite leading-tight w-[16rem] flex mx-auto pb-[2rem] tablet:text-center tablet:w-[42.4rem] tablet:text-[2rem]'>
                <h2 className='mx-auto'>Soluções para sua drogaria render mais </h2>
            </div>
      <div className="carousel overflow-hidden  flex mx-auto h-[19rem] tablet:h-[26rem] tablet:w-[1090px] ">
        <div className="carousel-slides flex transition-transform ease-in-out duration-300  tablet:w-1/3" style={{ transform: `translateX(-${currentIndex *(100 / itemsPerSlide)}%)` }}>
          {images.map((item, index) => (
            <div key={index} className={`carousel-slide flex-shrink-0 w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[22rem] ${index === currentIndex ? 'active' : ''}`}>
              <Image src={item.image} alt={`Image ${index + 1}`} width={70} height={100} className='flex mx-auto pt-[2rem]  tablet:w-[4rem] tablet:pt-[3rem] tablet:pb-[2rem]'/>
              <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>{item.title}</h2>
              <p className='text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>





    </div>
    )
};