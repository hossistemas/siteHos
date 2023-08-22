import Image from "next/image"
import gestao from '../../public/saudeFinanceira.svg'
import boletos from '../../public/boletos.svg'
import sistema from '../../public/sistemaCobranca.svg'
interface FinanceiroWebProps {

}

export function FinanceiroWeb(props: FinanceiroWebProps){
    
    return(
       <div className="bg-fundo">
            <div className="py-[3.75rem] tablet:grid grid-cols-3 tablet:mx-auto tablet:max-w-[59.8rem] tablet:py-[6rem]">
                <h2 className="text-[1.5rem] w-[19rem] mx-auto text-grafite font-extrabold leading-tight text-center tablet:col-span-3 tablet:text-[2rem] tablet:w-[46.8rem] tablet:pb-[5rem]">Amplie suas possibilidades com o <span className="text-vermelho">Financeiro Web</span></h2>
                
                <div className="">
                    <div className="bg-white w-[5.7rem] h-[5.6rem] mt-[1.9rem]  rounded-3xl drop-shadow-2xl flex justify-center mx-auto tablet:w-[8.1rem] tablet:h-[8rem]">
                        <Image src={gestao} alt="" className=" w-[3.9rem] h-auto mt-[0.2rem] tablet:w-[5rem] tablet:h-auto"/>
                    </div>
                    <h4 className="w-[13rem] text-[1rem] mt-[1.5rem] font-extrabold text-center text-grafite mx-auto tablet:w-[16.1rem] tablet:text-[1.25rem]">Gestão da saúde financeira</h4>
                    <p className="w-[12.25rem] text-[0.87rem] text-center mt-[0.6rem] mx-auto text-grafite tablet:w-[15.75rem] tablet:text-[1rem]">Relatórios DRE Gerencial, plano de contas personalizado, fechamento de convênios.</p>
                </div>

                <div className="">
                    <div className="bg-white w-[5.7rem] h-[5.6rem] mt-[1.5rem] rounded-3xl drop-shadow-2xl flex justify-center mx-auto tablet:w-[8.1rem] tablet:h-[8rem]">
                        <Image src={boletos} alt="" className=" w-[2.9rem] h-auto tablet:w-[4.4rem] tablet:h-auto"/>
                    </div>
                    <h4 className="w-[13rem] text-[1rem] mt-[1.5rem] font-extrabold text-center text-grafite mx-auto tablet:w-[16.1rem] tablet:text-[1.25rem]">Emissão de Boletos</h4>
                    <p className="w-[13rem] text-[0.87rem] text-center mt-[0.6rem] mx-auto text-grafite tablet:w-[15.75rem] tablet:text-[1rem]">Integração com instituições financeiras para facilitar a emissão de remessas e retorno.</p>
                </div>

                <div className="">
                    <div className="bg-white w-[5.7rem] h-[5.6rem] mt-[1.5rem] rounded-3xl drop-shadow-2xl flex justify-center mx-auto tablet:w-[8.1rem] tablet:h-[8rem]">
                        <Image src={sistema} alt="" className=" w-[3.9rem] h-auto tablet:w-[5rem] tablet:h-auto"/>
                    </div>
                    <h4 className="w-[13rem] text-[1rem] mt-[1.5rem] font-extrabold text-center text-grafite mx-auto tablet:w-[16.1rem] tablet:text-[1.25rem]">Sistema de cobrança</h4>
                    <p className="w-[12.25rem] text-[0.87rem] text-center mt-[0.6rem] mx-auto text-grafite tablet:w-[15.75rem] tablet:text-[1rem]">Notificações de cobranças via WhatsApp e SMS conforme regra geral especifica.</p>
                </div>
            </div>
       </div>
        )    

}
    
