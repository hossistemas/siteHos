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

                       
                   <div className="bg-white w-[16.257rem] h-[17.8rem] rounded-3xl drop-shadow-lg mx-auto tablet:w-[23.3rem] tablet:h-[24rem]  group hover:bg-gradient-to-b to-magenta from-laranja transition-all ease-in duration-1000">
                        <div className="absolute bg-white w-[4.8rem] h-[4.7rem] rounded-3xl flex justify-center mx-auto drop-shadow-xl -mt-6 left-[6rem] tablet:w-[7.2rem] tablet:h-[7.1rem] tablet:left-[7rem] tablet:-mt-[5.5rem]">
                            <Image src={missao} alt='' className="tablet:w-[4.5rem] tablet:h-auto"/>   
                        </div>
                        <h2 className="text-[1.25rem] pt-[5.5rem] text-grafite font-extrabold leading-tight text-center tablet:text-center tablet:text-[1.5rem]  tablet:max-w-[15rem] tablet:mx-auto group-hover:text-white">Missão</h2>  
                        <p className="text-[0.76rem] pt-[2.4rem] text-grafite mx-auto  w-[13.9rem] text-center tablet:text-center tablet:text-[1rem] tablet:w-[16rem]  group-hover:text-white">Oferecer soluções de Tecnologia da Informação voltadas para o varejo farmacêutico, visando satisfazer 
as necessidades dos clientes, colaboradores, parceiros e sócios.</p>
                    </div>

                    <div className="bg-white w-[16.257rem] h-[17.8rem] rounded-xl drop-shadow-lg mx-auto  mt-[3rem] tablet:w-[23.3rem] tablet:h-[24rem] tablet:mt-0  group hover:bg-gradient-to-b to-magenta from-laranja transition-all ease-in duration-1000">
                        <div className="absolute bg-white w-[4.8rem] h-[4.7rem] rounded-3xl flex justify-center mx-auto drop-shadow-xl -mt-6 left-[6rem] tablet:w-[7.2rem] tablet:h-[7.1rem] tablet:left-[7rem] tablet:-mt-[5.5rem]">
                            <Image src={visao} alt='' className="tablet:w-[4.5rem] tablet:h-auto"/>   
                        </div>
                        <h2 className="text-[1.25rem] pt-[5.5rem] w-[8rem] mx-auto text-grafite font-extrabold leading-tight text-center tablet:text-center tablet:text-[1.5rem]  tablet:w-[13rem] tablet:mx-auto group-hover:text-white">Visão</h2>  
                        <p className="text-[0.76rem] pt-[2.4rem] text-grafite mx-auto  w-[13.9rem] text-center tablet:text-center tablet:text-[1rem]  tablet:w-[16rem] group-hover:text-white"> Tornar-se uma empresa referência em qualidade do produto e excelência, dentro do mercado nacional, em soluções para o ramo do varejo farmacêutico.</p>
                    </div> 

                    <div className="bg-white w-[16.257rem] h-[17.8rem] rounded-xl drop-shadow-lg mx-auto mt-[3rem] tablet:w-[23.3rem] tablet:h-[24rem] tablet:mt-0 group hover:bg-gradient-to-b to-magenta from-laranja transition-all ease-in duration-1000">
                            <div className="absolute bg-white w-[4.8rem] h-[4.7rem] rounded-3xl flex justify-center mx-auto drop-shadow-xl -mt-6 left-[6rem] tablet:w-[7.2rem] tablet:h-[7.1rem] tablet:left-[7rem] tablet:-mt-[5.5rem] ">
                                <Image src={valores} alt="" className="tablet:w-[4.5rem] tablet:h-auto" />
                            </div>
                            <h2 className="text-[1.25rem] pt-[5.5rem] text-grafite font-extrabold leading-tight text-center tablet:text-center tablet:text-[1.5rem] tablet:max-w-[31rem] group-hover:text-white">
                                Valores
                            </h2>
                            <p className="text-[0.76rem] pt-[2.4rem] text-grafite mx-auto w-[13.9rem] text-center tablet:text-center tablet:text-[1rem] tablet:w-[17rem] group-hover:text-white">
                                Empatia, competência, idoneidade, cordialidade, disciplina, inovação,
                                satisfação, reconhecimento, excelência e lucro.
                            </p>
                    </div>


                </div>
                
                    
                    
            </div>
        </div>
        )    

}
    
