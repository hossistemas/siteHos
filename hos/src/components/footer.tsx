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
      <footer className="bg-fundofooter w-auto h-[58rem]">
        <div className="mx-auto">

            <div className="">
                <Image src={logo} alt="" className='w-[4.1rem] h-auto flex mx-auto py-[2rem]'/>
                <p className="text-center text-[0.75rem] font-grafite leading-relaxed">©HOS Software para Farmácias. 
                <br/>
                Todos os direitos reservados.
                <br/>
                CNPJ 00.115.150/0001-40</p>
                <h5 className="text-center text-[0.75rem] font-extrabold pt-[1.3rem] pb-[2.6rem]">Balanço</h5>
            </div>

            <div>
                <h5  className="text-center text-[0.75rem] font-extrabold pb-[0.3rem]">Soluções</h5>
                <p className="text-center text-[0.75rem] font-grafite leading-loose">Administração de Vendas</p>
                <p className="text-center text-[0.75rem] font-grafite leading-loose">Gerenciamento de Loja</p>
                <p className="text-center text-[0.75rem] font-grafite leading-loose">Processos de Manipulação</p>
                <p className="text-center text-[0.75rem] font-grafite leading-loose">Soluções Complementares</p>
            </div>

            <div>
                <h5 className="text-center text-[0.75rem] font-extrabold pt-[2.6rem] pb-[0.3rem]">Sobre</h5>
                <p className="text-center text-[0.75rem] font-grafite leading-loose">Quem somos</p>
                <p className="text-center text-[0.75rem] font-grafite leading-loose">Perguntas frequentes</p>
                <p className="text-center text-[0.75rem] font-grafite leading-loose">Contato</p>
            </div>

            <div>
                <h5 className="text-center text-[0.75rem] font-extrabold pb-[0.3rem] pt-[2.6rem]">Suporte</h5>
                <h5 className="text-center text-[0.75rem] font-extrabold pb-[0.3rem]">Blog</h5>
                <h5 className="text-center text-[0.75rem] font-extrabold pb-[0.3rem] pb-[2.6rem]v">Universidade</h5>
            </div>

            <div>
                <p className="mx-auto text-center text-[0.75rem] w-[14.8rem] font-grafite leading-normal">Receba as principais novidades e tendências do mercado e varejo farmacêutico.</p>
                <p className="mx-auto text-center text-[0.75rem] font-grafite font-semibold pt-[1.5rem]">Assine agora mesmo a nossa newsletter!</p>
                <label htmlFor="" className="w-[15.8rem] h-[2.3rem] mx-auto flex bg-white">Digite seu e-mail
                    <button> </button>
                </label>
                <div className="flex">
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
    
