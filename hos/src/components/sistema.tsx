'use client'

import Image from 'next/image'
import React from 'react';
import lucro from '../../public/Lucro.svg'
import arrow from '../../public/arrowRight.svg'
import { CardSistema } from './cardSistema';
import { useState } from 'react';
import { Carousel  } from '@mantine/carousel';
import { rem, MantineProvider, createStyles } from '@mantine/core';

interface SistemaProps {
}



export function Sistema(props: SistemaProps){
     
    return (
    <Carousel
    className='bg-fundo' 
        maw="auto"
        mx="auto"
        withIndicators
        height={300}
        styles={{
            
        indicator: { 
            width: rem(12),
            height: rem(8),
            transition: 'width 500ms ease',

            '&[data-active]': {
            width: rem(50),
            backgroundColor: "grey"
            },
        },
        }}
    >
    <Carousel.Slide >
        <CardSistema  
        img={lucro}
        titulo={'Maximize sua margem de lucro'}
        texto={'Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.'}/>
    </Carousel.Slide>

    <Carousel.Slide >
        <CardSistema  
        img={lucro}
        titulo={'Maximize sua margem de lucro'}
        texto={'Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.'}/>
    </Carousel.Slide>
    

   
    </Carousel>
    );
}