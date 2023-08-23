'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import estrelas from '../../public/estrelas.svg'
import aspas from '../../public/aspas.svg'
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation, FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';

interface DepoimentosProps {
    
}



export function Depoimentos(props: DepoimentosProps) {
    

      
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
                    
                    breakpoints={breakpoints}
                    spaceBetween={20}
                    freeMode={true}
                    scrollbar={true}
                    mousewheel={true}
                    pagination={{
                        type: 'progressbar',
                      }}
                      navigation={true}
                      modules={[FreeMode, Scrollbar, Mousewheel,Pagination, Navigation]}       
                    className="mySwiper bg-fundo w-[300px] flex justify-center items-center mx-auto tablet:w-[1160px]  ">
                
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
                        <h2 className='text-left text-[1.2rem]  text-grafite ml-[2rem] mt-[-1.2rem] font-bold tablet:text-[1.5rem] tablet:mt-[-1.5rem] '>Roberto</h2>
                        <Image src={aspas} alt='' className='flex w-[2rem] ml-[2rem] mt-2 tablet:w-[2.6rem]'/>
                        <p className='text-left w-[12rem]  text-[0.8rem] font-medium text-grafite ml-[4rem] mt-[-1rem] tablet:text-[1rem] tablet:w-[15rem] tablet:flex tablet:ml-[5rem]'>Sistema top, só tive controle e gestão depois q mudei para a HOS sistemas, um sistema completo, bacana pois tem tudo que existe de inovador!</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div  className=' w-[17.7rem] h-[14rem] mb-[4rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[22rem] tablet:h-[15rem]'>
                        <Image src={estrelas} alt='' className='flex ml-[10rem] pt-[3rem] w-[4.3rem] tablet:w-[6rem]  tablet:ml-[14rem]'/>
                        <h2 className='text-left text-[1.2rem]  text-grafite ml-[2rem] mt-[-1.2rem] font-bold tablet:text-[1.5rem] tablet:mt-[-1.5rem] '>Luciana</h2>
                        <Image src={aspas} alt='' className='flex w-[2rem] ml-[2rem] mt-2 tablet:w-[2.6rem]'/>
                        <p className='text-left w-[12rem]  text-[0.8rem] font-medium text-grafite ml-[4rem] mt-[-1rem] tablet:text-[1rem] tablet:w-[15rem] tablet:flex tablet:ml-[5rem]'>Minha experiência tem sido ótima, troquei a 3 anos o antigo pela HOS e estou muito satisfeita.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div  className=' w-[17.7rem] h-[14rem] mb-[4rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[22rem] tablet:h-[15rem]'>
                        <Image src={estrelas} alt='' className='flex ml-[10rem] pt-[3rem] w-[4.3rem] tablet:w-[6rem]  tablet:ml-[14rem]'/>
                        <h2 className='text-left text-[1.2rem]  text-grafite ml-[2rem] mt-[-1.2rem] font-bold tablet:text-[1.5rem] tablet:mt-[-1.5rem] '>Marilva</h2>
                        <Image src={aspas} alt='' className='flex w-[2rem] ml-[2rem] mt-2 tablet:w-[2.6rem]'/>
                        <p className='text-left w-[12rem]  text-[0.8rem] font-medium text-grafite ml-[4rem] mt-[-1rem] tablet:text-[1rem] tablet:w-[15rem] tablet:flex tablet:ml-[5rem]'>Sempre muito bem atendida, soluções das solicitações rápidas. Cliente desde 1999. Satisfeita, super indico.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div  className=' w-[17.7rem] h-[14rem] mb-[4rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[22rem] tablet:h-[15rem]'>
                        <Image src={estrelas} alt='' className='flex ml-[10rem] pt-[3rem] w-[4.3rem] tablet:w-[6rem]  tablet:ml-[14rem]'/>
                        <h2 className='text-left text-[1.2rem]  text-grafite ml-[2rem] mt-[-1.2rem] font-bold tablet:text-[1.5rem] tablet:mt-[-1.5rem] '>Rodrigo</h2>
                        <Image src={aspas} alt='' className='flex w-[2rem] ml-[2rem] mt-2 tablet:w-[2.6rem]'/>
                        <p className='text-left w-[12rem]  text-[0.8rem] font-medium text-grafite ml-[4rem] mt-[-1rem] tablet:text-[1rem] tablet:w-[15rem] tablet:leading-tight tablet:flex tablet:ml-[5rem]'>Trabalhamos com o sistema da Hos há pelo menos 25 anos, somos fãs! Principalmente pelo atendimento! Equipe sempre comprometida em entregar a melhor solução para os clientes!</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div  className=' w-[17.7rem] h-[14rem] mb-[4rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[22rem] tablet:h-[15rem]'>
                        <Image src={estrelas} alt='' className='flex ml-[10rem] pt-[3rem] w-[4.3rem] tablet:w-[6rem]  tablet:ml-[14rem]'/>
                        <h2 className='text-left text-[1.2rem]  text-grafite ml-[2rem] mt-[-1.2rem] font-bold tablet:text-[1.5rem] tablet:mt-[-1.5rem] '>Geraldo</h2>
                        <Image src={aspas} alt='' className='flex w-[2rem] ml-[2rem] mt-2 tablet:w-[2.6rem]'/>
                        <p className='text-left w-[12rem]  text-[0.8rem] font-medium text-grafite ml-[4rem] mt-[-1rem] tablet:text-[1rem] tablet:w-[15rem] tablet:flex tablet:ml-[5rem]'>Sistema muito bom, interativo, muitos relatórios. Já trabalho com ele a mais de 10 anos.</p>
                    </div>
                </SwiperSlide>          
            </Swiper>
    </div>
      )
    }