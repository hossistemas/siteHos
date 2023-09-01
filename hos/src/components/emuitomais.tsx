import Image from "next/image"
import emuitomais from '../../public/emuitomais.png'

interface EmuitomaisProps {

}

export function Emuitomais(props: EmuitomaisProps){
    
    return(
        <>
        <div className="px-[2.5rem] py-[2rem] bg-fundo tablet:pt-[10rem] tablet:px-[8rem]">
            <div className="max-w-[460px] mx-auto tablet:max-w-[1024px] tablet:flex tablet:justify-center tablet:items-center tablet:mx-auto">
    
                <div className="pb-[1.7rem] tablet:mr-[4rem]">
                    <Image src={emuitomais} alt="" className="max-w-[17rem] h-auto mx-auto tablet:w-[33rem] tablet:h-auto"/>
                </div>

                <div className="max-w-[17rem] mx-auto tablet:max-w-[27rem]">
                    
                    <ul className="list-disc text-[0.8rem]  text-grafite  font-medium ml-[1rem] leading-6 tablet:-mt-[4rem] tablet:leading-loose">
                        <h2 className="text-[1.5rem] font-bold text-grafite leading-tight mb-[1.5rem] tablet:text-[2rem] ">E muito mais...</h2>
                        <li className="tablet:text-[1.1rem] font-normal">Tela inicial de alerta da validade dos lotes</li>
                        <li className="tablet:text-[1.1rem] font-normal">Emissão de orçamentos com impressão de documentos relacionados</li>
                        <li className="tablet:text-[1.1rem] font-normal">Formação de preço de medicamentos homeopáticos considerando insumos internos e/ou industrializados</li>
                        <li className="tablet:text-[1.1rem] font-normal">Definição automática da embalagem</li>
                        <li className="tablet:text-[1.1rem] font-normal">Controle de estoque e laudos por lote, com geração automática do fator de correção</li>
                    </ul>
                </div>

            </div>
        </div>

        </>
        )    

}
    
