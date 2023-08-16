import Image from 'next/image'
import indicadores from '../../public/indicadores.png'
import dicas from '../../public/dicas.png'
import prosperar from '../../public/prosperar.png'
import frente from '../../public/frente.png'
import Link from 'next/link'

interface VideosProps {

}

export function Videos(props : VideosProps){
    
    return(
        
        <div className='bg-fundo  mt-[-4rem]'>
            <p className='text-center text-[1rem] text-grafite w-[15rem] py-[1.5rem] font-bold mx-auto tablet:w-[51rem] tablet:text-[2rem] tablet:pt-[8rem] tablet:pb-[5rem]'>Explore os recursos criados pelos consultores da HOS</p>

            <div className='tablet:grid tablet:grid-cols-2 tablet:gap-y-10 tablet:pb-[6rem]'>
                <div className='mx-auto'>
                    <Link href='https://www.youtube.com/watch?v=_l5KEDfDiDc&ab_channel=HosSistemas' target='_blank'>
                        <Image src={indicadores} alt='' className='mx-auto tablet:w-[35rem]' />
                    </Link>
                    <p className='text-center text-[0.87rem] font-semibold mx-auto tablet:text-[1.5rem] tablet:w-[24rem]'>Indicadores na Gestão de Drogarias</p>
                </div>

                <div className='mx-auto py-[2rem] tablet:py-0'>
                    <Link href='https://www.youtube.com/watch?v=lm1aYxNGV3E&ab_channel=HosSistemas' target='_blank'>
                        <Image src={dicas} alt='' className='mx-auto tablet:w-[35rem]' />
                    </Link>
                    <p className='text-center text-[0.87rem] font-semibold w-[14rem] mx-auto tablet:text-[1.5rem] tablet:w-[24rem]'>Dicas de Gestão Farmacêutica para o Sucesso em Farmácias</p>
                </div>

                <div className='mx-auto'>
                    <Link href='https://www.youtube.com/watch?v=gyJnJdlnHQI&ab_channel=HosSistemas' target='_blank'>
                        <Image src={prosperar} alt='' className='mx-auto tablet:w-[35rem]' />
                    </Link>
                    <p className='text-center text-[0.87rem] font-semibold w-[14rem] mx-auto tablet:text-[1.5rem] tablet:w-[24rem]'>Como prosperar no Varejo Farmacêutico</p>
                </div>

                <div className='mx-auto py-[2rem] tablet:py-0 tablet:mt-[-2.3rem]'>
                <Link href='https://www.youtube.com/watch?v=RGg3OHoguWo&ab_channel=HosSistemas' target='_blank'>
                    <Image src={frente} alt='' className='mx-auto tablet:w-[35rem]' />
                </Link>
                    <p className='text-center text-[0.87rem] font-semibold w-[14rem] mx-auto tablet:text-[1.5rem] tablet:w-[24rem]'>HOS Frente de Loja</p>
                </div>
            </div>
        </div>

        
        )    

}
    