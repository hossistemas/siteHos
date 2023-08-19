'use client'

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import lucro from '../../public/Lucro.svg'
import vendas from '../../public/Vendas.svg'
import SNGPC from '../../public/SNGPC.svg'
import inteligente from '../../public/Inteligente.svg'
import PBM from '../../public/PBMs.svg'
import fidelizacao from '../../public/Fidelização.svg'
import atualizacao from '../../public/Atualização.svg'
import suporte from '../../public/Suporte.svg'
import anos from '../../public/anos.svg'

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

interface MelhorsistemaProps {
    
}



export function Melhorsistema(props: MelhorsistemaProps) {
    

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
                        <Image src={lucro} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[6rem] tablet:pt-[4rem] tablet:pb-[2rem]'/>
                        <h2 className='text-center py-1 text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Maximize sua margem de lucro</h2>
                        <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={vendas} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[6rem] tablet:pt-[5rem] tablet:pb-[2rem]'/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Prioridade de Vendas</h2>
                        <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Cadastre seus produtos e estabeleça cores para indicar as prioridades de vendas (verde, amarelo e vermelho), de acordo com a margem de lucro, vencimento e promoções.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={SNGPC} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[5rem] tablet:pt-[4.3rem] tablet:pb-[2rem]'/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Integração com SNGPC</h2>
                        <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Aprimore a gestão de medicamentos controlados. Agilize a movimentação, acompanhe envios e entregas e mantenha o controle de inventário atualizado.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={inteligente} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[5rem] tablet:pt-[2.8rem] tablet:pb-[2rem]'/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Associação Inteligente</h2>
                        <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Utiliza o histórico de vendas para identificar tendências e oferece produtos complementares mais adequados para cada atendimento, maximizando suas vendas.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={PBM} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[5rem] tablet:pt-[4rem] tablet:pb-[2rem]'/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Integração com PBMs</h2>
                        <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Consulte de forma atualizada o PBM, gerencie a quantidade de itens vendidos e obtenha descontos dos fabricantes, proporcionando ainda mais benefícios para sua farmácia.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={fidelizacao} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[5rem] tablet:pt-[4rem] tablet:pb-[2rem]'/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Sistema de Fidelização</h2>
                        <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Possibilita a gestão dos relacionamentos para usuários de medicamentos contínuos, bem como a configuração de plano de fidelidade específico para sua realidade.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={atualizacao} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[5rem] tablet:pt-[2.8rem] tablet:pb-[2rem]'/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Atualização Constante</h2>
                        <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Possibilita a gestão dos relacionamentos para usuários de medicamentos contínuos, bem como a configuração de plano de fidelidade específico para sua realidade.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={suporte} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[5rem] tablet:pt-[3.5rem] tablet:pb-[2rem]'/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Suporte Ágil</h2>
                        <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Na HOS Sistemas você conta com uma ampla equipe de técnicos para lhe atender de maneira simples e rápida.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={anos} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[5rem] tablet:pt-[3.1rem] tablet:pb-[2rem]'/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>28 anos de mercado</h2>
                        <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Trabalhe com a segurança de um parceiro com mais de 28 anos de experiência.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
    </div>
      )
    }