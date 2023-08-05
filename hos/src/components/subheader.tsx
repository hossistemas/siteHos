'use client'


import Image from 'next/image'
import Link from 'next/link'

interface SubheaderProps {
 primeiro: string,
 segundo: string,
 terceiro: string,
 quarto: string,
}

export function Subheader({primeiro, segundo, terceiro, quarto}: SubheaderProps){

    return(
        <>
         <div className='bg-vermelho w-auto h-[8.7rem]'>
            <ul className='grid grid-cols-2 text-[0.87rem] font-semibold text-fundo'>
                <li className='flex justify-center self-center py-[1.57rem]'>{primeiro}</li>
                <li className='flex justify-center self-center py-[1.57rem]'>{segundo}</li>
                <li className='flex justify-center self-center py-[1.57rem]'>{terceiro}</li>
                <li className='flex justify-center self-center py-[1.57rem]'>{quarto}</li>
            </ul>
         </div>

        </>
 
    )
            }