import Image from "next/image"
import conformidade from '../../public/conformidade.png'
import flecha from '../../public/pequenaFlechaDireita.svg'

interface ConformidadeProps {

}

export function Conformidade(props: ConformidadeProps){
    
    return(
        <div className="bg-fundo">
        <div className="-mt-[5rem] py-[4rem] tablet:grid tablet:grid-cols-2 tablet:pt-[4rem] tablet:w-[1200px] tablet:mx-auto">
           <div className="mx-auto tablet:mt-[5rem] ">
                
                <h2 className="text-[1.25rem] pb-[1.5rem] text-grafite font-extrabold leading-tight text-center w-[18rem] mx-auto tablet:text-left tablet:text-[2rem] tablet:w-[31rem] tablet:pb-[0.5rem]">Fique em conformidade com as obrigações fiscais</h2>                 
                <p className="text-[0.87rem] text-grafite mx-auto my-[1.38rem] w-[18rem] text-center tablet:text-left tablet:text-[1.25rem] tablet:w-[31rem] tablet:mx-0">
                Com o HOSFiscal, sua farmácia terá um processo contábil mais ágil e eficiente, além de ficar em conformidade com as obrigações fiscais, evitando multas e sanções.
                </p>
            </div>

            <div className="my-[2rem] flex mx-auto justify-center items-center flex-shrink-0 rounded-xl drop-shadow-xl tablet:grid tablet:col-start-2 tablet:w-[38rem] tablet:h-[23.9rem]">       
                    <Image src={conformidade} alt='' className="w-[20rem] h-auto mx-auto tablet:w-[28rem] tablet:h-auto"/>
                </div>

            <button className="flex justify-center items-center mx-auto pt-[1.5rem] w-[12rem] h-[0.9rem]  py-[1.3rem] px-[0.8rem] rounded-lg bg-gradient-to-b from-laranja to-magenta tablet:-mt-[6rem] tablet:col-start-1 tablet:ml-[3rem] tablet:w-[10rem] tablet:h-[3.5rem] tablet:rounded-md tablet:hover:bg-gradient-to-b tablet:hover:from-darker tablet:hover:to-darker tablet:hover:duration-1000">
                    <p className="text-fundo text-{0.87rem] text-center pr-[0.5rem]">Saiba mais</p>
                    <Image src={flecha} alt="" />
            </button>

        </div>
    </div>
        )    

}
    
