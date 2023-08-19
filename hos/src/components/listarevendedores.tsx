"use client"

import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import maletinha from '../../public/maletinha.svg'
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Scrollbar } from 'swiper/modules';

interface ListaProps {
    
}



export function Lista(props: ListaProps) {      

    const [filterValue, setFilterValue] = useState('');

    const revendas: any[] = [
        {
            title:'Inforsas',
            cidade:'Arapiraca - Alagoas',
           
        },
        {
            title:'Consultime Soluções',
            cidade:'Salvador - Bahia',
        },
        {
            title:'Contabilize Gestão',
            cidade:'Castelo - Espírito Santo',
            email:'nubia@contabilizegestao.com.br',
            telefone:'(26) 3542-5165',
        },
        {
            title:'Rafael Lucena Consultoria',
            cidade:'Guarapari - Espírito Santo',
            email:'rafaellucenaconsultoria@gmail.com',
            telefone:'(27) 9.9652-1589',
        },
        {
            title:'Lef Sistemas',
            cidade:'Várzea Grande - Mato Grosso',
            email:'ilson.ramos@lefsistemas.com.br',
            telefone:'(65) 3044-3573',
        },
        {
            title:'Andrade Silva Tecnologia',
            cidade:'Campo Grande - Mato Grosso do Sul',
            email:'paulo@infoin.com.br',
            telefone:'(67) 9.9129-0789',
        },
        {
            title:'Consulfar',
            cidade:'Belo Horizonte - Minas Gerais',
            email:'jadersondsousa@gmail.com',
            telefone:'(31) 9.8480-7777',
        },
        {
            title:'Softek Automação',
            cidade:'Governador Valadares - Minas Gerais',
            email:'softekautomacao@gmail.com',
            telefone:'(33) 3271-4427',
        },
        {
            title:'Pablo Gabriel Teixeira da Silva',
            cidade:'Monte Azul - Minas Gerais',
            email:'hosbh@hotmail.com',
            telefone:'(38) 3811-1908',
        },
        {
            title:'Relcach',
            cidade:'Patos de Minas - Minas Gerais',
            email:'realch@hotmail.com',
            telefone:'(34) 3061-5506',
        },
        {
            title:'Unisystem',
            cidade:'Ananindeua - Pará',
            email:'marcos.lobato1840@gmail.com',
            telefone:'(91) 9.8048-5701',
        },
        {
            title:'Integra Sistemas',
            cidade:'Santo André - Paraíba',
            email:'auxiliar.adm@integrasistemas.com.br',
            telefone:'(11) 4475.3712',
        },
        {
            title:'Inovar Automação',
            cidade:'Sapé - Paraíba',
            email:'zairofs@hotmail.com',
            telefone:'(11) 4475.3712',
        },
        {
            title:'Laz Digital',
            cidade:'Sertânia - Pernambucoa',
            email:'zuleilson@hotmail.com',
            telefone:'(87) 9.9647-8780',
        },
        {
            title:'Sysfarma',
            cidade:'Belford Roxo - Rio de Janeiro',
            email:'alessandro.lucc@gmail.com',
            telefone:'(21) 2761-1494',
        },
        {
            title:'Revenda Giovani',
            cidade:'Duque de Caxias - Rio de Janeiro',
            email:'giovaniaraujo@hotmail.com',
            telefone:'(21) 9.8001-5036',
        },
        {
            title:'Invicttus',
            cidade:'Natal - Rio Grande do Norte',
            email:'andrearaujo@matecnologia.com.br',
            telefone:'(84) 9.9118-7859',
        },
        {
            title:'Cleonides Fernandes de Brito',
            cidade:'Parnamirim - Rio Grande do Norte',
            email:'cleonidesjr@hotmail.com',
            telefone:'(84) 9.9630-5323',
        },
        {
            title:'Zupa System',
            cidade:'Capão da Canoa - Rio Grande do Sul',
            email:'zupasystem@gmail.com',
            telefone:'(51) 3622-1509',
        },
        {
            title:'BeEasy',
            cidade:'Farroupilha - Rio Grande do Sul',
            email:'pri@beeasy.com.br',
            telefone:'(54) 3698-9128',
        },
        {
            title:'Celulah',
            cidade:'Igrejinha - Rio Grande do Sul',
            email:'admcelulah@gmail.com',
            telefone:'(54) 9.9697-0208',
        },
        {
            title:'Base4 Sistemas Ltda',
            cidade:'Catanduva - São Paulo',
            email:'fernandofarinha@base4.com.br',
            telefone:'(17) 3524-2971',
        },
    ];
  
    const filteredData = revendas.filter(item => {
        const itemTitle = (item.title ?? '').toLowerCase();
        const itemCidade = (item.cidade ?? '').toLowerCase();
        const filterText = filterValue.toLowerCase();
        
        return itemTitle.includes(filterText) || itemCidade.includes(filterText);
    });

        return(



           <div className='bg-fundo'>
                <div className="pb-[2rem]">
                    <h3 className="text-grafite w-[15.5rem] text-[1.4rem] font-bold pb-[1.5rem] mx-auto">Encontre uma revenda próxima a você!</h3>
                    <input
                    type="text"
                    value={filterValue}
                    placeholder="Local ou revendedor"
                    className="w-[15rem] h-[2.3rem] flex justify-center mx-auto drop-shadow-lg pl-[1rem] rounded-xl text-[0.7rem] text-cinza"
                    onChange={e => setFilterValue(e.target.value)}
                    />
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
                    {filteredData.map(item => (
                        <><SwiperSlide >
                            <div key={item.id} className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                <h2  className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Inforsas</h2>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Arapiraca - Alagoas </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> inforsas@gmail.com </p>
                                <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (84) 9.9697-1337 </p>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                                <div key={item.id}className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
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
                                    <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Sysfarma</h2>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Belford Roxo - Rio de Janeiro</p>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> alessandro.lucc@gmail.com </p>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (21) 2761-1494</p>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                    <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                    <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Revenda Giovani</h2>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Duque de Caxias - Rio de Janeiro</p>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> giovaniaraujo@hotmail.com </p>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (21) 9.8001-5036</p>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                    <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                    <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Invicttus</h2>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Natal - Rio Grande do Norte</p>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> andrearaujo@matecnologia.com.br </p>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (84) 9.9118-7859</p>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                    <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                    <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Cleonides Fernandes de Brito</h2>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Parnamirim - Rio Grande do Norte</p>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> cleonidesjr@hotmail.com </p>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (84) 9.9630-5323</p>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                    <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                    <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Zupa System</h2>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Capão da Canoa - Rio Grande do Sul</p>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> zupasystem@gmail.com </p>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (51) 3622-1509</p>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                    <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                    <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">BeEasy</h2>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Farroupilha - Rio Grande do Sul</p>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> pri@beeasy.com.br </p>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (54) 3698-9128</p>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                    <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                    <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Celulah</h2>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Igrejinha - Rio Grande do Sul</p>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> admcelulah@gmail.com </p>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (54) 9.9697-0208</p>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
                                    <Image src={maletinha} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]" />
                                    <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">Base Sistemas Ltda</h2>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> Catanduva - São Paulo</p>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> fernandofarinha@base4.com.br </p>
                                    <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> (17) 3524-2971</p>
                                </div>
                            </SwiperSlide></>
                        ))}
                    </Swiper>
            </div>
        )
    }