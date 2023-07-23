'use client'

import Image from 'next/image'
import { useState } from 'react'

interface HeroSectionProps {
    title: string;
    text: string;
    img: any;
    bgClassName: any,
}

export function HeroSection({title, text, img, bgClassName}: HeroSectionProps){
    
    return(
        <>
        
        <div className={`${bgClassName}`}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
        <div>
            <Image src={img} alt=''/>
        </div>
     
        </>
        )    

}
    
