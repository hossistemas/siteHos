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

interface CarouselItem {
    image: string;
    title: string;
    text: string;
  }

export function Recurso(props: RecursoProps) {
    const images: CarouselItem[] = [
        {
          image: '/hosreplicador.svg',
          title: 'HOS Replicador',
          text: 'Integração direta entre lojas, sem a necessidade de uma VPN.',
        },
        {
          image: '/appmotoboy.svg',
          title: 'App Motoboy',
          text: 'Aplicativo que permite rastrear as entregas e localizar o motoboy em tempo real.',
        },
        {
          image: '/integracaobling.svg',
          title: 'Integração Bling',
          text: ' Venda seus produtos em várias plataformas como Magalu, Mercado Livre, Shopee, etc.',
        },
        {
          image: '/appecommerce.svg',
          title: 'App E-commerce',
          text: 'Aplicativo e site personalizados, com integração ao sistema e design exclusivo da sua farmácia.',
        },
        {
          image: '/hostributario.svg',
          title: 'HOS Tributário',
          text: 'Ajuste tributário personalizado para sua farmácia, garantindo segurança, economia e a correta tributação de cada produto.',
        },  
        {
          image: '/hoscloudbackup.svg',
          title: ' HOSCloud Backup',
          text: 'Mantenha seus dados seguros na nuvem, evitando riscos como sequestro de dados, vírus e perda de informações.',
        },
        
      ];  

      
      const breakpoints = {
        1024: {
          slidesPerView: 3,
        },
        0: {
          slidesPerView: 1,  
        },
      };

      return(
        <>
          <div className='bg-fundo tablet:pb-[3rem] tablet:hidden'>
              <div className='text-[1.25rem] pt-[3rem] text-left font-extrabold text-grafite leading-tight w-[16rem] flex mx-auto pb-[2rem] tablet:text-center tablet:w-[42.4rem] tablet:text-[2rem]'>
                  <h2>Recursos integrados que simplificam suas tarefas diárias. </h2>
              </div>
              <Swiper
                  modules={[Pagination, Navigation]}
                  breakpoints={breakpoints}
                  spaceBetween={20}
                  navigation={true}
                  pagination={{ clickable: true }}
                  className="mySwiper bg-fundo w-[300px] flex justify-center items-center mx-auto tablet:w-[1110px]  ">

                  <SwiperSlide>
                      <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                          <Image src={hosreplicador} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[6rem] tablet:pt-[4rem] tablet:pb-[2rem]' />
                          <h2 className='text-center py-1 text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>HOS Replicador</h2>
                          <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Integração direta entre lojas, sem a necessidade de uma VPN.</p>
                      </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                          <Image src={motoboy} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[6rem] tablet:pt-[4.3rem] tablet:pb-[2rem]' />
                          <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>App Motoboy</h2>
                          <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Aplicativo que permite rastrear as entregas e localizar o motoboy em tempo real.</p>
                      </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                          <Image src={bling} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[5rem] tablet:pt-[5rem] tablet:pb-[2rem]' />
                          <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Integração Bling</h2>
                          <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda seus produtos em várias plataformas como Magalu, Mercado Livre, Shopee, etc.</p>
                      </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                          <Image src={ecommerce} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[5rem] tablet:pt-[4.3rem] tablet:pb-[2rem]' />
                          <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>App E-commerce</h2>
                          <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Aplicativo e site personalizados, com integração ao sistema e design exclusivo da sua farmácia.</p>
                      </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                          <Image src={tributario} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[5rem] tablet:pt-[4.5rem] tablet:pb-[2rem]' />
                          <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>HOS Tributário</h2>
                          <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Ajuste tributário personalizado para sua farmácia, garantindo segurança, economia e a correta tributação de cada produto.</p>
                      </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                          <Image src={backup} alt='' className='flex mx-auto pt-[2rem] w-[3rem] pb-3 tablet:w-[5rem] tablet:pt-[6.5rem] tablet:pb-[2rem]' />
                          <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>HOSCloud Backup</h2>
                          <p className='text-center text-[0.8rem] w-[14rem] mx-auto text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Mantenha seus dados seguros na nuvem, evitando riscos como sequestro de dados, vírus e perda de informações.</p>
                      </div>
                  </SwiperSlide>

              </Swiper>
          </div>

            <div className='bg-fundo hidden tablet:inline '>
                <div  className='bg-fundo w-full h-[69rem]'>
                    <div className='text-grafite font-bold tablet:bg-fundo tablet:w-[30rem] tablet:flex tablet:mx-auto tablet:leading-tight tablet:text-center tablet:text-[2rem] tablet:pb-[3.5rem]'>
                        <h2>Recursos integrados que simplificam suas tarefas diárias. </h2>
                    </div>

                    <div className="bg-fundo tablet:h-[26rem] tablet:w-full tablet:flex tablet:mx-auto tablet:items-center tablet:justify-center tablet:pt-[25rem]">
                    <div className="tablet:grid tablet:grid-cols-3 tablet:gap-x-8 tablet:gap-y-8">
  {images.map((item, index) => (
    <div
      key={index}
      className={`bg-white drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem] transition-all ease-in duration-1000 hover:bg-gradient-to-b to-magenta from-laranja ${
        index === 5 ? 'tablet:pt-[1.5rem]' : ''
      }`}
    >
      <div className="group">
                 <Image
                    src={item.image}
                    alt={`Image ${index + 1}`}
                    width={90}
                    height={150}
                    className={`flex mx-auto pt-[2rem] tablet:w-[7rem] tablet:pt-[4rem] tablet:pb-[2.5rem] filter group-hover:brightness-0 group-hover:grayscale group-hover:invert group-hover:transition-all group-houver:ease-in-out group-hover:duration-100 ${
                        index === 5 ? 'tablet:w-[8.5rem] tablet:pt-[2rem]' : ''
                    }`}
                    />
                    <h2 className="text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem] group-hover:text-white">
                    {item.title}
                    </h2>
                    <p className="text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[16.5rem] tablet:flex tablet:mx-auto group-hover:text-white">
                    {item.text}
                    </p>
                </div>
                </div>
            ))}
            </div>

                    </div>
                </div>
            </div>


</>
             )
           }