import Image from "next/image"
import play from '../../public/play.svg'
import flecha from '../../public/pequenaFlechaDireita.svg'

interface SimplifiqueProps {

}

export function Simplifique(props: SimplifiqueProps){
    
    return(
        <div className="bg-fundo  ">
        <div className="pt-[2rem] tablet:grid tablet:grid-cols-2 tablet:pt-[8rem] tablet:w-[1200px] tablet:mx-auto">
           <div className="mx-auto tablet:col-start-1 tablet:mt-[5rem] ">
                <h2 className="text-[1.5rem] text-grafite font-extrabold leading-tight text-center tablet:text-left tablet:text-[2rem] tablet:w-[25.12rem] ">Simplifique processos e potencialize resultados</h2>  
                <p className="text-[0.87rem] text-grafite mx-auto my-[1.38rem] w-[15rem] text-center tablet:text-left tablet:text-[1.25rem] tablet:w-[21.87rem] tablet:mx-0">
                A HOS é a solução definitiva para tornar a gestão farmacêutica rápida de aprender e fácil de usar.
                </p>
            </div>

            <div className="w-[20rem] h-[11rem] my-[2rem] bg-marcacao flex mx-auto justify-center items-center flex-shrink-0 rounded-xl drop-shadow-xl tablet:w-[38rem] tablet:h-[23.9rem]">
               <div className="bg-gradient-to-b flex  w-[2.69rem] h-[2.69rem] rounded-full from-laranja to-magenta">
                <Image src={play} alt='' className="mx-auto"/>
               </div>
            </div>

            <button className="flex justify-center items-center mx-auto w-[12rem] h-[0.9rem] mt-2[rem] py-[1.3rem] px-[0.8rem] rounded-lg bg-gradient-to-b from-laranja to-magenta tablet:-mt-[9rem] tablet:ml-[6rem] tablet:w-[15rem] tablet:h-[3.5rem] tablet:rounded-lg tablet:hover:bg-gradient-to-b tablet:hover:from-darker tablet:hover:to-darker tablet:hover:duration-1000">
                    <p className="text-fundo text-{0.87rem] text-center pr-[0.5rem]">Quero saber mais</p>
                    <Image src={flecha} alt="" />
            </button>

        </div>
    </div>
        )    

}
    
