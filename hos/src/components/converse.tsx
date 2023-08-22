import useCidades from "@/hooks/useCidades";
import useEstados from "@/hooks/useEstados";
import { SetStateAction, useState } from "react";
import InputMask from 'react-input-mask';
import Image from 'next/image'
import Modal from '@/components/modal'

import telefone from '../../public/telefone.svg'
import whatsapp from '../../public/whatsapp.svg'
import localizacao from '../../public/localizacao.svg'
import horario from '../../public/horario.svg'
import facebook from '../../public/facebook.svg'
import instagram from '../../public/instagram.svg'
import linkedin from '../../public/linkedin.svg'
import youtube from '../../public/youtube.svg'
import Link from "next/link";


export function Formulario () {
    const { estados } = useEstados();
    const [selectedEstado, setSelectedEstado] = useState('')
    const { cidades } = useCidades({siglaUF: selectedEstado});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(false);
    };
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        const requiredFields = ['nome', 'email', 'empresa', 'estado', 'cidade', 'assunto', 'telefone', 'horario', 'LGPD'];
        let missingFields: string[] = [];
      
        requiredFields.forEach((field) => {
          const input = event.currentTarget.querySelector(`[name="data[${field}]"]`) as HTMLInputElement;
          if (!input.value) {
            missingFields.push(field);
          }
        });
      
        if (missingFields.length > 0) {
          alert(`Os seguintes campos são obrigatórios: ${missingFields.join(', ')}`);
          setIsModalOpen(false);
        } else {
          try {
            
            await fetch('https://sheetdb.io/api/v1/7prem1ppyj7e6', {
            method: 'POST',
            body: new FormData(event.currentTarget),
                
            });
            setIsModalOpen(true);

          } catch (error) {      
            console.error('Erro ao enviar o formulário:', error);
            setIsModalOpen(false);
           
          }
        }
      };
      
      const closeModal = () => {
        setIsModalOpen(false);
      };
      
  
      const handleEstadoUpdate = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedEstado(event.target.value)
    }
      
    return (
        <>
        <div className="bg-fundo">
             <div className="bg-gradient-to-b from-laranja to-magenta w-auto h-[16rem] pt-[3rem] tablet:h-[24rem]">
                <div className="ml-[3rem]  tablet:pt-[3rem] tablet:ml-[10rem]">
                    <h4 className="text-[1.25rem] font-bold text-white w-[12.5rem] leading-tight tablet:text-[2.75rem] tablet:w-[29rem]">Converse com um de nossos consultores</h4>
                    <div className="bg-white w-[3rem] h-[0.1rem] my-[0.5rem] tablet:hidden"/>
                    <p className="text-[0.8rem] text-white font-medium w-[12.5rem] leading-tight tablet:text-[1.25rem] tablet:w-[29rem] tablet:pt-[3rem]">Você ainda tem alguma dúvida? Entre em contato conosco pelos canais oficiais.</p>
                </div>
            </div>
            
    <div className="tablet:grid tablet:grid-cols-2">
            <form 
            method="post"
            action="https://sheetdb.io/api/v1/7prem1ppyj7e6"
            id="sheetdb-form" 
            onSubmit={handleSubmit}
            
            className="bg-white mx-auto w-[22rem] h-[48rem] rounded-lg drop-shadow-formulario mt-[-2rem] tablet:col-start-2 tablet:w-[35rem] tablet:h-[63rem] tablet:mt-[-12rem] ">
                <div className="mx-[1rem] py-[2rem] grid grid-cols-2 tablet:mx-[4rem] tablet:py-[3.5rem] " >
                    <label className="nome text-[0.875rem] text-cinza font-bold col-span-2  tablet:text-[1.125rem] group hover:text-magenta" >Nome completo*
                        <input type="text" name='data[nome]' placeholder="Digite aqui seu nome completo" className="hover:border-magenta w-[20rem] h-[2rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] mb-[1.5rem] tablet:w-[27rem] tablet:h-[3rem] tablet:text-[1rem] tablet:py-[1rem]" />
                    </label>

                    <label className="email text-[0.875rem] text-cinza font-bold col-span-2 tablet:text-[1.125rem] group hover:text-magenta" >E-mail*
                        <input type="text" name='data[email]' placeholder="seu-email@gmail.com" className="hover:border-magenta w-[20rem] h-[2rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] mb-[1.5rem] tablet:w-[27rem] tablet:text-[1rem] tablet:h-[3rem]  tablet:py-[1rem]"/>
                    </label>

                    <label className="empresa text-[0.875rem] text-cinza font-bold col-span-2 tablet:text-[1.125rem] group hover:text-magenta">Nome da Empresa*
                        <input type="text" name='data[empresa]' placeholder="Digite aqui o nome da empresa" className=" hover:border-magenta w-[20rem] h-[2rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] mb-[1.5rem] tablet:w-[27rem] tablet:text-[1rem] tablet:h-[3rem] tablet:py-[1rem]"/>
                    </label>   

                    <label className="estado text-[0.875rem] text-cinza font-bold tablet:text-[1.125rem] group hover:text-magenta"> Estado*
                        <select name='data[estado]' id="" value={selectedEstado} onChange={handleEstadoUpdate} className="hover:border-magenta w-[9rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] py-1 tablet:text-[1rem] tablet:py-[0.3rem] tablet:h-[3rem] tablet:w-[13rem]"> 
                            {estados.map((estado) => <option key={estado.id} value={estado.sigla} >{estado.nome}</option>)}
                        </select>
                    </label>

                    <label className="cidades text-[0.875rem] text-cinza font-bold tablet:text-[1.125rem] tablet:ml-2 group hover:text-magenta"> Cidade*
                        <select name='data[cidade]' id="" className="hover:border-magenta w-[9rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] py-[0.2rem] mb-[1.5rem] tablet:text-[1rem] tablet:py-[0.3rem] tablet:h-[3rem]  tablet:w-[13rem]">
                            {cidades.map((cidade) => <option key={cidade.nome}> {cidade.nome} </option>)}
                        </select>
                    </label>
                    
                    <label className="assunto text-[0.875rem] text-cinza font-bold col-span-2 tablet:text-[1.125rem] group hover:text-magenta"> Assunto*
                        <select name='data[assunto]' id=""  className="hover:border-magenta w-[20rem] h-[2rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] mb-[1.5rem] tablet:w-[27rem] tablet:h-[3rem]  tablet:text-[1rem] tablet:py-[0rem]">
                            <option value="financeiro">Quero o HOS para minha farmácia</option>
                            <option value="suporte">Dúvidas</option>
                            <option value="nao-listado">Solicitar demonstração</option>
                        </select>
                    </label>

                    <label className="telefone text-[0.875rem] text-cinza font-bold tablet:text-[1.125rem] group hover:text-magenta">Telefone*
                     <InputMask  name='data[telefone]' mask="(99) 99999-9999"  maskChar=""  placeholder="(DD) _____-____" className='hover:border-magenta w-[9rem] border-2 rounded-lg font-normal text-[0.7rem] tablet:h-[3rem]  pl-[0.7rem] mt-[0.3rem] py-1 tablet:text-[1rem] tablet:py-[0.3rem] tablet:w-[13rem]' required />
                    </label>  

                    <label className="horário text-[0.875rem]  text-cinza font-bold tablet:text-[1.125rem] tablet:ml-2 group hover:text-magenta">Horário para contato*
                        <input type="time" name='data[horario]' placeholder="00:00" className='hover:border-magenta w-[9rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] py-[0.18rem] tablet:h-[3rem]   mb-[1.5rem] tablet:text-[1rem] tablet:py-[0.3rem] tablet:w-[13rem]' />
                    </label>  

                    <label className="mensagem text-[0.875rem] text-cinza font-bold col-span-2 tablet:text-[1.125rem] group hover:text-magenta">Deixe uma mensagem
                        <textarea name='data[mensagem]' placeholder="Digite sua mensagem" className="hover:border-magenta w-[20rem] h-[6rem] border-2 rounded-lg  font-normal text-[0.7rem] pl-[0.7rem] pt-[0.3rem] mt-[0.3rem] mb-[0.5rem] tablet:w-[27rem] tablet:text-[1rem] tablet:py-[1rem] tablet:h-[10rem]"/>
                    </label>  

                    <p className="text-[0.6rem] text-grafite flex items-end justify-end col-start-2 tablet:text-[0.8rem] ">*Campos obrigatórios</p>

                    <Modal isOpen={isModalOpen} onClose={closeModal} modalClassName={''}>
                    <p className="flex mx-auto text-center font-bold ">Formulário enviado com sucesso!</p>
                    </Modal>



                    <label className="text-[0.6rem] text-grafite flex items-start justify-start mt-[-1rem] ">
                        <input type="checkbox" name='data[LGPD]' id="concordoLGPD" required  className=" mr-1 "/>
                        Eu li e concordo com a coleta e processamento dos meus dados pessoais de acordo com a Política de Privacidade.
                    </label>

                    <button type="submit" className="col-start-2 w-[9rem] h-[2.5rem] mt-[1.4rem] ml-[1.2rem] tablet:w-[12.5rem] tablet:h-[3rem] rounded-lg bg-gradient-to-b from-laranja to-magenta" onClick={openModal}>
                        <p className="text-white text-[0.7rem] font-semibold">Enviar</p>
                        </button>


                </div>
            </form>
        
        <div className="tablet:col-start-1 tablet:mt-[-48rem] tablet:ml-[10rem] tablet:pb-[19rem]">
            <div className="pt-[5rem] tablet:flex tablet:items-center">
                <div className='w-[2.5rem] h-[2.5rem] flex items-center justify-center mx-auto bg-gradient-to-b from-laranja to-magenta rounded-full tablet:mx-0'>
                    <Image src={telefone} alt="" />
                </div>
                <div className="tablet:ml-[0.7rem] tablet:mb-[0.3rem]">
                    <h5 className="text-grafite text-[0.9rem] w-[10rem] font-semibold mx-auto text-center mt-[0.6rem] tablet:text-left " >Telefone</h5>
                    <p className="text-cinza text-[0.9rem] w-[10rem] font-semibold text-center mx-auto mt-[-0.3rem] tablet:text-left">+55 (54) 2621-4400</p>
                </div>
            </div>

            <div className="py-[1rem] tablet:flex tablet:items-center">
                <div className='w-[2.5rem] h-[2.5rem] flex items-center justify-center mx-auto bg-gradient-to-b from-laranja to-magenta rounded-full tablet:mx-0'>
                    <Image src={whatsapp} alt="" />
                </div>
                <div  className="tablet:ml-[0.7rem] tablet:mb-[0.3rem]">
                    <h5 className="text-grafite text-[0.9rem] w-[10rem] font-semibold mx-auto text-center mt-[0.6rem] tablet:text-left" >WhatsApp</h5>
                    <p className="text-cinza text-[0.9rem] w-[10rem] font-semibold text-center mx-auto mt-[-0.3rem] tablet:text-left">+55 (54) 9 9640 0699</p>
                </div>
            </div>

            <div className=" tablet:flex tablet:items-center">
                <div className='w-[2.5rem] h-[2.5rem] flex items-center justify-center mx-auto bg-gradient-to-b from-laranja to-magenta rounded-full tablet:mx-0'>
                    <Image src={horario} alt="" />
                </div>
                <div  className="tablet:ml-[0.7rem] tablet:mb-[0.8rem]">
                    <h5 className="text-grafite text-[0.9rem] w-[10rem] font-semibold mx-auto text-center mt-[0.6rem] tablet:text-left tablet:mx-0 " >Horário de atendimento</h5>
                    <p className="text-cinza text-[0.9rem] w-[10rem] font-semibold text-center mx-auto mt-[-0.3rem] leading-tight tablet:text-left tablet:w-[20rem]" >Segunda à Sexta-feira: 08h às 18h</p>
                </div>
           </div>

            <div className="py-[1rem] tablet:flex tablet:items-center">
                <div className='w-[2.5rem] h-[2.5rem] flex items-center justify-center mx-auto bg-gradient-to-b from-laranja to-magenta rounded-full tablet:mx-0'>
                    <Image src={localizacao} alt="" />
                </div>
                <div  className="tablet:ml-[0.7rem] tablet:mb-[0.8rem]">
                    <h5 className="text-grafite text-[0.9rem] w-[10rem] font-semibold mx-auto text-center mt-[0.6rem] tablet:text-left tablet:mx-0" >Endereço</h5>
                    <p className="text-cinza text-[0.9rem] w-[12.2rem] font-semibold text-center mx-auto mt-[-0.3rem] leading-tight tablet:text-left tablet:w-[18rem]">Rua Pernambuco, 212, Bairro Humaitá, Bento Gonçalves RS - 95705-024</p>
                </div>
            </div>

            <p className="text-[0.9rem] text-grafite text-center mx-auto font-semibold tablet:text-left">Siga-nos nas redes sociais!</p>
            <div className="flex justify-center items-center pt-[1rem] pb-[3rem] gap-x-6 tablet:justify-start ">
                    <Link href="https://www.facebook.com/softwarefarmaciahos" target='_blank'>
                        <Image src={facebook} alt=""/>
                    </Link>
                    
                    <Link href="https://www.instagram.com/hossistemas/" target='_blank'>
                        <Image src={instagram} alt=""/>
                    </Link>
                    
                    <Link href="https://www.linkedin.com/company/hossistemas/" target='_blank'>
                        <Image src={linkedin} alt=""/>
                    </Link>
                    
                    <Link href="https://www.youtube.com/@HosSistemas" target='_blank'>
                        <Image src={youtube} alt=""/>
                    </Link>
            </div>
        </div>


    </div>  
    
</div>

      
</>

    )
  };
  
  
