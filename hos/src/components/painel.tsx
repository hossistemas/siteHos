import Image from "next/image"
import dashboard from '../../public/dashboard.png'

interface PainelProps {

}

export function Painel(props: PainelProps){
    
    return(
        <div className="bg-fundo ">
        <div className="pt-[2rem] tablet:grid tablet:grid-cols-2">
           <div className="mx-auto tablet:col-start-1">
                <h2 className="text-[1.5rem] text-grafite font-extrabold leading-tight text-center tablet:text-left ">Painel Dashboard</h2>  
                <p className="text-[0.87rem] text-grafite mx-auto my-[1.38rem] w-[18.1rem] text-center tablet:text-left ">Tenha acesso a dados essenciais de Resumo Geral de Finanças, como vendas versus compras, ticket médio, metas por vendedor, CMV (Custo de Mercadoria Vendida), Contas a Pagar versus Contas a Receber, entre outros.</p>
            
            </div>
        
        <Image src={dashboard} alt='' className="max-w-[22.4rem] h-auto  tablet:col-start-2"/>

        </div>
    </div>
        )    

}
    
