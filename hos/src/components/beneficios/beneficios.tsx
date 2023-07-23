import Image from "next/image"
import benefecios from '../../../public/beneficios.png'

interface BeneficiosProps {

}

export function Beneficios(props: BeneficiosProps){
    
    return(
        <>
        <div className="-mt-[5rem] px-[2.5rem] py-[2rem] bg-fundo">
            
            <div className="pb-[1.7rem]">
                <Image src={benefecios} alt="" className="max-w-[17rem] h-auto"/>
            </div>

        <div>
            <h2 className="text-[1.5rem] font-bold text-grafite leading-tight mb-[1.5rem]">Conheça os benefícios do HOSFarma</h2>
            <ul className="text-[0.8rem] text-grafite font-medium ">
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

        </>
        )    

}
    
