import Image from 'next/image'
import React from 'react';
import { Carousel } from 'antd';


interface cardProps {
    img: any,
    titulo: string,
    texto: string,
}


export function CardSistema({ img, titulo , texto}: cardProps){
  
    return( 
    
        <>
        <div className='bg-white  flex justify-center items-center mx-auto drop-shadow-lg w-[16.375rem] h-[17rem] rounded-md  '>
            <div >
            <Image src={ img } alt='' className='w-[3.8rem] h-auto flex justify-center items-center mx-auto mt-[2.5rem] mb-[0.9rem]'/>

                  <h3 className='text-[1rem] text-grafite font-semibold text-center mb-[0.9rem]'>{titulo}</h3>
                  <p className='w-[13.93rem] mx-auto text-[0.8rem] text-grafite font-normal text-center mb-[2rem]'>{texto}</p>
              </div>
        </div>

        </>
        
        

    
       
        )    

}