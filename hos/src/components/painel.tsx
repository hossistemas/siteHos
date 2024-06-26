import Image from "next/image"
import dashboard from '../../public/dashboard.png'
import flecha from '../../public/pequenaFlechaDireita.svg'
import Link from "next/link"

interface PainelProps {

}

export function Painel(props: PainelProps){
    
    return(
        <div className="bg-fundo ">
        <div className=" tablet:mx-auto tablet:grid tablet:grid-cols-2 tablet:pt-[4rem] tablet:w-[1400px]">
           <div className="mx-auto tablet:col-start-2 tablet:-mb-[15rem]">
                <h2 className="text-[1.5rem] text-grafite font-extrabold leading-tight text-center tablet:text-left tablet:text-[2rem]">Painel Dashboard</h2>  
                <p className="text-[0.87rem] text-grafite mx-auto my-[1.38rem] w-[18.1rem] text-center tablet:text-left tablet:text-[1.25rem] tablet:w-[27rem]">Tenha acesso a dados essenciais de Resumo Geral de Finanças, como vendas versus compras, ticket médio, metas por vendedor, CMV (Custo de Mercadoria Vendida), Contas a Pagar versus Contas a Receber, entre outros.</p>
                <div className="tablet:w-[10rem] tablet:mr-0">
                <Link href="/sobre/contato" >
                <button className="hidden tablet:flex tablet:items-center tablet:justify-center tablet:visible tablet:w-[10rem] tablet:h-[3.5rem] tablet:mr-0 tablet:bg-gradient-to-b from-magenta to-laranja tablet:rounded-lg tablet:hover:bg-gradient-to-b tablet:hover:from-darker tablet:hover:to-darker tablet:hover:duration-500">
                    <p className="text-fundo text-[1.1rem] text-center pr-[0.5rem]">Saiba mais</p>
                    <Image src={flecha} alt="" />
                </button>
                </Link>
                </div>
            </div>
        
        <Image src={dashboard} alt='' className="max-w-[22.4rem] h-auto mx-auto tablet:col-start-1 tablet:max-w-[45rem] tablet:h-auto tablet:-mt-[8rem]"/>

        </div>
    </div>
        )    

}
    
