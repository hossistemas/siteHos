'use client'

import Image from 'next/image'
import React from 'react';
import lucro from '../../public/Lucro.svg'
import arrow from '../../public/arrowRight.svg'
import { CardSistema } from './cardSistema';
import { useState } from 'react';


interface SistemaProps {

}


export function Sistema(props: SistemaProps){
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevCard =() =>{
        const isFirstCard = currentIndex === 0;
        const newIndex = isFirstCard ? cards.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }
    const nextCard =() =>{}

    const cards = [

        {
          cardUm:  
          <div className='bg-white  flex justify-center items-center mx-auto drop-shadow-lg w-[16.375rem] h-[15.437rem] rounded-md  '>
            <div >
                  <Image src={ lucro } alt='' className='w-[3.8rem] h-auto flex justify-center items-center mx-auto mt-[2rem] mb-[1.8rem]'/>
                  <h3 className='text-[1rem] text-grafite font-semibold text-center mb-[0.9rem]'>Maximize sua margem de lucro</h3>
                  <p className='w-[13.93rem] mx-auto text-[0.8rem] text-grafite font-normal text-center mb-[2rem]'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
              </div>
            </div>
        } ,   
     
    
       
            ] 
    return(
        
        <div className='bg-white  drop-shadow-lg  rounded-md '>
          <h1>Por que o HOS é o melhor sistema para você?</h1>
            
            <div className='flex justify-center items-center mx-auto cursor-pointer relative group'>
                <div className='group-hover:block'>
                    <Image src={arrow} alt='' className='hidden rotate-180' onClick={prevCard}/>
                </div>
                
                <div  className='bg-white  flex justify-center items-center mx-auto drop-shadow-lg w-[16.375rem] h-[15.437rem] rounded-md'  >
                    <div >
                        <Image src={ lucro } alt='' className='w-[3.8rem] h-auto flex justify-center items-center mx-auto mt-[2rem] mb-[1.8rem]'/>
                        <h3 className='text-[1rem] text-grafite font-semibold text-center mb-[0.9rem]'>Maximize sua margem de lucro</h3>
                        <p className='w-[13.93rem] mx-auto text-[0.8rem] text-grafite font-normal text-center mb-[2rem]'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
                    </div>
                 </div>

                 <div  className='bg-white  flex justify-center items-center mx-auto drop-shadow-lg w-[16.375rem] h-[15.437rem] rounded-md' >
                    <div >
                        <Image src={ lucro } alt='' className='w-[3.8rem] h-auto flex justify-center items-center mx-auto mt-[2rem] mb-[1.8rem]'/>
                        <h3 className='text-[1rem] text-grafite font-semibold text-center mb-[0.9rem]'>Maximize sua margem de lucro</h3>
                        <p className='w-[13.93rem] mx-auto text-[0.8rem] text-grafite font-normal text-center mb-[2rem]'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
                    </div>
                 </div>

                 <div  className='bg-white  flex justify-center items-center mx-auto drop-shadow-lg w-[16.375rem] h-[15.437rem] rounded-md' >
                    <div >
                        <Image src={ lucro } alt='' className='w-[3.8rem] h-auto flex justify-center items-center mx-auto mt-[2rem] mb-[1.8rem]'/>
                        <h3 className='text-[1rem] text-grafite font-semibold text-center mb-[0.9rem]'>Maximize sua margem de lucro</h3>
                        <p className='w-[13.93rem] mx-auto text-[0.8rem] text-grafite font-normal text-center mb-[2rem]'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
                    </div>
                 </div>
                 



            
                </div>
            <div className='group-hover:block'>
                <Image src={arrow} alt='' className='hidden cursor-pointer' onClick={nextCard}/>
            </div>
         </div>
        
    

        
    
       
        )    

}
    