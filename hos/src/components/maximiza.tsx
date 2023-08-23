import Image from "next/image"
import magistral from '../../public/magistral.svg'
import filiais from '../../public/filiaiseLaboratorios.svg'
import pesagem from '../../public/pesagem.svg'

interface MaximizeProps {

}

export function Maximize(props: MaximizeProps){
    
    return(
        <div className="bg-fundo -mt-[5.5rem] pb-[5rem]">
            <div className="pt-[6rem] tablet:mx-auto tablet:max-w-[1000px] tablet:pt-[4rem] tablet:justify-center tablet:items-center">
                <h2 className="text-[1.25rem] pb-[2rem] w-[18rem] mx-auto text-grafite font-extrabold leading-tight text-center tablet:w-[35rem] tablet:flextablet:justify-center tablet:text-center tablet:text-[2rem]">Maximize o Desempenho de sua Farmácia de Manipulação</h2>  
                
                <div className="pt-[3rem] tablet:mx-auto tablet:flex tablet:pb-[2rem] tablet:pt-[6rem] tablet:gap-x-6">

                       
                   <div className="bg-white w-[17.25rem] h-[11.875rem] rounded-xl drop-shadow-lg mx-auto tablet:w-[23.3rem] tablet:h-[17.9rem] ">
                        <div className="absolute bg-white w-[4.8rem] h-[4.7rem] rounded-3xl flex justify-center mx-auto drop-shadow-botao -mt-6 left-[6rem] tablet:rounded-4xl tablet:w-[7.2rem] tablet:h-[7.1rem] tablet:left-[6.5rem] tablet:-mt-[5.5rem]">
                            <Image src={magistral} alt='' className="tablet:w-[4.5rem] tablet:h-auto"/>   
                        </div>
                        <h2 className="text-[1rem] pt-[4.4rem] text-grafite font-extrabold leading-tight text-center tablet:text-center tablet:text-[1.5rem] tablet:pb-[1.6rem] tablet:max-w-[15rem] tablet:mx-auto"> Controle da Produção Magistral</h2>  
                        <p className="text-[0.76rem] pt-[0.5rem] text-grafite mx-auto  w-[13.99rem] text-center tablet:text-center tablet:text-[1rem] tablet:w-[16rem]  tablet:leading-tight">Rastreabilidade de insumos e embalagens com conformidade sanitária, incluindo gerenciamento de lotes de florais e homeopatias.</p>
                    </div>

                    <div className="bg-white w-[17.25rem] h-[11.875rem] rounded-xl drop-shadow-lg mx-auto  mt-[3rem] tablet:w-[23.3rem] tablet:h-[17.9rem] tablet:mt-0">
                        <div className="absolute bg-white w-[4.8rem] h-[4.7rem] rounded-3xl flex justify-center mx-auto drop-shadow-botao -mt-6 left-[6rem] tablet:rounded-4xl tablet:w-[7.2rem] tablet:h-[7.1rem] tablet:left-[6.5rem] tablet:-mt-[5.5rem]">
                            <Image src={filiais} alt='' className="tablet:w-[4.5rem] tablet:h-auto"/>   
                        </div>
                        <h2 className="text-[1rem] pt-[4.4rem] w-[8rem] mx-auto text-grafite font-extrabold leading-tight text-center tablet:text-center tablet:text-[1.5rem]  tablet:pb-[1.6rem]  tablet:w-[13rem] tablet:mx-auto">Integração Filiais e Laboratórios </h2>  
                        <p className="text-[0.76rem] pt-[0.5rem] text-grafite mx-auto  w-[13.5rem] text-center tablet:text-center tablet:text-[1rem]  tablet:w-[16rem] tablet:leading-tight"> Produção eficiente com estoques unificados e reconhecimento automático de laboratórios.</p>
                    </div> 

                    <div className="bg-white w-[17.25rem] h-[11.875rem] rounded-xl drop-shadow-lg mx-auto mt-[3rem] tablet:w-[23.3rem] tablet:h-[17.9rem] tablet:mt-0">
                        <div className="absolute bg-white w-[4.8rem] h-[4.7rem] rounded-3xl flex justify-center mx-auto drop-shadow-botao -mt-6 left-[6rem] tablet:rounded-4xl tablet:w-[7.2rem] tablet:h-[7.1rem] tablet:left-[6.5rem] tablet:-mt-[5.5rem]">
                            <Image src={pesagem} alt='' className="tablet:w-[4.5rem] tablet:h-auto"/>   
                        </div>
                        <h2 className="text-[1rem] pt-[4.4rem] text-grafite font-extrabold leading-tight text-center tablet:text-center tablet:pt-[5.5rem] tablet:text-[1.5rem] tablet:pb-[2.4rem]  tablet:max-w-[31rem]">Pesagem Monitorada </h2>  
                        <p className="text-[0.76rem] pt-[0.5rem] text-grafite mx-auto  w-[13.9rem] text-center tablet:text-center tablet:text-[1rem]  tablet:w-[17rem] tablet:leading-tight">O sistema monitora o peso médio conforme a RDC, sem a necessidade de um processador analítico, reduzindo custos.</p>
                    </div> 

                </div>
                
                    
                    
            </div>
        </div>
        )    

}
    
