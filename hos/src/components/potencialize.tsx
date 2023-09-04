'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react';
import arrowRight from '../../public/arrowRight.svg'

interface PotencializeProps {
    
}

interface CarouselItem {
  image: string;
  title: string;
  text: string;
}

export function Potencialize(props: PotencializeProps) {
  const images: CarouselItem[] = [
    {
      image: '/estoque.svg',
      title: 'Controle de Estoques',
      text: 'Previna a falta de produtos em estoque, calcule a quantidade ideal para evitar excessos ou escassez.',
    },
    {
      image: '/promocoes.svg',
      title: 'Gerenciador de Promoções',
      text: 'Automatize promoções, monitore desempenho, administre operações e impulsione suas vendas.',
    },
    {
      image: '/integrado.svg',
      title: 'Integrado ao SNGPC',
      text: 'Realize o controle rigoroso das vendas de medicamentos do controle especial.',
    },  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const totalPages = Math.ceil(images.length / itemsPerSlide);


  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerSlide + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerSlide) % images.length);
  };


    return( 
    
    <div className="relative bg-fundo pb-[35rem] tablet:pb-[27rem]">
        <div className='text-[1.25rem] pt-[5rem]  -mt-[5rem] text-center font-extrabold text-grafite leading-tight w-[18rem] flex mx-auto pb-[2rem] tablet:text-center tablet:w-[45rem] tablet:text-[2rem] tablet:pb-[4rem]'>
                <h2 className='mx-auto'>Potencialize o gerenciamento da sua farmácia</h2>
            </div>
      <div className="flex mx-auto h-[19rem]  tablet:h-[1rem] tablet:w-[1000px] ">
        <div className="grid mx-auto grid-cols-1 tablet:flex tablet:gap-x-2 tablet:mx-auto tablet:justify-center tablet:w-1/3">
          {images.map((item, index) => (
            <div key={index} className={`mx-auto w-[16rem] h-[15rem] my-2 items-center bg-white  drop-shadow-lg rounded-xl tablet:w-[20.5rem] tablet:h-[22.3rem] ${index === currentIndex ? 'active' : ''} ${index === 2 ? 'tablet:pt-[1.2rem]' : ''} `} >
              <Image src={item.image} alt={`Image ${index + 1}`} width={80} height={100} className='flex mx-auto pt-[2rem]  tablet:w-[7rem] tablet:mt-[1rem]'/>
              <h2 className='text-center text-[1rem] text-grafite font-bold pt-4 tablet:text-[1.5rem] tablet:px-[1.5rem] tablet:pb-[0.5rem] tablet:pt-[1.5rem] tablet:w-[20rem]'>{item.title}</h2>
              <p className='text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[16rem] tablet:flex tablet:mx-auto'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>




    </div>
    )
};