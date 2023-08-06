import Image from "next/image"
import lotes from '../../public/lotes.svg'
import conjugada from '../../public/conjugada.svg'
interface GestaoProps {

}

export function Gestao(props: GestaoProps){
    
    return(
       <div className="bg-fundo">
            <div className="pb-[1.5rem] tablet:grid grid-cols-2 tablet:mx-auto tablet:max-w-[59.8rem] tablet:py-[1rem]">
                <h2 className="text-[1.5rem] w-[19rem] mx-auto text-grafite font-extrabold leading-tight text-center tablet:col-span-3 tablet:text-[2rem] tablet:w-[46.8rem] tablet:pb-[5rem]">A gestão perfeita para o seu negócio</h2>
                
                <div className="">
                    <div className="bg-white w-[5.7rem] h-[5.6rem] mt-[1.5rem]  rounded-3xl drop-shadow-2xl flex justify-center mx-auto tablet:w-[8.1rem] tablet:h-[8rem]">
                        <Image src={lotes} alt="" className=" w-[3.9rem] h-auto tablet:w-[5rem] tablet:h-auto"/>
                    </div>
                    <h4 className="w-[13rem] text-[1rem] mt-[1.5rem] font-extrabold text-center text-grafite mx-auto tablet:w-[16.1rem] tablet:text-[1.25rem]">Rastreabilidade de lotes</h4>
                    <p className="w-[12.25rem] text-[0.87rem] text-center mt-[0.6rem] mx-auto text-grafite tablet:w-[15.75rem] tablet:text-[1rem]">Garanta a qualidade e segurança de produtos, otimizando a cadeia de suprimentos, incluindo gestão de estoques, previsão de demanda e produção eficiente.</p>
                </div>

                <div className="">
                    <div className="bg-white w-[5.7rem] h-[5.6rem] mt-[1.5rem] rounded-3xl drop-shadow-2xl flex justify-center mx-auto tablet:w-[8.1rem] tablet:h-[8rem]">
                        <Image src={conjugada} alt="" className=" w-[2.9rem] h-auto tablet:w-[4.4rem] tablet:h-auto"/>
                    </div>
                    <h4 className="w-[13rem] text-[1rem] mt-[1.5rem] font-extrabold text-center text-grafite mx-auto tablet:w-[16.1rem] tablet:text-[1.25rem]">Nota de serviço conjugada</h4>
                    <p className="w-[12.25rem] text-[0.87rem] text-center mt-[0.6rem] mx-auto text-grafite tablet:w-[15.75rem] tablet:text-[1rem]">Permite a venda de produtos sujeitos ao ICMS e ao ISSQN em um único cupom fiscal, simplificando os processos e garantindo a destinação correta da tributação.</p>
                </div>

            </div>
       </div>
        )    

}
    
