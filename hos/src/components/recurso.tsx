'use client'

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import vendas from '../../public/Vendas.svg'
import inteligente from '../../public/Inteligente.svg'
import PBM from '../../public/PBMs.svg'

import hosreplicador from '../../public/hosreplicador.svg'
import motoboy from '../../public/appmotoboy.svg'
import bling from '../../public/integracaobling.svg'
import ecommerce from '../../public/appecommerce.svg'
import tributario from '../../public/hostributario.svg'
import backup from '../../public/hoscloudbackup.svg'
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

interface RecursoProps {
    
}



export function Recurso(props: RecursoProps) {
    

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
                <h2>Recursos integrados que simplificam suas tarefas diárias. </h2>
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
                        <Image src={hosreplicador} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[6rem] tablet:pt-[4rem] tablet:pb-[2rem]'/>
                        <h2 className='text-center py-1 text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>HOS Replicador</h2>
                        <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Integração direta entre lojas, sem a necessidade de uma VPN.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={motoboy} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[6rem] tablet:pt-[4.3rem] tablet:pb-[2rem]'/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>App Motoboy</h2>
                        <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Aplicativo que permite rastrear as entregas e localizar o motoboy em tempo real.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={bling} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[5rem] tablet:pt-[5rem] tablet:pb-[2rem]'/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Integração Bling</h2>
                        <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda seus produtos em várias plataformas como Magalu, Mercado Livre, Shopee, etc.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={ecommerce} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[5rem] tablet:pt-[4.3rem] tablet:pb-[2rem]'/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>App E-commerce</h2>
                        <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Aplicativo e site personalizados, com integração ao sistema e design exclusivo da sua farmácia.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={tributario} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[5rem] tablet:pt-[4.5rem] tablet:pb-[2rem]'/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>HOS Tributário</h2>
                        <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Ajuste tributário personalizado para sua farmácia, garantindo segurança, economia e a correta tributação de cada produto.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                        <Image src={backup} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[5rem] tablet:pt-[6.5rem] tablet:pb-[2rem]'/>
                        <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>HOSCloud Backup</h2>
                        <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Mantenha seus dados seguros na nuvem, evitando riscos como sequestro de dados, vírus e perda de informações.</p>
                    </div>
                </SwiperSlide>

            </Swiper>
    </div>
      )
    }