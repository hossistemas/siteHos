'use client'

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import estrelas from '../../public/estrelas.svg'
import aspas from '../../public/aspas.svg'

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

interface DepoimentosProps {
    
}



export function Depoimentos(props: DepoimentosProps) {
    

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
            <div className='text-[1.25rem] pt-[3rem] text-center font-extrabold text-grafite leading-tight w-[16rem] flex mx-auto pb-[2rem] tablet:w-[41.12rem] tablet:text-[2rem] tablet:pt-[10rem]'>
                <h2>Já ajudamos <span className='text-vermelho'> centenas de farmácias</span> e drogarias a descomplicar suas rotinas. </h2>
             </div>
                <Swiper
                    modules={[Pagination, Navigation]}
                    breakpoints={breakpoints}
                    spaceBetween={20}
                    navigation={isScreenWideEnough}
                    pagination={{ clickable: true }}      
                    className="mySwiper bg-fundo w-[300px] flex justify-center items-center mx-auto tablet:w-[1160px] ">
                
                <SwiperSlide>
                    <div  className=' w-[17.7rem] h-[14rem] mb-[4rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[22rem] tablet:h-[15rem]'>
                        <Image src={estrelas} alt='' className='flex ml-[10rem] pt-[3rem] w-[4.3rem] tablet:w-[6rem]  tablet:ml-[14rem]'/>
                        <h2 className='text-left text-[1.2rem]  text-grafite ml-[2rem] mt-[-1.2rem] font-bold tablet:text-[1.5rem] tablet:mt-[-1.5rem] '>Valfarma</h2>
                        <Image src={aspas} alt='' className='flex w-[2rem] ml-[2rem] mt-2 tablet:w-[2.6rem]'/>
                        <p className='text-left w-[12rem]  text-[0.8rem] font-medium text-grafite ml-[4rem] mt-[-1rem] tablet:text-[1rem] tablet:w-[15rem] tablet:flex tablet:ml-[5rem]'>Simplesmente o melhor sistema de gestão que ja trabalhei. Atende todas as demandas das minhas drogarias.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div  className=' w-[17.7rem] h-[14rem] mb-[4rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[22rem] tablet:h-[15rem]'>
                        <Image src={estrelas} alt='' className='flex ml-[10rem] pt-[3rem] w-[4.3rem] tablet:w-[6rem]  tablet:ml-[14rem]'/>
                        <h2 className='text-left text-[1.2rem]  text-grafite ml-[2rem] mt-[-1.2rem] font-bold tablet:text-[1.5rem] tablet:mt-[-1.5rem] '>Valfarma</h2>
                        <Image src={aspas} alt='' className='flex w-[2rem] ml-[2rem] mt-2 tablet:w-[2.6rem]'/>
                        <p className='text-left w-[12rem]  text-[0.8rem] font-medium text-grafite ml-[4rem] mt-[-1rem] tablet:text-[1rem] tablet:w-[15rem] tablet:flex tablet:ml-[5rem]'>Simplesmente o melhor sistema de gestão que ja trabalhei. Atende todas as demandas das minhas drogarias.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div  className=' w-[17.7rem] h-[14rem] mb-[4rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[22rem] tablet:h-[15rem]'>
                        <Image src={estrelas} alt='' className='flex ml-[10rem] pt-[3rem] w-[4.3rem] tablet:w-[6rem]  tablet:ml-[14rem]'/>
                        <h2 className='text-left text-[1.2rem]  text-grafite ml-[2rem] mt-[-1.2rem] font-bold tablet:text-[1.5rem] tablet:mt-[-1.5rem] '>Valfarma</h2>
                        <Image src={aspas} alt='' className='flex w-[2rem] ml-[2rem] mt-2 tablet:w-[2.6rem]'/>
                        <p className='text-left w-[12rem]  text-[0.8rem] font-medium text-grafite ml-[4rem] mt-[-1rem] tablet:text-[1rem] tablet:w-[15rem] tablet:flex tablet:ml-[5rem]'>Simplesmente o melhor sistema de gestão que ja trabalhei. Atende todas as demandas das minhas drogarias.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div  className=' w-[17.7rem] h-[14rem] mb-[4rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[22rem] tablet:h-[15rem]'>
                        <Image src={estrelas} alt='' className='flex ml-[10rem] pt-[3rem] w-[4.3rem] tablet:w-[6rem]  tablet:ml-[14rem]'/>
                        <h2 className='text-left text-[1.2rem]  text-grafite ml-[2rem] mt-[-1.2rem] font-bold tablet:text-[1.5rem] tablet:mt-[-1.5rem] '>Valfarma</h2>
                        <Image src={aspas} alt='' className='flex w-[2rem] ml-[2rem] mt-2 tablet:w-[2.6rem]'/>
                        <p className='text-left w-[12rem]  text-[0.8rem] font-medium text-grafite ml-[4rem] mt-[-1rem] tablet:text-[1rem] tablet:w-[15rem] tablet:flex tablet:ml-[5rem]'>Simplesmente o melhor sistema de gestão que ja trabalhei. Atende todas as demandas das minhas drogarias.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div  className=' w-[17.7rem] h-[14rem] mb-[4rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[22rem] tablet:h-[15rem]'>
                        <Image src={estrelas} alt='' className='flex ml-[10rem] pt-[3rem] w-[4.3rem] tablet:w-[6rem]  tablet:ml-[14rem]'/>
                        <h2 className='text-left text-[1.2rem]  text-grafite ml-[2rem] mt-[-1.2rem] font-bold tablet:text-[1.5rem] tablet:mt-[-1.5rem] '>Valfarma</h2>
                        <Image src={aspas} alt='' className='flex w-[2rem] ml-[2rem] mt-2 tablet:w-[2.6rem]'/>
                        <p className='text-left w-[12rem]  text-[0.8rem] font-medium text-grafite ml-[4rem] mt-[-1rem] tablet:text-[1rem] tablet:w-[15rem] tablet:flex tablet:ml-[5rem]'>Simplesmente o melhor sistema de gestão que ja trabalhei. Atende todas as demandas das minhas drogarias.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div  className=' w-[17.7rem] h-[14rem] mb-[4rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[22rem] tablet:h-[15rem]'>
                        <Image src={estrelas} alt='' className='flex ml-[10rem] pt-[3rem] w-[4.3rem] tablet:w-[6rem]  tablet:ml-[14rem]'/>
                        <h2 className='text-left text-[1.2rem]  text-grafite ml-[2rem] mt-[-1.2rem] font-bold tablet:text-[1.5rem] tablet:mt-[-1.5rem] '>Valfarma</h2>
                        <Image src={aspas} alt='' className='flex w-[2rem] ml-[2rem] mt-2 tablet:w-[2.6rem]'/>
                        <p className='text-left w-[12rem]  text-[0.8rem] font-medium text-grafite ml-[4rem] mt-[-1rem] tablet:text-[1rem] tablet:w-[15rem] tablet:flex tablet:ml-[5rem]'>Simplesmente o melhor sistema de gestão que ja trabalhei. Atende todas as demandas das minhas drogarias.</p>
                    </div>
                </SwiperSlide>          
            </Swiper>
    </div>
      )
    }