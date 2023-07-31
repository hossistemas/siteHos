import Image from "next/image"
import logo from '../../public/logo.svg'
import facebook from '../../public/facebook.svg'
import instagram from '../../public/instagram.svg'
import linkedin from '../../public/linkedin.svg'
import youtube from '../../public/youtube.svg'
import { link } from "fs"

interface FooterProps {

}

export function Footer(props: FooterProps){
    
    return(
      <footer className="bg-fundofooter w-auto h-[58rem] tablet:h-[22rem] tablet:bg-fundoescuro">
        <div className="mx-auto tablet:flex tablet:max-w-[1200px] tablet:pt-[3rem] tablet:justify-center">

            <div className="">
                <Image src={logo} alt="" className='w-[4.1rem] h-auto flex mx-auto py-[2rem] tablet:flex tablet:mx-0'/>
                <p className="text-center text-[0.75rem] font-grafite leading-relaxed tablet:text-left">©HOS Software para Farmácias. 
                <br/>
                Todos os direitos reservados.
                <br/>
                CNPJ 00.115.150/0001-40</p>
                <h5 className="text-center text-[0.75rem] font-extrabold pt-[1.3rem] pb-[2.6rem] tablet:text-left">Balanço</h5>
            </div>

            <div className="tablet:pt-[4.4rem] tablet:pl-[5rem]">
                <h5  className="text-center text-[0.75rem] font-extrabold pb-[0.3rem] tablet:text-left">Soluções</h5>
                <p className="text-center text-[0.75rem] font-grafite leading-loose tablet:text-left">Administração de Vendas</p>
                <p className="text-center text-[0.75rem] font-grafite leading-loose tablet:text-left">Gerenciamento de Loja</p>
                <p className="text-center text-[0.75rem] font-grafite leading-loose tablet:text-left">Processos de Manipulação</p>
                <p className="text-center text-[0.75rem] font-grafite leading-loose tablet:text-left">Soluções Complementares</p>
            </div>

            <div className="tablet:pt-[4.4rem] tablet:pl-[2.2rem]">
                <h5 className="text-center text-[0.75rem] font-extrabold pt-[2.6rem] pb-[0.3rem] tablet:text-left tablet:pt-0">Sobre</h5>
                <p className="text-center text-[0.75rem] font-grafite leading-loose tablet:text-left">Quem somos</p>
                <p className="text-center text-[0.75rem] font-grafite leading-loose tablet:text-left">Perguntas frequentes</p>
                <p className="text-center text-[0.75rem] font-grafite leading-loose tablet:text-left">Contato</p>
            </div>

            <div className="tablet:pt-[4.4rem] tablet:pl-[2.2rem]">
                <h5 className="text-center text-[0.75rem] font-extrabold pb-[0.3rem] pt-[2.6rem] tablet:text-left tablet:pt-0">Suporte</h5>
                <h5 className="text-center text-[0.75rem] font-extrabold pb-[0.3rem] tablet:text-left">Blog</h5>
                <h5 className="text-center text-[0.75rem] font-extrabold  pb-[2.6rem] tablet:text-left">Universidade</h5>
            </div>

            <div className="tablet:pt-[4.4rem] tablet:ml-[8rem] tablet:w-[15.8rem]">
                <p className="mx-auto text-center text-[0.75rem] w-[14.8rem] font-grafite leading-normal tablet:text-left tablet:w-auto">Receba as principais novidades e tendências do mercado e varejo farmacêutico.</p>
                <p className="mx-auto text-center text-[0.75rem] font-grafite font-semibold pt-[1.5rem] pb-[0.5rem] tablet:text-left">Assine agora mesmo a nossa newsletter!</p>
                <label htmlFor="" className="w-[15.8rem] h-[2.3rem] mx-auto flex bg-white">Digite seu e-mail
                    <button> </button>
                </label>
                <div className="flex justify-center pt-[1.5rem] gap-x-3 tablet:justify-end tablet:pb-[3rem]">
                    <Image src={facebook} alt=""/>
                    <Image src={instagram} alt=""/>
                    <Image src={linkedin} alt=""/>
                    <Image src={youtube} alt=""/>
                </div>
            </div>    
             
        </div>
      </footer>
        )    

}
    
