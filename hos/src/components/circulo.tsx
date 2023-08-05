import Image from "next/image"
import circulo from '../../public/otimizeProcessos.svg'

interface CirculoProps {

}

export function Circulo(props: CirculoProps){
    
    return(
        <div className="bg-fundo -mt-[5.5rem] ">
            <div className="pt-[6rem] tablet:grid tablet:grid-cols-2 tablet:mx-auto tablet:max-w-[1000px] tablet:pt-[4rem] tablet:justify-center tablet:items-center">
               <div className="mx-auto tablet:col-span-2 tablet:mx-auto tablet:py-[3rem]">
                    <h2 className="text-[1.5rem] pb-[2rem] w-[18rem] mx-auto text-grafite font-extrabold leading-tight text-center tablet:w-[50rem] tablet:flextablet:justify-center tablet:text-center tablet:text-[2rem]">Otimize seus processos e aumente seus resultados</h2>  
                </div>
            
                <Image src={circulo} alt='' className="mx-auto max-w-[20rem] h-auto flex justify-center items-center self-center tablet:col-start-2 tablet:max-w-[31rem] tablet:ml-[7.6rem] tablet:-mb-[3rem]"/>
                
                <div className="mx-auto tablet:col-start-1 tablet:-mt-[24rem] tablet:-ml-[3rem]">
                    <h2 className="text-[1.5rem] pt-[1.8rem] text-grafite font-extrabold leading-tight text-center tablet:text-left tablet:text-[1.75rem] tablet:ml-[8rem] tablet:max-w-[31rem]"> Programa de fidelidade</h2>  
                    <p className="text-[0.87rem] text-grafite mx-auto  w-[17.2rem] text-center tablet:text-left tablet:text-[1.25rem] tablet:ml-[8rem] tablet:w-[30rem]">No nosso sistema, os clientes acumulam pontos para trocar por brindes ou cashback.</p>

                    <h2 className="text-[1.5rem] pt-[1.4rem] text-grafite font-extrabold leading-tight text-center tablet:text-left tablet:text-[1.75rem] tablet:ml-[8rem] tablet:max-w-[31rem]">Comunicação via WhatsApp</h2>  
                    <p className="text-[0.87rem] text-grafite mx-auto  w-[17.2rem] text-center tablet:text-left tablet:text-[1.25rem] tablet:ml-[8rem] tablet:w-[30rem]">Seja alertado quando medicamentos contínuos dos clientes estão acabando, permitindo que você envie mensagens para informá-los.</p>
                
                    <h2 className="text-[1.5rem] pt-[1.4rem] text-grafite font-extrabold leading-tight text-center tablet:text-left tablet:text-[1.75rem] tablet:ml-[8rem] tablet:max-w-[31rem]">Controle de Encomendas</h2>  
                    <p className="text-[0.87rem] text-grafite mx-auto  w-[17.2rem] text-center tablet:text-left tablet:text-[1.25rem] tablet:ml-[8rem] tablet:w-[30rem]">Gerencie pedidos e notifique os clientes quando suas encomendas chegarem.</p>

                    <h2 className="text-[1.5rem] pt-[1.4rem] text-grafite font-extrabold leading-tight text-center tablet:text-left tablet:text-[1.75rem] tablet:ml-[8rem] tablet:max-w-[31rem]">Suporte ativo 7 dias por semana </h2>  
                    <p className="text-[0.87rem] text-grafite mx-auto  w-[17.2rem] text-center tablet:text-left tablet:text-[1.25rem] tablet:ml-[8rem] tablet:w-[30rem]">Tenha suporte ativo todos os dias da semana, para que você nunca fique desamparado.</p>
                </div>
                
            </div>
        </div>
        )    

}
    
