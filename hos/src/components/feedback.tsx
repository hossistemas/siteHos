'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react';
import arrowRight from '../../public/arrowRight.svg'

interface FeedbackProps {
    
}


const images = [
    { image:'/estrelas.svg',
    title: 'Valfarma',
    text: 'Simplesmente o melhor sistema de gestão que ja trabalhei. Atende todas as demandas das minhas drogarias.'
    },
    { image:'/estrelas.svg',
    title: 'Roberto',
    text: 'Sistema top, só tive controle e gestão depois q mudei para a HOS sistemas, um sistema completo, bacana pois tem tudo que existe de inovador!'
    },
    { image:'/estrelas.svg',
    title: 'Luciana',
    text: 'Minha experiência tem sido ótima, troquei a 3 anos o antigo pela HOS e estou muito satisfeita.'
    },
    { image:'/estrelas.svg',
    title: 'Marilva',
    text: 'Sempre muito bem atendida, soluções das solicitações rápidas. Cliente desde 1999. Satisfeita, super indico.'
    },
    { image:'/estrelas.svg',
    title: 'Rodrigo',
    text: 'Trabalhamos com o sistema da Hos há pelo menos 25 anos, somos fãs! Principalmente pelo atendimento! Equipe sempre comprometida em entregar a melhor solução para os clientes!'
    },
    { image:'/estrelas.svg',
    title: 'Geraldo',
    text: 'Sistema muito bom, interativo, muitos relatórios. Já trabalho com ele a mais de 10 anos.'
    },
    
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

        <div className="carousel overflow-hidden  flex mx-auto h-[19rem] tablet:h-[26rem] tablet:w-[1090px] ">
        <div className="carousel-slides flex transition-transform ease-in-out duration-300  tablet:w-1/3" style={{ transform: `translateX(-${currentIndex *( 100 / itemsPerSlide / totalPages)}%)` }}>
          {images.map((item, index) => (
            <div key={index} className={`carousel-slide flex-shrink-0 w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem] ${index === currentIndex ? 'active' : ''}`}>
              <Image src={item.image} alt={`Image ${index + 1}`} width={70} height={100} className='flex ml-[10rem] pt-[3.8rem]  tablet:w-[6rem] tablet:pt-[3rem] tablet:pb-[2rem]'/>
              <h2 className='text-left text-[1.1rem] text-grafite pl-[2rem] -mt-[1.5rem] font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>{item.title}</h2>
              <p className='text-left pl-[2rem] pr-[1.4rem] pt-[1rem] leading-tight text-[0.7rem] font-medium text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

        <div className="flex justify-center -mt-[0.4rem]   ">
            <button
            className=" bg-fundo mr-[1rem] border-2 rounded-full text-[24px] px-[0.5rem] py-[1rem] cursor-pointer hover:px-[0.6rem] hover:py-[1.1rem] hover:bg-magenta hover:transition hover:ease-in hover:duration-300 hover:border-0"
            onClick={prevSlide}
            >
            <Image src={arrowRight} alt='' className='rotate-180 w-[1rem] h-[1rem] mx-[0.4rem] hover:filter hover:grayscale '/>
            </button>
            <button
            className=" bg-fundo  border-2 rounded-full text-[24px] px-[0.5rem] py-[1rem] cursor-pointer  hover:px-[0.6rem] hover:py-[1.1rem] hover:bg-magenta hover:hover:transition hover:ease-in hover:duration-300 hover:border-0"
            onClick={nextSlide}
            >
            <Image src={arrowRight} alt='' className='w-[1rem] h-[1rem] mx-[0.4rem] '/>
            </button>
        </div>
    </div>
    )
};