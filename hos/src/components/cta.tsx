import Image from "next/image"
import fundo from '../../public/fundoCta.png'
import impulsionar from '../../public/impulsionar.svg'
interface CtaProps {

}

export function Cta(props: CtaProps){
    
    return(
        <div >
            <Image src={fundo} alt="" className="relative w-auto  h-[18.6rem]"/>
            <div className="w-[20rem] h-[13.9rem] bg-white rounded-lg absolute left-3 bottom-[-209rem] ">
                <div >
                    <div className="flex mx-auto bg-white justify-center w-[2.9rem] h-[2.9rem] -mt-6 shadow-xl rounded-lg">
                        <Image src={impulsionar} alt="" className=""/>
                    </div>
                    <h3 className="text-[0.68rem] flex mx-auto justify-center mt-[2rem] text-grafite">Descubra como podemos impulsionar seus resultados</h3>
                    <p className="text-[1.2rem] font-extrabold text-center w-[16.8rem] mt-[0.4rem] mb-[1.3rem] flex mx-auto justify-center leading-tight text-grafite">Solicite uma demonstração agora mesmo</p>
                    <button className="bg-vermelho w-[14rem] h-[2rem] flex mx-auto items-center">
                        <p className="text-[0.9rem] text-white flex mx-auto ">Converse com um especialista</p>
                    </button>
               </div>
            </div>

        </div>
        )    

}
    
