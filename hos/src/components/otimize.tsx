import Image from "next/image"
import pc from '../../public/otimize.png'

interface OtimizeProps {

}

export function Otimize(props: OtimizeProps){
    
    return(
        <div className="bg-fundo -mt-[5.5rem] ">
            <div className="pt-[4rem] tablet:flex tablet:max-w-[1200px~] tablet:pt-[4rem] tablet:justify-center tablet:items-center">
               <div className="mx-auto">
                    <h2 className="text-[1.5rem] pb-[2rem] text-grafite font-extrabold leading-tight text-center tablet:text-left tablet:text-[2rem] tablet:ml-[8rem] tablet:max-w-[31rem]">Otimize a eficiência dos seus atendimentos</h2>  
                </div>
            
                <Image src={pc} alt='' className="mx-auto max-w-[20rem] h-auto  -mr-[0.8rem] tablet:max-w-[39rem] tablet:mr-[8rem] "/>
                
                <div className="mx-auto">
                    <h2 className="text-[1.5rem] pt-[1.8rem] text-grafite font-extrabold leading-tight text-center tablet:text-left tablet:text-[2rem] tablet:ml-[8rem] tablet:max-w-[31rem]">Controle de caixa </h2>  
                    <p className="text-[0.87rem] text-grafite mx-auto my-[1.38rem] w-[17.2rem] text-center tablet:text-left tablet:text-[1.25rem] tablet:ml-[8rem] tablet:w-[30rem]">Simplifique as operações financeiras da sua farmácia ou drogaria e obtenha uma visão clara dos principais indicadores através do celular, tablet ou notebook.</p>

                    <h2 className="text-[1.5rem] pt-[1.4rem] text-grafite font-extrabold leading-tight text-center tablet:text-left tablet:text-[2rem] tablet:ml-[8rem] tablet:max-w-[31rem]">Sistema de crediário </h2>  
                    <p className="text-[0.87rem] text-grafite mx-auto my-[1.38rem] w-[17.2rem] text-center tablet:text-left tablet:text-[1.25rem] tablet:ml-[8rem] tablet:w-[30rem]">Simplifique as operações financeiras da sua farmácia ou drogaria e obtenha uma visão clara dos principais indicadores através do celular, tablet ou notebook.</p>
                
                    <h2 className="text-[1.5rem] pt-[1.4rem] text-grafite font-extrabold leading-tight text-center tablet:text-left tablet:text-[2rem] tablet:ml-[8rem] tablet:max-w-[31rem]">Checkout de vendas</h2>  
                    <p className="text-[0.87rem] text-grafite mx-auto my-[1.38rem] w-[17.2rem] text-center tablet:text-left tablet:text-[1.25rem] tablet:ml-[8rem] tablet:w-[30rem]">Simplifique as operações financeiras da sua farmácia ou drogaria e obtenha uma visão clara dos principais indicadores através do celular, tablet ou notebook.</p>

                    <h2 className="text-[1.5rem] pt-[1.4rem] text-grafite font-extrabold leading-tight text-center tablet:text-left tablet:text-[2rem] tablet:ml-[8rem] tablet:max-w-[31rem]">Gerenciador de entregas </h2>  
                    <p className="text-[0.87rem] text-grafite mx-auto my-[1.38rem] w-[17.2rem] text-center tablet:text-left tablet:text-[1.25rem] tablet:ml-[8rem] tablet:w-[30rem]">Simplifique as operações financeiras da sua farmácia ou drogaria e obtenha uma visão clara dos principais indicadores através do celular, tablet ou notebook.</p>
                </div>
                
            </div>
        </div>
        )    

}
    
