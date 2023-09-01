'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react';
import simultanes from '../../public/simultaneas.png'
import pbm from '../../public/pbms.png'
import tef from '../../public/tef.png'

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
        <div className='text-[1.25rem] w-[15rem] text-center pt-[5rem] font-extrabold text-grafite leading-tight  flex mx-auto pb-[2rem] tablet:text-center tablet:w-[1024px] tablet:text-[2rem] tablet:pb-[4rem]'>
                <h2 className='mx-auto'>Soluções para sua drogaria render mais </h2>
            </div>
      <div className="grid grid-cols-1 h-[55rem] tablet:flex  tablet:w-[1000px] tablet:mx-auto tablet:justify-center tablet:h-auto tablet:pb-[3rem]">
        <div className=" tablet:flex tablet:justify-center tablet:w-[1000px]">
            <div  className=' w-[16rem] h-[15rem] mb-3 mx-auto justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[23.3rem] tablet:h-[23rem] tablet:mx-2'>
              <Image src={simultanes} alt='' className='w-[3.8rem] h-auto flex mx-auto pt-[2rem]  tablet:w-[5.8rem] tablet:pt-[3.5rem] tablet:pb-[2rem]'/>
              <h2 className='text-center text-[1rem] mt-[1.9rem] text-grafite font-bold tablet:text-[1.3rem] tablet:px-[1.5rem]  tablet:pb-[0.7rem]'>Vendas Simultâneas</h2>
              <p className='text-center text-[0.8rem] mt-[0.9rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:pb-[4.9rem] tablet:flex tablet:mx-auto'>Flexibilidade de usar múltiplas telas de vendas para consultar preços e atender clientes de forma simultânea.</p>
            </div>

            <div  className=' w-[16rem] h-[15rem] mb-3 mx-auto justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[23.3rem] tablet:h-[23rem]'>
              <Image src={pbm} alt='' className='w-[2rem] h-auto flex mx-auto pt-[2rem]  tablet:w-[3.8rem] tablet:pt-[3rem] tablet:pb-[1.2rem]'/>
              <h2 className='text-center text-[1rem] mt-[1.9rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[0.8rem]'>PBMS</h2>
              <p className='text-center text-[0.8rem] mt-[0.9rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Proporcionamos a integração com os principais Planos de Benefícios de Medicamentos (PBM) do mercado.</p>
            </div>

            <div  className=' w-[16rem] h-[15rem] mx-auto justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[23.3rem] tablet:h-[23rem] tablet:mx-2'>
              <Image src={tef} alt='' className='w-[2.2rem] h-auto flex mx-auto pt-[2rem]  tablet:w-[4.5rem] tablet:pt-[3rem] tablet:pb-[1.2rem]'/>
              <h2 className='text-center text-[1rem] mt-[1.9rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[0.8rem]'>TEF</h2>
              <p className='text-center text-[0.8rem] mt-[0.9rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Compras realizadas na maquininha são automaticamente registradas no nosso sistema.</p>
            </div>

           

           
        </div>
      </div>





    </div>
    )
};