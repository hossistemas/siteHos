import Image from 'next/image'
import universidade from '../../public/herouniversidade.png'

interface HerouniversidadeProps {

}

export function Herouniversidade(props :HerouniversidadeProps){
    
    return(
        
        <div className='bg-fundo pb-[5rem] tablet:pb-[1rem] '>
                <div className='tablet:flex'>                
                    <Image src={universidade} alt='' className='w-full h-[12rem] tablet:max-w-full tablet:h-auto'/>
                </div>
                <div className='mx-auto flex justify-center items-center'>
                    <h4 className='-mt-[11rem] ml-[3rem] mb-5 w-[15rem] text-white text-[1.5rem] font-bold leading-tight tablet:text-[2.25rem] tablet:w-[44rem] tablet:ml-[10rem] tablet:-mt-[22rem] tablet:pb-[4rem]'>Conteúdos descomplicados para você aprender mais sobre a gestão do seu negócio</h4>
                
                </div>
                

            
        
            
        </div>

        
        )    

}
    