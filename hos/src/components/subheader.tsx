'use client'


import Image from 'next/image'
import Link from 'next/link'

interface SubheaderProps {
 primeiro: string,
 segundo: string,
 terceiro: string,
 quarto: string,
 hrefPrimeiro: string,
hrefSegundo: string,
hrefTerceiro: string,
hrefQuarto: string,
}

export function Subheader({primeiro, segundo, terceiro, quarto, hrefPrimeiro, hrefSegundo, hrefTerceiro, hrefQuarto}: SubheaderProps){

    return(
        <>
         <div className='bg-vermelho w-auto h-[8.7rem] tablet:h-[5.75rem]'>
            <ul className='grid grid-cols-2 text-[0.87rem] font-semibold text-fundo tablet:flex tablet:justify-center tablet:mx-auto tablet:gap-x-3 tablet:text-[1rem]  tablet:w-[1200px] tablet:px-[8rem]' >

                <Link href={hrefPrimeiro}>
                    <li className='flex w-[7rem]  text-center mx-auto justify-center self-center py-[1.57rem] tablet:py-[2.13rem] tablet:px-[4rem] tablet:w-[15rem]'>{primeiro}</li>
                </Link>

                <Link href={hrefSegundo}>
                    <li className=' flex w-[7rem] text-center mx-auto justify-center self-center py-[0.9rem] tablet:w-[19rem] tablet:py-[2.13rem]'>{segundo}</li>
                </Link>

                <Link href={hrefTerceiro}>
                    <li className='flex w-[7rem] text-center mx-auto justify-center self-center py-[0.9rem]  tablet:w-[19rem] tablet:py-[2.13rem]'>{terceiro}</li>
                </Link>

                <Link href={hrefQuarto}>
                    <li className=' flex w-[7rem] text-center mx-auto justify-center self-center py-[0.9rem]  tablet:w-[19rem] tablet:py-[2.13rem]'>{quarto}</li>
                </Link>
                
                             
            </ul>
         </div>

        </>
 
    )
            }