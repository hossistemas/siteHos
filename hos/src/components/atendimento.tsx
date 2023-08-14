
import Image from "next/image"
import telefone from './../../public/telefone.svg'



export function Atendimento(){
  
    return( 
    
     <div className="bg-fundo">
        <div className="w-[360px] mx-auto pt-[3rem] mt-[-5rem] pb-[4rem]">
            <h3 className="text-[1rem] text-grafite font-bold mx-auto text-center pb-[4rem]">Outras formas de atendimento</h3> 

            <div className="bg-fundo border-1 border-magenta border-t-laranja rounded-xl mx-auto h-[10.5rem] w-[14.5rem] mb-[4rem]">
                <div className="bg-gradient-to-b from-laranja to-magenta rounded-full flex justify-center items-center mx-auto w-[4rem] h-[4rem] mt-[-2rem]" >
                    <Image src={telefone} alt='' className="w-[2.5rem] h-[2.5rem]" />
                </div>
                <h5 className="text-grafite text-[0.9rem] font-bold text-center mx-auto pt-[1rem] pb-[0.5rem]">Telefone</h5>
                <p className=" text-cinza text-[0.75rem] w-[13rem] text-center mx-auto pb-[0.5rem]">+55 (54)  2621-4400</p>
                <p className=" text-cinza text-[0.75rem] w-[13rem] text-center mx-auto">Segunda a Sexta-feira: 8h às 18h. Sábado: 08h às 12h.</p>
            </div>

            <div className="bg-fundo border-1 border-magenta border-t-laranja rounded-xl mx-auto h-[10.5rem] w-[14.5rem] mb-[4rem]">
                <div className="bg-gradient-to-b from-laranja to-magenta rounded-full flex justify-center items-center mx-auto w-[4rem] h-[4rem] mt-[-2rem]" >
                    <Image src={telefone} alt='' className="w-[2.5rem] h-[2.5rem]" />
                </div>
                <h5 className="text-grafite text-[0.9rem] font-bold text-center mx-auto pt-[1rem] pb-[0.5rem]">Telefone</h5>
                <p className=" text-cinza text-[0.75rem] w-[13rem] text-center mx-auto pb-[0.5rem]">+55 (54)  2621-4400</p>
                <p className=" text-cinza text-[0.75rem] w-[13rem] text-center mx-auto">Segunda a Sexta-feira: 8h às 18h. Sábado: 08h às 12h.</p>
            </div>

            <div className="bg-fundo border-1 border-magenta border-t-laranja rounded-xl mx-auto h-[10.5rem] w-[14.5rem] mb-[4rem]">
                <div className="bg-gradient-to-b from-laranja to-magenta rounded-full flex justify-center items-center mx-auto w-[4rem] h-[4rem] mt-[-2rem]" >
                    <Image src={telefone} alt='' className="w-[2.5rem] h-[2.5rem]" />
                </div>
                <h5 className="text-grafite text-[0.9rem] font-bold text-center mx-auto pt-[1rem] pb-[0.5rem]">Telefone</h5>
                <p className=" text-cinza text-[0.75rem] w-[13rem] text-center mx-auto pb-[0.5rem]">+55 (54)  2621-4400</p>
                <p className=" text-cinza text-[0.75rem] w-[13rem] text-center mx-auto">Segunda a Sexta-feira: 8h às 18h. Sábado: 08h às 12h.</p>
            </div>
        
        
        
        
        
        
        </div>
           
     </div>
        

    
       
        )    

}