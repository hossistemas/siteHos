import Image from 'next/image'
import balanco from '../../public/balanco.png'

interface BalancoProps {

}

export function Balanco(props : BalancoProps){
    
    return(
        <>
        <div className='bg-fundo pb-[5rem] tablet:pb-[1rem] '>
            <div className='tablet:flex'>                
                <Image src={balanco} alt='' className='w-full h-[12rem] tablet:max-w-full tablet:h-[25rem]'/>
            </div>
            <div className='mx-auto flex justify-center items-center'>
                <h4 className='-mt-[11rem] ml-[3rem] mb-5 w-[15rem] text-white text-[1.5rem] font-bold leading-tight tablet:text-[2.25rem] tablet:w-[37rem] tablet:ml-[-15rem] tablet:-mt-[29rem] tablet:pb-[4rem]'>Confira as demonstrações financeiras do Balanço</h4>
            
            </div>
        </div>


        <div className='bg-fundo  mt-[-4rem]'>
            <p className='text-left text-[1rem] text-grafite w-[15rem] py-[1.5rem] font-bold mx-auto tablet:w-[51rem] tablet:text-[2rem] tablet:pt-[8rem] tablet:pb-[5rem]'>Demonstrações Financeiras</p>

        </div>

        
        </>
        )    

}
    