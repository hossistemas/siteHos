import logo from '../../public/logo.png'
import Image from 'next/image'

interface HeaderProps {

}

export function Header(props: HeaderProps){
    return(
        <header className='flex px-[8rem]'>
            <Image src={logo} alt={'logo-hos'} />
            <div>
                <a href="">Soluções</a>
                <a href="">Sobre</a>
                <a href="">Suporte</a>
                <a href="">Universidade</a>
                <a href="">Blog</a>
            </div>

            <div>
                <div>
                    <button></button>
                </div>
                <div>
                    <button></button>
                </div>
            </div>
        </header>
    )
}