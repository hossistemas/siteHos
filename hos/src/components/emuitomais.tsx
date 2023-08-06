import Image from "next/image"
import emuitomais from '../../public/emuitomais.png'

interface EmuitomaisProps {

}

export function Emuitomais(props: EmuitomaisProps){
    
    return(
        <>
        <div className="px-[2.5rem] py-[2rem] bg-fundo tablet:pt-[6rem] tablet:px-[8rem]">
            <div className="max-w-[460px] mx-auto tablet:max-w-[1200px] tablet:flex tablet:justify-center tablet:items-center tablet:mx-auto">
            <h2 className="text-[1.5rem] font-bold text-grafite leading-tight mb-[1.5rem] tablet:text-[2rem]">E muito mais...</h2>
                <div className="pb-[1.7rem] tablet:mr-[4rem]">
                    <Image src={emuitomais} alt="" className="max-w-[17rem] h-auto mx-auto tablet:max-w-[33rem] tablet:h-auto"/>
                </div>

                <div className="max-w-[17rem] mx-auto tablet:max-w-[27rem]">
                    
                    <ul className="list-disc text-[0.8rem]  text-grafite  font-medium ml-[1rem] leading-6 tablet:text-[1.25rem] tablet:leading-normal">
                        <li>PDV, fiscal, estoque e compras</li>
                        <li>Integração com SNGPC, PBM e CMV</li>
                        <li>Administração para Lojas, Redes e Franquias</li>
                        <li>Plataforma de fidelidade</li>
                        <li>Controle de vendas de convênios</li>
                        <li>Monitoramento de pedidos</li>
                        <li>Gestão financeira simplificada</li>
                        <li>Tele-entrega de medicamentos</li>
                        <li>Conciliação bancária e de cartões</li>
                    </ul>
                </div>

            </div>
        </div>

        </>
        )    

}
    
