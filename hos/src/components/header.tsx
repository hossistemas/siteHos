'use client'


import logo from '../../public/logo.svg'
import hamburguer from '../../public/hamburguer.svg'
import xis from '../../public/xis.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface HeaderProps {

}

export function Header(props: HeaderProps){
    const [botao1Visivel, setbotao1Visivel] = useState(true)
    const [botao2Visivel, setbotao2Visivel] = useState(false)

    const visibilidadeBotao = () => {
        setbotao1Visivel((prev) => !prev)
        setbotao2Visivel((prev) => !prev)
    }


    return(
        <>
        <header className='py-[5rem] px-[3rem] flex justify-between tablet: tablet:flex tablet:items-center tablet:mx-auto tablet:px-[3rem] tablet:max-h-[82px] tablet:w-auto'>
            <div  className='tablet:flex tablet:justify-center tablet:mx-auto tablet:max-w-[1200px]'>
                
              <Link href='/'> 
              <Image src={logo} alt={'logo-hos'} className='w-[7rem] h-auto cursor-pointer tablet:h-[4.3rem] tablet:mr-[8rem] tablet:max-w-[1200px]' />
              </Link>
            <div>
            {botao1Visivel && (
                <button onClick={visibilidadeBotao} 
                className="absolute right-[135px] -mr-[4rem] top-[90px] w-[4rem] h-auto flex border-2 border-vermelho rounded-md   bg-white px-0 cursor-pointer tablet:hidden ">
                    <Image src={hamburguer} alt='menu hamburguer'/>
                </button>
            )}
            {botao2Visivel && (
                <button onClick={visibilidadeBotao} 
                className='absolute   right-[138px] -mr-[4rem] top-[90px] w-[4rem] h-auto flex border-2 border-vermelho rounded-md   bg-white cursor-pointer tablet:hidden '>
                    <Image src={xis} alt='menu hamburguer' className='w-[4rem] '/>
                </button>
            )}

            </div>
            <div className='hidden tablet:flex tablet:justify-center tablet:items-center tablet:mx-auto tablet:-ml-[5rem] '>

                <div className='tablet:flex tablet:justify-center tablet:items-center tablet:mx-auto tablet:text-[0.8rem] tablet:font-semibold tablet:text-grafite '>               
                        <Link href="/solucoes/administracao" className='mr-[1.8rem] tablet:ml-[1rem] hover:text-vermelho'>Soluções </Link>
                        <Link href="/sobre/quemsomos" className='mr-[1.8rem] hover:text-vermelho'>Sobre</Link>
                        <a href="" className='mr-[1.8rem] hover:text-vermelho'>Suporte</a>
                        <a href="" className='mr-[1.8rem] hover:text-vermelho'>Universidade</a>
                        <a href="" className='mr-[3rem] hover:text-vermelho'>Blog</a>
                </div>

                <div className='tablet:flex items-center tablet:ml-[4rem]'>
                    <div className='tablet:flex tablet:justify-center tablet:items-center'>
                        <button className='tablet:bg-gradient-to-b tablet:from-laranja tablet:to-magenta tablet:hover:bg-gradient-to-b tablet:hover:from-darker tablet:hover:to-darker tablet:hover:duration-1000 tablet:text-[0.8rem] tablet:font-semibold tablet:text-white tablet:rounded-md tablet:w-[13rem] tablet:px-[1.5rem] tablet:py-[0.5rem] '>Solicite uma demonstração</button>
                    </div>
                    <div className='tablet:flex tablet:ml-[1rem] tablet:justify-center tablet:items-center tablet:bg-white tablet:border-2 tablet:border-vermelho tablet:rounded-md tablet:w-[9rem] tablet:px-[0.5rem] tablet:py-[0.4rem]'>
                        <button className='tablet:text-[0.8rem] tablet:font-semibold  tablet:text-vermelho'>Área do cliente</button>
                    </div>
                </div>
            </div>
            </div>
        </header> 
            
    
        <div className={`bg-vermelho  ${botao1Visivel ? 'hidden' : 'visible transition-all ease-in duration-500'}`}>

            <div className='grid gap-y-3 text-white pt-[1rem] ml-[3rem] text-[1rem] font-semibold tablet:flex tablet:justify-center tablet:items-center tablet:mx-auto tablet:text-[0.8rem] tablet:font-semibold tablet:text-grafite '>               
                    <Link href="/solucoes/administracao" className=''>Soluções</Link>
                    <Link href="/sobre/quemsomos" className=''>Sobre</Link>
                    <a href="" className=''>Suporte</a>
                    <a href="" className=''>Universidade</a>
                    <a href="" className=''>Blog</a>
            </div>

            <div className=''>
                <div className='py-[1rem]'>
                    <button className='bg-darker ml-[3rem] mt-[0.1rem] text-[1rem] font-semibold text-white rounded-md py-[0.5rem] px-[0.8rem]'>Solicite uma amostra</button>
                </div>
                <div className='ml-[3rem] py-[0.2rem] pb-[2rem]'>
                    <button className='bg-vermelho text-[1rem] font-semibold text-white rounded-md border-2 border-white py-[0.5rem] px-[0.8rem]'>Área do cliente</button>
                </div>
            </div>
        </div>

        </>
 
    )
            }