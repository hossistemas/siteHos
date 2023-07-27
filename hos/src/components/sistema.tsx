'use client'

import React from 'react';
import vendas from '../../public/Vendas.svg';
import lucro from '../../public/Lucro.svg';
import sngpc from '../../public/SNGPC.svg';
import inteligente from '../../public/inteligente.svg';
import pbm from '../../public/PBMs.svg';
import fidelizacao from '../../public/Fidelização.svg';
import atualizacao from '../../public/Atualização.svg';
import suporte from '../../public/Suporte.svg';
import anos from '../../public/anos.svg';


import { CardSistema } from './cardSistema';
import { Carousel  } from '@mantine/carousel';
import { rem } from '@mantine/core';

interface SistemaProps {
}



export function Sistema(props: SistemaProps){
     
    return (
    <>
    <Carousel
    className='bg-fundo tablet:hidden' 
        maw="auto"
        mx="auto"
        withIndicators
        height={300}
        styles={{
            
        indicator: { 
            color: "gray",
            width: rem(25),
            height: rem(8),           
            transition: 'width 500ms ease',

            '&[data-active]': {
            width: rem(30),
            backgroundColor: "grey"
            },
        },
        }}
    >

    <Carousel.Slide>
        <CardSistema  
        img={lucro}
        titulo={'Maximize sua margem de lucro'}
        texto={'Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.'}/>
    </Carousel.Slide>

    <Carousel.Slide className='' >
    <CardSistema  
        img={vendas}
        titulo={'Prioridade de Vendas'}
        texto={'Cadastre seus produtos e estabeleça cores para indicar as prioridades de vendas (verde, amarelo e vermelho), de acordo com a margem de lucro, vencimento e promoções.'}/>
    </Carousel.Slide>

    
    <Carousel.Slide className=''>
        <CardSistema  
        img={sngpc}
        titulo={'Integração com SNGPC'}
        texto={'Aprimore a gestão de medicamentos controlados. Agilize a movimentação, acompanhe envios e entregas e mantenha o controle de inventário atualizado.'}/>
    </Carousel.Slide>

    <Carousel.Slide className=''>
        <CardSistema  
        img={inteligente}
        titulo={'Associação Inteligente'}
        texto={' Utiliza o histórico de vendas para identificar tendências e oferece produtos complementares mais adequados para cada atendimento, maximizando suas vendas.'}/>
    </Carousel.Slide>

    <Carousel.Slide className=''>
        <CardSistema  
        img={pbm}
        titulo={'Integração com PBMs'}
        texto={'Consulte de forma atualizada o PBM, gerencie a quantidade de itens vendidos e obtenha descontos dos fabricantes, proporcionando ainda mais benefícios para sua farmácia.'}/>
    </Carousel.Slide>


    <Carousel.Slide className=''>
        <CardSistema  
        img={fidelizacao}
        titulo={'Sistema de Fidelização'}
        texto={'Possibilita a gestão dos relacionamentos para usuários de medicamentos contínuos, bem como a configuração de plano de fidelidade específico para sua realidade.'}/>
    </Carousel.Slide>

    <Carousel.Slide className=''>
        <CardSistema  
        img={atualizacao}
        titulo={'Atualização Constante'}
        texto={'Os softwares e programas da HOS são atualizados constantemente, adequando rotinas fiscais e boas práticas de gestão.'}/>
    </Carousel.Slide>

    <Carousel.Slide className=''>
        <CardSistema  
        img={suporte}
        titulo={'Suporte Ágil'}
        texto={'Na HOS Sistemas você conta com uma ampla equipe de técnicos para lhe atender de maneira simples e rápida.'}/>
    </Carousel.Slide>

    <Carousel.Slide className=''>
        <CardSistema  
        img={anos}
        titulo={'28 anos de mercado'}
        texto={'Trabalhe com a segurança de um parceiro com mais de 28 anos de experiência.'}/>
    </Carousel.Slide>
   
    </Carousel>




<Carousel
        className='bg-fundo tablet:visible tablet:pt-[5rem]'
        maw="auto"
        mx="auto"
        withIndicators
        height={330}
        styles={{
            
        indicator: { 
            color: "grey",
            width: rem(25),
            height: rem(8),           
            transition: 'width 500ms ease',

            '&[data-active]': {
            width: rem(30),
            backgroundColor: "grey"
            },
        },
        }}
    >

    <Carousel.Slide className='flex'>
        <CardSistema  
        img={lucro}
        titulo={'Maximize sua margem de lucro'}
        texto={'Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.'}/>

        <CardSistema  
        img={vendas}
        titulo={'Prioridade de Vendas'}
        texto={'Cadastre seus produtos e estabeleça cores para indicar as prioridades de vendas (verde, amarelo e vermelho), de acordo com a margem de lucro, vencimento e promoções.'}/>
    
        <CardSistema  
        img={sngpc}
        titulo={'Integração com SNGPC'}
        texto={'Aprimore a gestão de medicamentos controlados. Agilize a movimentação, acompanhe envios e entregas e mantenha o controle de inventário atualizado.'}/>
    </Carousel.Slide>



    <Carousel.Slide className='flex'>
        <CardSistema  
        img={inteligente}
        titulo={'Associação Inteligente'}
        texto={' Utiliza o histórico de vendas para identificar tendências e oferece produtos complementares mais adequados para cada atendimento, maximizando suas vendas.'}/>
    
        <CardSistema  
        img={pbm}
        titulo={'Integração com PBMs'}
        texto={'Consulte de forma atualizada o PBM, gerencie a quantidade de itens vendidos e obtenha descontos dos fabricantes, proporcionando ainda mais benefícios para sua farmácia.'}/>
    
        <CardSistema  
        img={fidelizacao}
        titulo={'Sistema de Fidelização'}
        texto={'Possibilita a gestão dos relacionamentos para usuários de medicamentos contínuos, bem como a configuração de plano de fidelidade específico para sua realidade.'}/>
    </Carousel.Slide>

    <Carousel.Slide className='flex'>
        <CardSistema  
        img={atualizacao}
        titulo={'Atualização Constante'}
        texto={'Os softwares e programas da HOS são atualizados constantemente, adequando rotinas fiscais e boas práticas de gestão.'}/>
    
        <CardSistema  
        img={suporte}
        titulo={'Suporte Ágil'}
        texto={'Na HOS Sistemas você conta com uma ampla equipe de técnicos para lhe atender de maneira simples e rápida.'}/>

        <CardSistema  
        img={anos}
        titulo={'28 anos de mercado'}
        texto={'Trabalhe com a segurança de um parceiro com mais de 28 anos de experiência.'}/>
    
    </Carousel.Slide>

    </Carousel>
</>
    );
}