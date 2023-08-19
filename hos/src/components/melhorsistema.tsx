'use client'

import React, { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import lucro from '../../public/Lucro.svg'
import vendas from '../../public/Vendas.svg'
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

interface MelhorsistemaProps {
    
}

interface CarouselItem {
  image: string;
  title: string;
  text: string;
}

export function Melhorsistema(props: MelhorsistemaProps) {
    
    const images: CarouselItem[] = [
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
      {
        image: '/Atualização.svg',
        title: 'Atualização Constante',
        text: 'Os softwares e programas da HOS são atualizados constantemente, adequando rotinas fiscais e boas práticas de gestão.',
      },
      {
        image: '/Suporte.svg',
        title: 'Suporte Ágil',
        text: 'Na HOS Sistemas você conta com uma ampla equipe de técnicos para lhe atender de maneira simples e rápida.',
      },
      {
        image: '/anos.svg',
        title: '28 anos de mercado',
        text: 'Trabalhe com a segurança de um parceiro com mais de 28 anos de experiência.',
      },]

      const isScreenWideEnough = window.innerWidth >= 1024;
      
      const breakpoints = {
        1024: {
          slidesPerView: 3,
        },
        0: {
          slidesPerView: 1,  
        },
      };

      return(
        <div className='bg-fundo'>
            <div className='text-[1.25rem] pt-[3rem] text-left font-extrabold text-grafite leading-tight w-[16rem] flex mx-auto pb-[2rem] tablet:text-center tablet:w-[42.4rem] tablet:text-[2rem]'>
                <h2>Por que o <span className='text-vermelho'>HOS</span> é o melhor sistema para você? </h2>
            </div>
                <Swiper
                    modules={[Pagination, Navigation]}
                    breakpoints={breakpoints}
                    spaceBetween={20}
                    navigation={isScreenWideEnough}
                    pagination={{ clickable: true }}      
                    className="mySwiper bg-fundo w-[300px] flex justify-center items-center mx-auto tablet:w-[1110px] ">
                
                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={lucro} alt='' className='flex mx-auto pt-[2rem]  tablet:w-[6rem] tablet:pt-[4rem] tablet:pb-[2rem]'/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Maximize sua margem de lucro</h2>
                        <p className='text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={vendas} alt='' className='flex mx-auto pt-[2rem]  tablet:w-[6rem] tablet:pt-[5rem] tablet:pb-[2rem]'/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Prioridade de Vendas</h2>
                        <p className='text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={lucro} alt=''/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Maximize sua margem de lucro</h2>
                        <p className='text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={lucro} alt=''/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Maximize sua margem de lucro</h2>
                        <p className='text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={lucro} alt=''/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Maximize sua margem de lucro</h2>
                        <p className='text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={lucro} alt=''/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Maximize sua margem de lucro</h2>
                        <p className='text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={lucro} alt=''/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Maximize sua margem de lucro</h2>
                        <p className='text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={lucro} alt=''/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Maximize sua margem de lucro</h2>
                        <p className='text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={lucro} alt=''/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Maximize sua margem de lucro</h2>
                        <p className='text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
    </div>
      )
    }