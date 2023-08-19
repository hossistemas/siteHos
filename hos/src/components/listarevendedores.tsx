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
             <div className="pb-[2rem]">
                <h3 className="text-grafite w-[15.5rem] text-[1.4rem] font-bold pb-[1.5rem] mx-auto">Encontre uma revenda próxima a você!</h3>
                <input type="text" placeholder="Local ou revendedor" className="w-[15rem] h-[2.3rem] flex justify-center mx-auto drop-shadow-lg pl-[1rem] rounded-xl text-[0.7rem] text-cinza" />
            </div>
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
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Campo Grande - Mato Grosso do Sul </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> paulo@infoin.com.br </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (67) 9.9129-0789 </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Consulfar</h2>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Belo Horizonte - Minas Gerais </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> jadersondsousa@gmail.com </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (31) 9.8480-7777 </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Softek Automação</h2>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Governador Valadares - Minas Gerais</p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> softekautomacao@gmail.com </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (33) 3271-4427 </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Pablo Gabriel Teixeira da Silva</h2>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Monte Azul - Minas Gerais</p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> hosbh@hotmail.com </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (38) 3811-1908</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Relcach</h2>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Patos de Minas - Minas Gerais</p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> realch@hotmail.com </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (34) 3061-5506</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Unisystem</h2>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Ananindeua - Pará</p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> marcos.lobato1840@gmail.com </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (91) 9.8048-5701</p>
                            </div>
                        </SwiperSlide>
 
                        <SwiperSlide>
                            <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Integra Sistemas</h2>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Santo André - Paraíba</p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> auxiliar.adm@integrasistemas.com.br </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (11) 4475.3712</p>
                            </div>
                        </SwiperSlide>
  
                        <SwiperSlide>
                            <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Inovar Automação</h2>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Sapé - Paraíba</p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> zairofs@hotmail.com </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (11) 4475.3712</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Laz Digital</h2>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Sertânia - Pernambucoa</p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> zuleilson@hotmail.com </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (87) 9.9647-8780</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Laz Digital</h2>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Sertânia - Pernambucoa</p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> zuleilson@hotmail.com </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (87) 9.9647-8780</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
            </div>
        )
    }