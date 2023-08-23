import telefone from '../../public/telefone.svg'
import plantao from '../../public/plantao.svg'
import email from '../../public/email.svg'
import Image from "next/image"



export function Atendimento(){
  
    return( 
    
     <div className="bg-fundo">
        <div className="w-[360px] mx-auto pt-[3rem] mt-[-5rem] pb-[4rem] tablet:w-[1040px] ">
            <h3 className="text-[1rem] text-grafite font-bold mx-auto text-center pb-[4rem] tablet:text-[1.5rem]">Outras formas de atendimento</h3> 

             <div className='tablet:flex'>
                <div className="bg-fundo border-1 border-magenta border-t-laranja rounded-xl mx-auto h-[10.5rem] w-[14.5rem] mb-[4rem]  tablet:w-[19rem] tablet:h-[14rem] tablet:border-2">
                    <div className="bg-gradient-to-b from-laranja to-magenta rounded-full flex justify-center items-center mx-auto w-[4rem] h-[4rem] mt-[-2rem] tablet:w-[5rem] tablet:h-[5rem] tablet:mt-[-3rem]" >
                        <Image src={telefone} alt='' className="w-[2.5rem] h-[2.5rem] tablet:w-[3.5rem] tablet:h-[3.5rem]" />
                    </div>
                    <h5 className="text-grafite text-[0.9rem] font-bold text-center mx-auto pt-[1rem] pb-[0.5rem] tablet:text-[1.25rem]">Telefone</h5>
                    <p className=" text-cinza text-[0.75rem] w-[13rem] text-center mx-auto pb-[0.5rem] tablet:text-[1rem]">+55 (54)  2621-4400</p>
                    <p className=" text-cinza text-[0.75rem] w-[13rem] text-center mx-auto tablet:text-[1rem]">Segunda a Sexta-feira: 8h às 18h. Sábado: 08h às 12h.</p>
                </div>

                <div className="bg-fundo border-1 border-magenta border-t-laranja rounded-xl mx-auto h-[10.5rem] w-[14.5rem] mb-[4rem] tablet:w-[19rem] tablet:h-[14rem] tablet:border-2">
                    <div className="bg-gradient-to-b from-laranja to-magenta rounded-full flex justify-center items-center mx-auto w-[4rem] h-[4rem] mt-[-2rem] tablet:w-[5rem] tablet:h-[5rem] tablet:mt-[-3rem]" >
                        <Image src={plantao} alt='' className="w-[2.5rem] h-[2.5rem] tablet:w-[3.5rem] tablet:h-[3.5rem]" />
                    </div>
                    <h5 className="text-grafite text-[0.9rem] font-bold text-center mx-auto pt-[1rem] pb-[0.5rem] tablet:text-[1.25rem]">Plantão</h5>
                    <p className=" text-cinza text-[0.75rem] w-[13rem] text-center mx-auto pb-[0.5rem] tablet:text-[1rem]">+55 (54) 9 8172-1122</p>
                    <p className=" text-cinza text-[0.75rem] w-[14rem] text-center mx-auto tablet:text-[1rem]">Segunda a Sexta-feira: 18h às 22h Sábados: 12h às 22h Domingos e feriados: 8h às 22h</p>
                </div>

                <div className="bg-fundo border-1 border-magenta border-t-laranja rounded-xl mx-auto h-[10.5rem] w-[14.5rem] mb-[4rem] tablet:w-[19rem] tablet:h-[14rem] tablet:border-2">
                    <div className="bg-gradient-to-b from-laranja to-magenta rounded-full flex justify-center items-center mx-auto w-[4rem] h-[4rem] mt-[-2rem] tablet:w-[5rem] tablet:h-[5rem] tablet:mt-[-3rem]" >
                        <Image src={email} alt='' className="w-[2.5rem] h-[2.5rem] tablet:w-[3.5rem] tablet:h-[3.5rem]" />
                    </div>
                    <h5 className="text-grafite text-[0.9rem] font-bold text-center mx-auto pt-[1rem] pb-[0.5rem] tablet:text-[1.25rem]">E-mail</h5>
                    <p className=" text-cinza text-[0.75rem] w-[13rem] text-center mx-auto pb-[0.5rem] tablet:text-[1rem]"> suporte@hos.com.br</p>
                    <p className=" text-cinza text-[0.75rem] w-[13rem] text-center mx-auto tablet:text-[1rem]">Para atendimentos que não exigem urgência. Entraremos em contato em até 48 horas.</p>
                </div>
            </div>   
        
        
        
        
        
        
        </div>
           
     </div>
        

    
       
        )    

}