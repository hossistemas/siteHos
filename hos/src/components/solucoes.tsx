import Image from "next/image"
import laptop from '../../public/laptopSolucoes.png'

interface SolucoesProps {

}

export function Solucoes(props: SolucoesProps){
    
    return(
        <div className="bg-fundo ">
            <div className="pt-[0.3rem] tablet:flex tablet:max-w-[1220px] tablet:mx-auto tablet:pt-[4rem] tablet:justify-center tablet:items-center">
               <div className="mx-auto">
                    <h2 className="text-[1.5rem] text-grafite font-extrabold leading-tight text-center tablet:text-left tablet:text-[2rem] tablet:ml-[5rem] tablet:w-[34rem]">Soluções para a gestão financeira da sua farmácia ou drogaria</h2>  
                    <p className="text-[0.87rem] text-grafite mx-auto my-[1.38rem] w-[17.2rem] text-center tablet:text-left tablet:text-[1.25rem] tablet:ml-[5rem] tablet:w-[30rem]">Simplifique as operações financeiras da sua farmácia ou drogaria e obtenha uma visão clara dos principais indicadores através 
                    do celular, tablet ou notebook.</p>
                </div>
            
            <Image src={laptop} alt='' className="mx-auto max-w-[20rem] h-auto tablet:max-w-[45rem] tablet:mr-[3rem] "/>

            </div>
        </div>
        )    

}
    
