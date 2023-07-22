import logo from '../../public/logo.svg'
import hamburguer from '../../public/hamburguer.svg'
import Image from 'next/image'

interface HeaderProps {

}

export function Header(props: HeaderProps){
    return(
        <header className='py-[5rem] px-[3rem] flex justify-around  tablet:flex tablet:items-center tablet:mx-auto tablet:px-[3rem] tablet:max-h-[82px]'>
            <Image src={logo} alt={'logo-hos'} className='w-[7rem] h-auto tablet:w-auto tablet:h-[4.3rem] tablet:ml-[3rem]' />
            <span className="w-[4rem] h-auto flex border-2 border-vermelho rounded-md   bg-white px-0 cursor-pointer tablet:hidden block">
                <Image src={hamburguer} alt='menu hamburguer' className=''/>
            </span>
            <div className='hidden tablet:flex tablet:justify-center tablet:items-center tablet:mx-auto tablet:text-[0.8rem] tablet:font-semibold tablet:text-grafite '>               
                    <a href="" className='mr-[1.8rem] tablet:ml-[1rem] hover:text-vermelho'>Soluções</a>
                    <a href="" className='mr-[1.8rem] hover:text-vermelho'>Sobre</a>
                    <a href="" className='mr-[1.8rem] hover:text-vermelho'>Suporte</a>
                    <a href="" className='mr-[1.8rem] hover:text-vermelho'>Universidade</a>
                    <a href="" className='mr-[3rem] hover:text-vermelho'>Blog</a>
            </div>

            <div className='hidden tablet:flex items-center'>
                <div className='tablet:flex tablet:justify-center tablet:items-center'>
                    <button className='tablet:bg-gradient-to-b tablet:from-laranja tablet:to-magenta tablet:hover:bg-gradient-to-b tablet:hover:from-darker tablet:hover:to-darker tablet:hover:duration-1000 tablet:text-[0.8rem] tablet:font-semibold tablet:text-white tablet:rounded-md tablet:w-[13rem] tablet:px-[1.5rem] tablet:py-[1rem] '>Solicite uma demonstração</button>
                </div>
                <div className='tablet:flex tablet:ml-[2rem] tablet:justify-center tablet:items-center tablet:bg-white tablet:border-2 tablet:border-vermelho tablet:rounded-md tablet:w-[13rem] tablet:px-[1.5rem] tablet:py-[0.8rem]'>
                    <button className='tablet:text-[0.8rem] tablet:font-semibold  tablet:text-vermelho'>Área do cliente</button>
                </div>
            </div>
        </header>
    )
}