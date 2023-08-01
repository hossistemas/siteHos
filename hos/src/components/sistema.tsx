'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react';
import arrowRight from '../../public/arrowRight.svg'

interface SistemaProps {
    
}


const images = [
  {
    image: '/Lucro.svg',
    title: 'Maximize sua margem de lucro',
    text: 'Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.',
  },
  {
    image: '/Vendas.svg',
    title: 'Prioridade de Vendas',
    text: 'Cadastre seus produtos e estabeleça cores para indicar as prioridades de vendas (verde, amarelo e vermelho), de acordo com a margem de lucro, vencimento e promoções.',
  },
  {
    image: '/SNGPC.svg',
    title: 'Integração com SNGPC',
    text: 'Aprimore a gestão de medicamentos controlados. Agilize a movimentação, acompanhe envios e entregas e mantenha o controle de inventário atualizado.',
  },
  {
    image: '/Inteligente.svg',
    title: 'Associação Inteligente',
    text: 'Utiliza o histórico de vendas para identificar tendências e oferece produtos complementares mais adequados para cada atendimento, maximizando suas vendas.',
  },
  {
    image: '/PBMs.svg',
    title: 'Integração com PBMs',
    text: 'Consulte de forma atualizada o PBM, gerencie a quantidade de itens vendidos e obtenha descontos dos fabricantes, proporcionando ainda mais benefícios para sua farmácia.',
  },  
  {
    image: '/Fidelização.svg',
    title: 'Sistema de Fidelização',
    text: 'Possibilita a gestão dos relacionamentos para usuários de medicamentos contínuos, bem como a configuração de plano de fidelidade específico para sua realidade.',
  },
  

];


export function Sistema(props: SistemaProps){
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
        <div className='text-[1.25rem] pt-[3rem] text-left font-extrabold text-grafite leading-tight w-[16rem] flex mx-auto pb-[2rem] tablet:text-center tablet:w-[42.4rem] tablet:text-[2rem]'>
                <h2>Por que o <span className='text-vermelho'>HOS</span> é o melhor sistema para você? </h2>
            </div>
      <div className="carousel overflow-hidden tablet:w-[1200px] flex mx-auto">
        <div className="carousel-slides flex transition-transform ease-in-out duration-300 tablet:w-1/3" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((item, index) => (
            <div key={index} className={`carousel-slide flex-shrink-0 w-full ${index === currentIndex ? 'active' : ''}`}>
              <Image src={item.image} alt={`Image ${index + 1}`} width={250} height={210} className='flex mx-auto tablet:w-[25rem]'/>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

        <div className="flex justify-center -mt-[0.4rem]   ">
            <button
            className=" bg-fundo mr-[1rem] border-2 rounded-full text-[24px] px-[0.5rem] py-[1rem] cursor-pointer hover:bg-magenta hover:text-fundo hover:transition hover:ease-in hover:duration-300 hover:border-0"
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

        <div className="carousel-pagination flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => index).map((page) => (
          <button
            key={page}
            className={`pagination-item mx-1 w-4 h-4 rounded-full ${
              page === currentIndex / itemsPerSlide ? 'bg-magenta' : 'bg-laranja'
            }`}
            onClick={() => setCurrentIndex(page * itemsPerSlide)}
          />
        ))}
      </div>
    </div>
    )
};