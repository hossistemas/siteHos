import Image from "next/image"
import missao from '../../public/missao.svg'
import visao from '../../public/visao.svg'
import valores from '../../public/valores.svg'

interface TresProps {

}

export function Tres(props: TresProps){
    
    return(
        <div className="bg-fundo -mt-[5.5rem] pb-[5rem]">
            <div className="pt-[3rem] tablet:mx-auto tablet:max-w-[1300px] tablet:pt-[8rem] tablet:justify-center tablet:items-center">
                <div className="pt-[3rem] tablet:mx-auto tablet:flex tablet:py-[6.5rem] tablet:gap-x-2">

                       
                   <div className="bg-white w-[16.257rem] h-[17.8rem] rounded-4xl drop-shadow-lg mx-auto tablet:w-[25rem] tablet:h-[26rem]  group hover:bg-gradient-to-b to-magenta from-laranja transition-all ease-in duration-1000">
                        <div className="absolute bg-white w-[4.8rem] h-[4.7rem] rounded-3xl flex justify-center mx-auto drop-shadow-xl -mt-6 left-[6rem] tablet:drop-shadow-tres tablet:w-[7.2rem] tablet:h-[7.1rem] tablet:left-[9rem] tablet:-mt-[5.5rem] tablet:rounded-4xl">
                            <Image src={missao} alt='' className="tablet:w-[5rem] tablet:h-auto"/>   
                        </div>
                        <h2 className="text-[1.25rem] pt-[5.5rem] text-grafite font-bold leading-tight text-center tablet:text-center tablet:text-[1.875rem]  tablet:max-w-[15rem] tablet:mx-auto group-hover:text-white">Missão</h2>  
                        <p className="text-[0.76rem] pt-[2.4rem] text-grafite mx-auto  w-[13.9rem] text-center tablet:text-center tablet:text-[20px] tablet:w-[20rem]  group-hover:text-white">Oferecer soluções de Tecnologia da Informação voltadas para o varejo farmacêutico, visando satisfazer 
as necessidades dos clientes, colaboradores, parceiros e sócios.</p>
                    </div>

                    <div className="bg-white w-[16.257rem] h-[17.8rem] rounded-4xl drop-shadow-lg mx-auto  mt-[3rem] tablet:w-[25rem] tablet:h-[26rem] tablet:mt-0  group hover:bg-gradient-to-b to-magenta from-laranja transition-all ease-in duration-1000">
                        <div className="absolute bg-white w-[4.8rem] h-[4.7rem] rounded-3xl flex justify-center mx-auto drop-shadow-xl -mt-6 left-[6rem] tablet:w-[7.2rem] tablet:drop-shadow-tres tablet:h-[7.1rem] tablet:left-[9rem] tablet:-mt-[5.5rem] tablet:rounded-4xl">
                            <Image src={visao} alt='' className="tablet:w-[5.5rem] tablet:h-auto"/>   
                        </div>
                        <h2 className="text-[1.25rem] pt-[5.5rem] w-[8rem] mx-auto text-grafite font-bold leading-tight text-center tablet:text-center tablet:text-[1.875rem]  tablet:w-[13rem] tablet:mx-auto group-hover:text-white">Visão</h2>  
                        <p className="text-[0.76rem] pt-[2.4rem] text-grafite mx-auto  w-[13.9rem] text-center tablet:text-center tablet:text-[20px]  tablet:w-[20rem] group-hover:text-white"> Tornar-se uma empresa referência em qualidade do produto e excelência, dentro do mercado nacional, em soluções para o ramo do varejo farmacêutico.</p>
                    </div> 

                    <div className="bg-white w-[16.257rem] h-[17.8rem] rounded-4xl drop-shadow-lg mx-auto mt-[3rem] tablet:w-[25rem] tablet:h-[26rem] tablet:mt-0 group hover:bg-gradient-to-b to-magenta from-laranja transition-all ease-in duration-1000">
                            <div className="absolute bg-white w-[4.8rem] h-[4.7rem] rounded-3xl flex justify-center mx-auto drop-shadow-xl -mt-6 left-[6rem] tablet:w-[7.2rem] tablet:h-[7.1rem] tablet:drop-shadow-tres tablet:left-[9rem] tablet:-mt-[5.5rem] tablet:rounded-4xl ">
                                <Image src={valores} alt="" className="tablet:w-[5rem] tablet:h-auto" />
                            </div>
                            <h2 className="text-[1.25rem] pt-[5.5rem] text-grafite font-bold leading-tight text-center tablet:text-center tablet:text-[1.875rem] tablet:max-w-[31rem] group-hover:text-white">
                                Valores
                            </h2>
                            <p className="text-[0.76rem] pt-[2.4rem] text-grafite mx-auto w-[13.9rem] text-center tablet:text-center tablet:text-[20px] tablet:w-[20rem] group-hover:text-white">
                                Empatia, competência, idoneidade, cordialidade, disciplina, inovação,
                                satisfação, reconhecimento, excelência e lucro.
                            </p>
                    </div>


                </div>
                
                    
                    
            </div>
        </div>
        )    

}
    
