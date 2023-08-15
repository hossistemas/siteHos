import Image from 'next/image'
import indicadores from '../../public/indicadores.png'

interface VideosProps {

}

export function Videos(props : VideosProps){
    
    return(
        
        <div className='bg-fundo  '>
            <p className='text-center text-[1rem]'>Explore os recursos criados pelos consultores da HOS</p>

            <div className='mx-auto'>
                <Image src={indicadores} alt='' className='' />
                <p className='text-center'>Indicadores na Gestão de Drogarias</p>
            </div>
        </div>

        
        )    

}
    