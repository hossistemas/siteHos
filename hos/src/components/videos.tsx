import Image from 'next/image'
import indicadores from '../../public/indicadores.png'
import dicas from '../../public/dicas.png'
import prosperar from '../../public/prosperar.png'
import frente from '../../public/frente.jpeg'
import Link from 'next/link'
import play from '../../public/play.svg'
interface VideosProps {

}

export function Videos(props : VideosProps){
    
    return(
        
        <div className='bg-fundo  mt-[-4rem]'>
            <p className='text-center text-[1rem] text-grafite w-[15rem] py-[1.5rem] font-bold mx-auto tablet:w-[51rem] tablet:text-[2rem] tablet:pt-[8rem] tablet:pb-[5rem]'>Explore os recursos criados pelos consultores da HOS</p>

            <div className='tablet:grid tablet:grid-cols-2 tablet:gap-y-10 tablet:pb-[6rem]'>
                <div className='mx-auto relative'>
                    <Link href='https://www.youtube.com/watch?v=_l5KEDfDiDc&ab_channel=HosSistemas' target='_blank'>
                        <Image src={indicadores} alt='' className='  w-auto h-[12rem] mx-auto tablet:h-[18rem] transition-all ease-in-out duration-300' />
                        <div className=' absolute bg-cinza top-[4rem] left-[9rem] w-[3.59rem] h-[3.59rem]  rounded-full tablet:top-[7rem] tablet:left-[14rem]  hover:bg-vermelho transition-all ease-in-out duration-500'>
                            <Image src={play} alt='' className='flex justify-center items-center mx-auto mt-4'/>
                        </div>         
                    </Link>
                    <p className='text-center text-[0.87rem] font-semibold mx-auto tablet:text-[1.5rem] tablet:w-[24rem] tablet:pt-4'>Indicadores na Gestão de Drogarias</p>
                </div>

                <div className='mx-auto py-[2rem] relative w-4/4 tablet:py-0'>
                    <Link href='https://www.youtube.com/watch?v=lm1aYxNGV3E&ab_channel=HosSistemas' target='_blank'>
                    <Image src={dicas} alt='' className='  w-auto h-[12rem] mx-auto tablet:h-[18rem] transition-all ease-in-out duration-300' />
                        <div className=' absolute bg-cinza top-[6rem] left-[9rem] w-[3.59rem] h-[3.59rem]  rounded-full tablet:top-[7rem] tablet:left-[14rem]  hover:bg-vermelho transition-all ease-in-out duration-500'>
                            <Image src={play} alt='' className='flex justify-center items-center mx-auto mt-4'/>
                        </div>  
                    </Link>
                    <p className='text-center text-[0.87rem] font-semibold w-[14rem] mx-auto tablet:text-[1.5rem] tablet:w-[24rem] tablet:pt-4'>Dicas de Gestão Farmacêutica para o Sucesso em Farmácias</p>
                </div>

                <div className='mx-auto relative w-4/4'>
                    <Link href='https://www.youtube.com/watch?v=gyJnJdlnHQI&ab_channel=HosSistemas' target='_blank'>
                    <Image src={prosperar} alt='' className=' rounded-lg w-auto h-[12rem] mx-auto tablet:h-[18rem] transition-all ease-in-out duration-300' />
                        <div className=' absolute bg-cinza top-[4rem] left-[9rem] w-[3.59rem] h-[3.59rem]  rounded-full tablet:top-[7rem] tablet:left-[14rem]  hover:bg-vermelho transition-all ease-in-out duration-500'>
                            <Image src={play} alt='' className='flex justify-center items-center mx-auto mt-4'/>
                        </div>  
                    </Link>
                    <p className='text-center text-[0.87rem] font-semibold w-[14rem] mx-auto tablet:text-[1.5rem] tablet:w-[24rem] tablet:pt-4'>Como prosperar no Varejo Farmacêutico</p>
                </div>

                <div className='mx-auto py-[2rem] relative w-4/4 tablet:py-0 tablet:mt-[0.5rem]'>
                <Link href='https://www.youtube.com/watch?v=RGg3OHoguWo&t=2s' target='_blank'>
                <Image src={frente} alt='' className=' rounded-lg w-auto h-[12rem] mx-auto tablet:h-[18rem] transition-all ease-in-out duration-300' />
                        <div className=' absolute bg-cinza top-[4rem] left-[9rem] w-[3.59rem] h-[3.59rem]  rounded-full tablet:top-[7rem] tablet:left-[14rem]  hover:bg-vermelho transition-all ease-in-out duration-500'>
                            <Image src={play} alt='' className='flex justify-center items-center mx-auto mt-4'/>
                        </div> 
                </Link>
                    <p className='text-center text-[0.87rem] font-semibold w-[14rem] mx-auto tablet:text-[1.5rem] tablet:w-[24rem]'>HOS Farma: Sistema de Gestão para Farmácias e Drogarias</p>
                </div>
            </div>
        </div>

        
        )    

}
    