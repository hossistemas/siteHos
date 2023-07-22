import logo from '../../public/logo.svg'
import Image from 'next/image'

interface HeaderProps {

}

export function Header(props: HeaderProps){
    return(
        <header className='flex items-center mx-auto px-[8rem] py-[1.8rem] '>
            <Image src={logo} alt={'logo-hos'} className='w-auto h-[3rem]' />
            <div className='flex justify-center items-center mx-autotext-[0.8rem] font-semibold  text-grafite '>
                <a href="" className='mr-[1.8rem] ml-[6rem] hover:text-vermelho'>Soluções</a>
                <a href="" className='mr-[1.8rem] hover:text-vermelho'>Sobre</a>
                <a href="" className='mr-[1.8rem] hover:text-vermelho'>Suporte</a>
                <a href="" className='mr-[1.8rem] hover:text-vermelho'>Universidade</a>
                <a href="" className='mr-[14rem] hover:text-vermelho'>Blog</a>
            </div>

            <div className=' flex items-center'>
                <div className='flex justify-center items-center'>
                    <button className='bg-gradient-to-b from-laranja to-magenta hover:bg-gradient-to-b hover:from-darker hover:to-darker text-[0.8rem] font-semibold text-white rounded-md w-[13rem] px-[1.5rem] py-[1rem] '>Solicite uma demonstração</button>
                </div>
                <div className='flex ml-[2rem] justify-center items-center bg-white border-2 border-vermelho rounded-md w-[13rem] px-[1.5rem] py-[0.8rem]'>
                    <button className='text-[0.8rem] font-semibold  text-vermelho'>Área do cliente</button>
                </div>
            </div>
        </header>
    )
}