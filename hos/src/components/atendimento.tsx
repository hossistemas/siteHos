
import Image from "next/image"
import telefone from './../../public/telefone.svg'



export function Atendimento(){
  
    return( 
    
     <div className="bg-fundo">
        <div className="w-[360px] mx-auto">
            <h3 className="">Outras formas de atendimento</h3> 

            <div className="bg-fundo border-1 border-magenta border-t-laranja rounded-xl mx-auto">
                <div className="bg-gradient-to-b from-laranja to-magenta rounded-full flex justify-center items-center mx-auto w-[4rem] h-[4rem]" >
                    <Image src={telefone} alt='' className="w-[2.5rem] h-[2.5rem]" />
                </div>
                <h5 className="text-grafite text-[0.9rem] font-bold text-center mx-auto ">Telefone</h5>
                <p className=" text-cinza w-[13rem] text-center mx-auto">+55 (54)  2621-4400</p>
                <p className=" text-cinza w-[13rem] text-center mx-auto">Segunda a Sexta-feira: 8h às 18h. Sábado: 08h às 12h.</p>

            </div>
        
        
        
        
        
        
        </div>
           
     </div>
        

    
       
        )    

}