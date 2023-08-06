import Image from "next/image"
import missao from '../../public/missao.svg'
import visao from '../../public/visao.svg'
import valores from '../../public/valores.svg'

interface TresProps {

}

export function Tres(props: TresProps){
    
    return(
        <div className="bg-fundo -mt-[5.5rem] pb-[5rem]">
            <div className="pt-[3rem] tablet:mx-auto tablet:max-w-[1000px] tablet:pt-[8rem] tablet:justify-center tablet:items-center">
                <div className="pt-[3rem] tablet:mx-auto tablet:flex tablet:py-[6.5rem] tablet:gap-x-2">

                       
                   <div className="bg-white w-[16.257rem] h-[17.8rem] rounded-xl drop-shadow-lg mx-auto tablet:w-[23.3rem] tablet:h-[17.9rem] ">
                        <div className="absolute bg-white w-[4.8rem] h-[4.7rem] rounded-3xl flex justify-center mx-auto drop-shadow-botao -mt-6 left-[6rem] tablet:w-[7.2rem] tablet:h-[7.1rem] tablet:left-[7rem] tablet:-mt-[5.5rem]">
                            <Image src={missao} alt='' className="tablet:w-[4.5rem] tablet:h-auto"/>   
                        </div>
                        <h2 className="text-[1.25rem] pt-[4.4rem] text-grafite font-extrabold leading-tight text-center tablet:text-center tablet:text-[1.5rem]  tablet:max-w-[15rem] tablet:mx-auto">Missão</h2>  
                        <p className="text-[0.76rem] pt-[0.5rem] text-grafite mx-auto  w-[13.9rem] text-center tablet:text-center tablet:text-[1rem] tablet:w-[16rem] ">Rastreabilidade de insumos e embalagens com conformidade sanitária, incluindo gerenciamento de lotes de florais e homeopatias.</p>
                    </div>

                    <div className="bg-white w-[16.257rem] h-[17.8rem] rounded-xl drop-shadow-lg mx-auto  mt-[3rem] tablet:w-[23.3rem] tablet:h-[17.9rem] tablet:mt-0">
                        <div className="absolute bg-white w-[4.8rem] h-[4.7rem] rounded-3xl flex justify-center mx-auto drop-shadow-botao -mt-6 left-[6rem] tablet:w-[7.2rem] tablet:h-[7.1rem] tablet:left-[7rem] tablet:-mt-[5.5rem]">
                            <Image src={visao} alt='' className="tablet:w-[4.5rem] tablet:h-auto"/>   
                        </div>
                        <h2 className="text-[1.25rem] pt-[4.4rem] w-[8rem] mx-auto text-grafite font-extrabold leading-tight text-center tablet:text-center tablet:text-[1.5rem]  tablet:w-[13rem] tablet:mx-auto">Visão</h2>  
                        <p className="text-[0.76rem] pt-[0.5rem] text-grafite mx-auto  w-[13.9rem] text-center tablet:text-center tablet:text-[1rem]  tablet:w-[16rem]"> Produção eficiente com estoques unificados e reconhecimento automático de laboratórios.</p>
                    </div> 

                    <div className="bg-white w-[16.257rem] h-[17.8rem] rounded-xl drop-shadow-lg mx-auto mt-[3rem] tablet:w-[23.3rem] tablet:h-[17.9rem] tablet:mt-0">
                        <div className="absolute bg-white w-[4.8rem] h-[4.7rem] rounded-3xl flex justify-center mx-auto drop-shadow-botao -mt-6 left-[6rem] tablet:w-[7.2rem] tablet:h-[7.1rem] tablet:left-[7rem] tablet:-mt-[5.5rem]">
                            <Image src={valores} alt='' className="tablet:w-[4.5rem] tablet:h-auto"/>   
                        </div>
                        <h2 className="text-[1.25rem] pt-[4.4rem] text-grafite font-extrabold leading-tight text-center tablet:text-center tablet:text-[1.5rem]  tablet:max-w-[31rem]">Valores</h2>  
                        <p className="text-[0.76rem] pt-[0.5rem] text-grafite mx-auto  w-[13.9rem] text-center tablet:text-center tablet:text-[1rem]  tablet:w-[17rem]">O sistema monitora o peso médio conforme a RDC, sem a necessidade de um processador analítico, reduzindo custos.</p>
                    </div> 

                </div>
                
                    
                    
            </div>
        </div>
        )    

}
    
