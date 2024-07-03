

import Image from 'next/image'
import balanco from '../../public/balanco.png'
import pdf from '../../public/pdficon.svg'
import download from '../../public/download.svg'
import Link from 'next/link'


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
                <h4 className='-mt-[11rem] ml-[3rem] mb-5 w-[15rem] text-white text-[1.5rem] font-bold leading-tight tablet:text-[2.25rem] tablet:w-[37rem] tablet:ml-[-15rem] tablet:-mt-[22rem] tablet:pb-[4rem]'>Confira as demonstrações financeiras do Balanço</h4>
            
            </div>
        </div>

        <div className='bg-fundo'>
            <div className='w-[1200px]  mt-[-4rem] '>
                <p className='text-left text-[1rem] text-grafite w-[15rem] py-[1.5rem] font-bold  ml-[3rem] tablet:w-[51rem] tablet:text-[2rem] tablet:pt-[8rem] tablet:pb-[5rem] tablet:ml-[15rem]'>Demonstrações Financeiras</p>
            </div>

            <div className='w-[18rem] h-[0.05rem] bg-cinza ml-[3rem] mt-[-1rem] tablet:ml-[15rem] tablet:w-[55rem] tablet:h-[0.1rem] tablet:mt-[-1.5rem]'></div>

            <div className='bg-fundo pb-[5rem]'>
                <div className='flex ml-[3rem] text-[0.7rem] items-center py-[0.5rem] pt-[1rem] tablet:ml-[15rem] tablet:w-[55rem] group tablet:text-[1rem] hover:bg-fundofooter'>
                    <p className='mr-[2rem] tablet:mr-[5rem]'>31/12/2023</p>
                    <Link href="/BALANCO_2023.pdf" target="_blank" className='flex items-center' >
                        <Image src={pdf} alt="" className='w-[0.9rem] mr-[0.5rem] tablet:w-[1.6rem] tablet:mr-[1rem]'/>
                        <p>Balanço 2023</p>
                    </Link>
                    <Link href="/BALANCO_2023.pdf" target="_blank" className='flex items-center'>
                        <Image src={download} alt='' className='w-0 tablet:w-[1.5rem] tablet:ml-[34.6rem]'/>
                    </Link>
                </div>

                <div className='flex ml-[3rem] text-[0.7rem] items-center py-[0.5rem] pt-[1rem] tablet:ml-[15rem] tablet:w-[55rem] group tablet:text-[1rem] hover:bg-fundofooter'>
                    <p className='mr-[2rem] tablet:mr-[5rem]'>31/12/2022</p>
                    <Link href="/BALANCO_2022.pdf" target="_blank" className='flex items-center' >
                        <Image src={pdf} alt="" className='w-[0.9rem] mr-[0.5rem] tablet:w-[1.6rem] tablet:mr-[1rem]'/>
                        <p>Balanço 2022</p>
                    </Link>
                    <Link href="/BALANCO_2022.pdf" target="_blank" className='flex items-center'>
                        <Image src={download} alt='' className='w-0 tablet:w-[1.5rem] tablet:ml-[34.6rem]'/>
                    </Link>
                </div>

                <div className='flex ml-[3rem] text-[0.7rem] items-center py-[0.5rem] pt-[1rem] tablet:ml-[15rem] tablet:w-[55rem] group tablet:text-[1rem] hover:bg-fundofooter'>
                    <p className='mr-[2rem] tablet:mr-[5.2rem]'>31/12/2021</p>
                    <Link href='/BALANCO_2021.pdf' target='_blank' className='flex items-center'>
                        <Image src={pdf} alt="" className='w-[0.9rem] mr-[0.5rem] tablet:w-[1.6rem] tablet:mr-[1rem]'/>
                        <p className='tablet:mr-[1rem'>Balanço 2021</p>
                    </Link>
                    <Link href='/BALANCO_2021.pdf' target='_blank' className='flex items-center' >
                        <Image src={download} alt='' className='w-0 tablet:w-[1.5rem] tablet:ml-[35rem]'/>
                    </Link>
                </div>
            </div>
        </div>
        </>
        )    

}
    