import Image from "next/image"
import gestao from '../../public/saudeFinanceira.svg'
import boletos from '../../public/boletos.svg'
import saude from '../../public/saudeFinanceira.svg'
interface FinanceiroWebProps {

}

export function FinanceiroWeb(props: FinanceiroWebProps){
    
    return(
       <div className="bg-fundo">
            <div className="py-[3.75rem] tablet:grid grid-cols-3">
                <h2 className="text-[1.5rem] w-[19rem] mx-auto text-grafite font-extrabold leading-tight text-center tablet:col-span-3">Amplie suas possibilidades com o <span className="text-vermelho">Financeiro Web</span></h2>
                
                <div className="">
                    <div className="bg-white w-[5.7rem] h-[5.6rem] mt-[1.5rem]  rounded-3xl drop-shadow-2xl flex justify-center mx-auto">
                        <Image src={gestao} alt="" className=" w-[3.9rem] h-auto"/>
                    </div>
                    <h4 className="w-[13rem] text-[1rem] mt-[1.5rem] font-extrabold text-center text-grafite mx-auto">Gestão da saúde financeira</h4>
                    <p className="w-[12.25rem] text-[0.87rem] text-center mt-[0.6rem] mx-auto text-grafite">Relatórios DRE Gerencial, plano de contas personalizado, fechamento de convênios.</p>
                </div>

                <div className="">
                    <div className="bg-white w-[5.7rem] h-[5.6rem] mt-[1.5rem] rounded-3xl drop-shadow-2xl flex justify-center mx-auto">
                        <Image src={boletos} alt="" className=" w-[2.9rem] h-auto"/>
                    </div>
                    <h4 className="w-[13rem] text-[1rem] mt-[1.5rem] font-extrabold text-center text-grafite mx-auto">Emissão de Boletos</h4>
                    <p className="w-[12.25rem] text-[0.87rem] text-center mt-[0.6rem] mx-auto text-grafite">Integração com instituições financeiras para facilitar a emissão de remessas e retorno.</p>
                </div>

                <div className="">
                    <div className="bg-white w-[5.7rem] h-[5.6rem] mt-[1.5rem] rounded-3xl drop-shadow-2xl flex justify-center mx-auto">
                        <Image src={saude} alt="" className=" w-[3.9rem] h-auto"/>
                    </div>
                    <h4 className="w-[13rem] text-[1rem] mt-[1.5rem] font-extrabold text-center text-grafite mx-auto">Sistema de cobrança</h4>
                    <p className="w-[12.25rem] text-[0.87rem] text-center mt-[0.6rem] mx-auto text-grafite">Notificações de cobranças via WhatsApp e SMS conforme regra geral especifica.</p>
                </div>
            </div>
       </div>
        )    

}
    
