import Image from 'next/image'
import arrow from '../../../public/arrow.svg'
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
        
        <div className={`drop-shadow-lg mb-[5rem] tablet:pb-[1rem] ${bgClassName}`}>
            <div className="grid  mx-auto max-w-[460px] tablet:flex justify-center items-center tablet:max-w-[1200px]">

                <div className='pt-[3rem] px-[3.5rem] tablet:max-w-[510px] tablet:-ml-[18rem]'>
                    <h1 className={`text-[1.5rem] font-bold leading-none tablet:text-[2.25rem] ${titleClassName}`}>{title}</h1>
                    <p className={`text-[0.8rem] font-medium my-[1rem] tablet:text-[1.5rem] ${textClassName}`}>{text}</p>
                    <button className={`text-[1rem] font-regular mb-[1.3rem] px-[1.3rem] py-[0.4rem] rounded-md tablet:text-[1.2rem] ${buttonClassName}`}>Solicite uma demonstração</button>
                </div>

                <div className='flex justify-end'>
                    <Image src={img} alt='' className='h-auto w-[15rem] tablet:w-auto'/>
                </div>
            
            </div>
            
            <div className='hidden tablet:visible tablet:flex tablet:justify-center tablet:mx-auto'>
                    <Image src={arrow} alt='' className=' -mb-[3rem] -mt-[4rem] bg-magenta rounded-2xl  px-[2rem] py-[rem] rotate-45' />
                    <Image src={arrow} alt='' className='relative right-[70px] bottom-[-35px] animate-bounce' />
            </div>
        </div>

        </>
        )    

}
    
