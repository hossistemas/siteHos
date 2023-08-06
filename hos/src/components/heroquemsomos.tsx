import Image from 'next/image'
import quemsomos from '../../public/quemsomos.png'

interface HeroquemsomosProps {

}

export function Heroquemsomos(props : HeroquemsomosProps){
    
    return(
        <>
        
        <div className='bg-fundo pb-[5rem] tablet:pb-[1rem] '>
                <div className='tablet:flex'>                
                    <Image src={quemsomos} alt='' className='w-full h-[9rem] tablet:max-w-full tablet:h-auto'/>
                </div>
                <div className=''>
                    <h1 className='-mt-[7rem] text-white text-[1.5rem] font-bold leading-none tablet:text-[2.25rem]'>Somos soluções para automação de farmácias e drogarias</h1>
                    <div className='bg-white w-[20.5rem] mx-auto  h-[56rem] rounded-lg drop-shadow-xl'>
                        <h2 className=' flex justify-center text-[1.25rem] pt-[2.5rem] pb-[0.5rem] text-grafite font-extrabold'>Um pouco sobre nós</h2>
                        <div className='bg-vermelho w-[6.9rem] h-[0.2rem] mx-auto rounded-xl'></div>
                        <p className='text-center text-[0.87rem] text-grafite leading-relaxed pt-[2rem] px-[2.1rem]'>
                        A <span className=' font-bold'>HOS</span> nasceu em 1994 como Software House de uma rede de farmácias familiar. 
                        A necessidade de <span className=' font-bold'>informatizar processos</span> e desenvolver um banco de dados levou à contratação de serviços de programação terceirizados, entretanto enfrentamos desafios com diferentes linguagens e resultados demorados. 
                        <br></br><br />
                        Foi quando tivemos um <span className=' font-bold'>insight:</span> contratar um programador interno para trabalhar lado a lado com <span className=' font-bold'>nossa equipe</span>. Conforme <span className=' font-bold'>aprimorávamos</span> nossos produtos e nos <span className=' font-bold'>conectávamos</span> com as demandas do mercado, percebemos que tínhamos uma oportunidade única de ir além, então criamos a <span className=' font-bold'>HOS</span>.
                        <br></br><br />
                        O nome <span className=' font-bold'>HOS</span> foi escolhido em homenagem aos criadores: Henrique da Silva, Oneide Moraes e Silvano Peruzzo. Após cumprir sua missão, a HOS se desvinculou da farmácia, ganhando uma personalidade própria.
                        <br></br><br />
                        Atualmente nossos softwares estão presentes em centenas de farmácias em todo o Brasil, resultado do trabalho conjunto de nossos clientes, colaboradores e representantes. Buscamos constantemente o que há de mais moderno, mantendo a qualidade de nossos produtos.

                        </p>
                    </div>
                
                </div>
                

            
        
            
        </div>

        </>
        )    

}
    