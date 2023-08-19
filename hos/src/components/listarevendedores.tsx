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

interface Revenda {
    title: string;
    cidade: string;
    email?: string;
    telefone?: string;
  }

export function Lista(props: ListaProps) {      

    const [filterValue, setFilterValue] = useState('');

    const data: Revenda[] = [
        {
        
            title:'Inforsas',
            cidade:'Arapiraca - Alagoas',
            email:'inforsas@gmail.com',
            telefone:'(84) 9.9697-1337',
        },
        {
        
            title:'Consultime Soluções',
            cidade:'Salvador - Bahia',
            email:'consultimesolucoes@gmail.com',
            telefone:'(71) 3372-4545',
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
  
    const filteredData = data.filter(item => {
        const itemTitle = (item.title ?? '').toLowerCase();
        const itemCidade = (item.cidade ?? '').toLowerCase();
        const filterText = filterValue.toLowerCase();
        
        return itemTitle.includes(filterText) || itemCidade.includes(filterText);
    });

    const breakpoints = {
        1024: {
          slidesPerView: 5,
        },
        0: {
          slidesPerView: 2,  
        },
      };
        return(

           <div className='bg-fundo tablet:grid-cols-2 tablet:grid'>
                <div className="py-[2rem] tablet:mt-[2rem]">
                    <h3 className="text-grafite w-[15.5rem] text-[1.4rem] font-bold pb-[1.5rem] mx-auto tablet:text-[2.25rem] tablet:w-[24.3rem] ">Encontre uma revenda próxima a você!</h3>
                    <input
                    type="text"
                    value={filterValue}
                    placeholder="Local ou revendedor"
                    className="w-[15rem] h-[2.3rem] flex justify-center mx-auto drop-shadow-lg pl-[1rem] rounded-xl text-[0.7rem] text-cinza tablet:w-[24rem] tablet:h-[3.6rem] tablet:text-[1rem] "
                    onChange={e => setFilterValue(e.target.value)}
                    />
        
                </div>
            <Swiper
                    direction={'vertical'}
                    breakpoints={breakpoints}
                    scrollbar={{
                        hide: true,
                    }}
                    spaceBetween={1}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Scrollbar]}
                    className="mySwiper h-[360px] tablet:w-[500px] tablet:h-[1000px] bg-fundo tablet:col-start-1"
                    >
                           {filteredData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg tablet:w-[24rem] tablet:h-[11rem]">
              <Image
                src={maletinha}
                alt=""
                className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem] tablet:w-[1.5rem] tablet:h-[2.5rem]"
              />
              <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem] tablet:text-[1.5rem]">
                {item.title}
              </h2>
              <p className="text-[0.6rem] text-cinza ml-[1.35rem] tablet:text-[0.8rem]">
                <span className="text-grafite font-medium">Cidade:</span>{' '}
                {item.cidade}
              </p>
              {item.email && (
                <p className="text-[0.6rem] text-cinza ml-[1.35rem] tablet:text-[0.8rem]">
                  <span className="text-grafite font-medium">E-mail:</span>{' '}
                  {item.email}
                </p>
              )}
              {item.telefone && (
                <p className="text-[0.6rem] text-cinza ml-[1.35rem] tablet:text-[0.8rem]">
                  <span className="text-grafite font-medium">Telefone:</span>{' '}
                  {item.telefone}
                </p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='bg-cinza tablet:w-1 tablet:h-[70rem] tablet:ml-[-3rem] tablet:mt-[-13rem] tablet:rounded-full'></div>
    </div>
            
        )
    }