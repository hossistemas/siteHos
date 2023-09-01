import Image from "next/image"
import circulo from '../../public/otimizeProcessos.svg'

interface CirculoProps {

}

export function Circulo(props: CirculoProps){
    
    return(
        <div className="bg-fundo -mt-[5.5rem] ">
            <div className="pt-[6rem] tablet:grid tablet:grid-cols-2 tablet:mx-auto tablet:w-[1000px] tablet:pt-[4rem] tablet:pb-[3rem] tablet:justify-center tablet:items-center">
               <div className="mx-auto tablet:col-span-2 tablet:mx-auto tablet:pt-[1rem] tablet:pb-[1rem]">
                    <h2 className="text-[1.5rem] pb-[2rem] w-[18rem] mx-auto text-grafite font-extrabold leading-tight text-center tablet:w-[51rem] tablet:flex tablet:justify-center tablet:text-center tablet:text-[2rem]">Otimize seus processos e aumente seus resultados</h2>  
                </div>
            
                <Image src={circulo} alt='' className="mx-auto w-[20rem] h-auto flex justify-center items-center self-center tablet:col-start-2 tablet:w-[38rem]  tablet:h-auto "/>
                
                <div className="mx-auto pb-[4rem] tablet:col-start-1 tablet:-mt-[32rem] tablet:ml-[-5rem]">
                    <h2 className="text-[1.5rem] pt-[1.8rem] text-grafite font-extrabold leading-tight text-center tablet:text-left tablet:text-[1.75rem] tablet:ml-[8rem] tablet:max-w-[31rem]"> Programa de Fidelidade</h2>  
                    <p className="text-[0.87rem] pt-2 w-[13rem] text-grafite mx-auto  text-center tablet:text-left tablet:text-[1.25rem] tablet:ml-[8rem] tablet:w-[30rem] ">No nosso sistema, os clientes acumulam pontos para trocar por brindes ou cashback.</p>

                    <h2 className="text-[1.5rem] pt-[1.4rem] text-grafite font-extrabold leading-tight text-center tablet:text-left tablet:text-[1.75rem] tablet:ml-[8rem] tablet:max-w-[31rem]">Comunicação via WhatsApp</h2>  
                    <p className="text-[0.87rem] pt-2 w-[15.3rem] text-grafite mx-auto   text-center tablet:text-left tablet:text-[1.25rem] tablet:ml-[8rem] tablet:w-[30rem] ">Seja alertado quando os medicamentos contínuos dos clientes estão acabando, permitindo que você envie mensagens para informá-los.</p>
                
                    <h2 className="text-[1.5rem] pt-[1.4rem] text-grafite font-extrabold leading-tight text-center tablet:text-left tablet:text-[1.75rem] tablet:ml-[8rem] tablet:max-w-[31rem]">Controle de Encomendas</h2>  
                    <p className="text-[0.87rem] pt-2 w-[15rem] text-grafite mx-auto   text-center tablet:text-left tablet:text-[1.25rem] tablet:ml-[8rem] tablet:w-[30rem] ">Gerencie pedidos e notifique os clientes quando suas encomendas chegarem.</p>

                    <h2 className="text-[1.5rem] pt-[1.4rem] text-grafite font-extrabold leading-tight text-center tablet:text-left tablet:text-[1.75rem] tablet:ml-[8rem] tablet:max-w-[31rem]">Suporte ativo 7 dias por semana </h2>  
                    <p className="text-[0.87rem] pt-2 w-[15rem] text-grafite mx-auto   text-center tablet:text-left tablet:text-[1.25rem] tablet:ml-[8rem] tablet:w-[30rem] ">Tenha suporte ativo todos os dias da semana, para que você nunca fique desamparado.</p>
                </div>
                
            </div>
        </div>
        )    

}
    
