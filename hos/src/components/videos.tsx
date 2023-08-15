import Image from 'next/image'
import indicadores from '../../public/indicadores.png'
import dicas from '../../public/dicas.png'
import prosperar from '../../public/prosperar.png'
import frente from '../../public/frente.png'

interface VideosProps {

}

export function Videos(props : VideosProps){
    
    return(
        
        <div className='bg-fundo  mt-[-4rem]'>
            <p className='text-center text-[1rem] text-grafite w-[15rem] py-[1.5rem] font-bold mx-auto'>Explore os recursos criados pelos consultores da HOS</p>

            <div>
                <div className='mx-auto'>
                    <Image src={indicadores} alt='' className='' />
                    <p className='text-center text-[0.87rem] font-semibold mx-auto'>Indicadores na Gestão de Drogarias</p>
                </div>

                <div className='mx-auto py-[2rem]'>
                    <Image src={dicas} alt='' className='' />
                    <p className='text-center text-[0.87rem] font-semibold w-[14rem] mx-auto'>Dicas de Gestão Farmacêutica para o Sucesso em Farmácias</p>
                </div>

                <div className='mx-auto'>
                    <Image src={prosperar} alt='' className='' />
                    <p className='text-center text-[0.87rem] font-semibold w-[14rem] mx-auto'>Como prosperar no Varejo Farmacêutico</p>
                </div>

                <div className='mx-auto py-[2rem]'>
                    <Image src={frente} alt='' className='' />
                    <p className='text-center text-[0.87rem] font-semibold w-[14rem] mx-auto'>HOS Frente de Loja</p>
                </div>
            </div>
        </div>

        
        )    

}
    