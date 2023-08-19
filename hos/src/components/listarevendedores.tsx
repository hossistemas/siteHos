'use client'

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import maletinha from '../../public/maletinha.svg'
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Scrollbar } from 'swiper/modules';

interface ListaProps {
    
}



export function Lista(props: ListaProps) {      

        return(



           <div className='bg-fundo'>
            <Swiper
                    direction={'vertical'}
                    slidesPerView={5}
                    scrollbar={{
                        hide: true,
                    }}
                    spaceBetween={1}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Scrollbar]}
                    className="mySwiper w-[500px] h-[1000px] bg-red-500"
                >
                        <SwiperSlide>
                            <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Inforsas</h2>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Arapiraca - Alagoas </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> inforsas@gmail.com </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (84) 9.9697-1337 </p>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Consultime Soluções</h2>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Salvador - Bahia</p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> consultimesolucoes@gmail.com</p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (71) 3372-4545 </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Contabilize Gestão</h2>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Castelo - Espírito Santo </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> nubia@contabilizegestao.com.br </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (26) 3542-5165 </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Rafael Lucena Consultoria</h2>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Guarapari - Espírito Santo </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> rafaellucenaconsultoria@gmail.com </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (27) 9.9652-1589 </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Lef Sistemas</h2>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Várzea Grande - Mato Grosso </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> ilson.ramos@lefsistemas.com.br </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (65) 3044-3573 </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Andrade Silva Tecnologia</h2>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Várzea Grande - Mato Grosso </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> ilson.ramos@lefsistemas.com.br </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (65) 3044-3573 </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
            </div>
        )
    }