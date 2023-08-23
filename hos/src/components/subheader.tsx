'use client'


import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu } from '../components/menuitem'

interface SubheaderProps {
 primeiro: string,
 segundo: string,
 terceiro: string,
 quarto: string,
 hrefPrimeiro: string,
hrefSegundo: string,
hrefTerceiro: string,
hrefQuarto: string,
urlUm: string,
urlDois: string,
urlTres: string,
urlQuatro: string,
}

export function Subheader({primeiro, segundo, terceiro, quarto, hrefPrimeiro, hrefSegundo, hrefTerceiro, hrefQuarto, urlUm, urlDois, urlTres, urlQuatro}: SubheaderProps){
  const [menuUm , setMenuUm] = useState(false)
  const [menuDois , setMenuDois] = useState(false)
  const [menuTres , setMenuTres] = useState(false)
  const [menuQuatro , setMenuQuatro] = useState(false)
  
  useEffect (() => {
      setMenuUm(menuAtivo(urlUm))
      setMenuDois(menuAtivo(urlDois))
      setMenuTres(menuAtivo(urlTres))
      setMenuQuatro(menuAtivo(urlQuatro))
  }, [urlUm, urlDois, urlTres, urlQuatro])

  const menuAtivo = (sessao: string) =>
    window.location.pathname.includes(sessao)



    return(
        <>
         <div className='bg-vermelho w-auto h-auto tablet:h-[5.2rem]'>
            <ul className='grid grid-cols-2  text-[0.87rem]  font-semibold text-fundo tablet:flex tablet:justify-center tablet:mx-auto  tablet:text-[1rem]  tablet:w-[1200px] tablet:px-[8rem] tablet:h-[7rem]' >

               <Menu ativo={menuUm} hrefDesc={`${hrefPrimeiro}`} descricao={`${primeiro}`} />

               <Menu ativo={menuDois} hrefDesc={`${hrefSegundo}`} descricao={`${segundo}`} />

               <Menu ativo={menuTres} hrefDesc={`${hrefTerceiro}`} descricao={`${terceiro}`} />

               <Menu ativo={menuQuatro} hrefDesc={`${hrefQuarto}`} descricao={`${quarto}`}  />

                
                             
            </ul>
         </div>

        </>
 
    )
            }