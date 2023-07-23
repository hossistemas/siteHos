import Image from 'next/image'
import { useState } from 'react'

interface HeroSectionProps {
    title: string;
    text: string;
    img: any;
    bgClassName: any,
    titleClassName: any,
    textClassName: any,
    buttonClassName: any,
}

export function HeroSection({title, text, img, bgClassName, titleClassName, textClassName, buttonClassName}: HeroSectionProps){
    
    return(
        <>
        
        <div className={`drop-shadow-lg mb-[5rem] ${bgClassName}`}>
            
            <div className='pt-[3rem] px-[3.5rem]'>
                <h1 className={`text-[1.5rem] font-bold leading-none ${titleClassName}`}>{title}</h1>
                <p className={`text-[0.8rem] font-medium my-[1rem] ${textClassName}`}>{text}</p>
                <button className={`text-[1rem] font-regular mb-[1.3rem] px-[1.3rem] py-[0.4rem] rounded-md ${buttonClassName}`}>Solicite uma demonstração</button>
            </div>

            <div className='flex justify-center'>
                <Image src={img} alt='' className='h-auto w-[15rem]'/>
            </div>


        </div>

        </>
        )    

}
    
