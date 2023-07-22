import logo from '../../public/logo.svg'
import Image from 'next/image'

interface HeaderProps {

}

export function Header(props: HeaderProps){
    return(
        <header className='flex items-center mx-auto px-[8rem] py-[1.8rem] '>
            <Image src={logo} alt={'logo-hos'} className='w-[4.8rem] h-auto' />
            <div className='text-[0.8rem] font-semibold  text-grafite '>
                <a href="" className='px-[1.8rem]'>Soluções</a>
                <a href="" className='px-[1.8rem]'>Sobre</a>
                <a href="" className='px-[1.8rem]'>Suporte</a>
                <a href="" className='px-[1.8rem]'>Universidade</a>
                <a href="" className='px-[1.8rem]'>Blog</a>
            </div>

            <div className=' flex items-center ml-[8rem]'>
                <div className='flex justify-center items-center bg-gradient-to-b from-laranja to-magenta rounded-md w-[13rem] px-[1.5rem] py-[1rem]'>
                    <button className='text-[0.8rem] font-semibold text-white'>Solicite uma demonstração</button>
                </div>
                <div className='flex ml-[2rem] justify-center items-center bg-white border-2 border-vermelho rounded-md w-[13rem] px-[1.5rem] py-[0.8rem]'>
                    <button className='text-[0.8rem] font-semibold  text-vermelho'>Área do cliente</button>
                </div>
            </div>
        </header>
    )
}