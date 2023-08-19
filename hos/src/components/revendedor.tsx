'use client'
import useCidades from "@/hooks/useCidades";
import useEstados from "@/hooks/useEstados";
import { SetStateAction, useState } from "react";
import InputMask from 'react-input-mask';
import Image from 'next/image'
import Modal from "./modal";




export function Revendedor () {
    const { estados } = useEstados();
    const [selectedEstado, setSelectedEstado] = useState('')
    const { cidades } = useCidades({siglaUF: selectedEstado});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        const requiredFields = ['nome', 'email', 'empresa', 'estado', 'cidade', 'cnpj', 'telefone', 'horario', 'LGPD'];
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
            
            await fetch('https://sheetdb.io/api/v1/x8pbw34iytlna', {
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
        <div className="bg-fundo">   

            <div className="pt-6 tablet:grid tablet:grid-cols-2">
            <div className="py-[2rem] tablet:col-start-2 tablet:py-0">
                    <h3 className="text-grafite flex text-center justify-center text-[1.4rem] font-bold pb-[1.5rem] mx-auto tablet:pb-0 tablet:mt-[-75rem] tablet:text-[2.25rem] tablet:justify-end tablet:mr-8">Seja um revendedor!</h3>
        
                </div>
                    <form 
                    method="post"
                    action="https://sheetdb.io/api/v1/x8pbw34iytlna"
                    id="sheetdb-form" 
                    onSubmit={handleSubmit} 
                    className="bg-white mx-auto w-[22rem] h-[43rem] rounded-lg drop-shadow-botao mt-[-2rem] tablet:col-start-2 tablet:w-[35rem] tablet:h-[50rem] tablet:mt-[-68rem]">
                        <div className="mx-[1rem] py-[2rem] grid grid-cols-2 tablet:mx-[4rem] tablet:py-[3.5rem]" >
                            <label className="nome text-[0.875rem] text-cinza font-bold col-span-2  tablet:text-[1.125rem]" >Nome completo*
                                <input name="data[nome]" type="text" placeholder="Digite aqui seu nome completo" className="w-[20rem] h-[2rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] mb-[1.5rem] tablet:w-[27rem] tablet:text-[1rem] tablet:py-[1rem]" />
                            </label>

                            <label className="email text-[0.875rem] text-cinza font-bold col-span-2 tablet:text-[1.125rem]" >E-mail*
                                <input name="data[email]" type="text" placeholder="seu-email@gmail.com" className="w-[20rem] h-[2rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] mb-[1.5rem] tablet:w-[27rem] tablet:text-[1rem] tablet:py-[1rem]"/>
                            </label>

                            <label className="empresa text-[0.875rem] text-cinza font-bold col-span-2 tablet:text-[1.125rem]">Nome da Empresa*
                                <input name="data[empresa]" type="text" placeholder="Digite aqui o nome da empresa" className="w-[20rem] h-[2rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] mb-[1.5rem] tablet:w-[27rem] tablet:text-[1rem] tablet:py-[1rem]"/>
                            </label>   

                            <label className="estado text-[0.875rem] text-cinza font-bold tablet:text-[1.125rem]"> Estado*
                                <select name="data[estado]" id="" value={selectedEstado} onChange={handleEstadoUpdate} className="w-[9rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] py-1 tablet:text-[1rem] tablet:py-[0.3rem] tablet:w-[13rem]"> 
                                    {estados.map((estado) => <option key={estado.id} value={estado.sigla} >{estado.nome}</option>)}
                                </select>
                            </label>

                            <label className="cidades text-[0.875rem] text-cinza font-bold tablet:text-[1.125rem] tablet:ml-2"> Cidades*
                                <select name="data[cidade]" id="" className="w-[9rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] py-[0.2rem] mb-[1.5rem] tablet:text-[1rem] tablet:py-[0.3rem] tablet:w-[13rem]">
                                    {cidades.map((cidade) => <option key={cidade.nome}> {cidade.nome} </option>)}
                                </select>
                            </label>

                            <label className="cnpj text-[0.875rem] text-cinza col-span-2 font-bold tablet:text-[1.125rem]">CNPJ*
                                <InputMask  name="data[cnpj]" mask="99.999.999/9999-99"  maskChar=""  placeholder="00.000.000/0001-00" className='w-[20rem] h-[2rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] mb-[1.5rem] tablet:w-[27rem] tablet:text-[1rem] tablet:py-[1rem]' required />
                            </label>  

                            <label className="telefone text-[0.875rem] text-cinza font-bold tablet:text-[1.125rem]">Telefone*
                                <InputMask  name="data[telefone]" mask="(99) 99999-9999"  maskChar=""  placeholder="(DD) _____-____" className='w-[9rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] py-1 tablet:text-[1rem] tablet:py-[0.3rem] tablet:w-[13rem]' required />
                            </label>  

                            <label className="horário text-[0.875rem]  text-cinza font-bold tablet:text-[1.125rem] tablet:ml-2">Horário para contato*
                                <input name="data[horario]" type="time" placeholder="00:00" className='w-[9rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] py-[0.18rem] mb-[1.5rem] tablet:text-[1rem] tablet:py-[0.3rem] tablet:w-[13rem]' />
                            </label> 

                            <p className="text-[0.6rem] text-grafite flex items-end justify-end col-start-2 tablet:text-[0.8rem]">*Campos obrigatórios</p>
                           
                            <label className="text-[0.6rem] text-grafite flex items-start justify-start mt-[-1rem]">
                                <input type="checkbox" name="data[LGPD]" id="concordoLGPD" required  className="mr-1"/>
                                Eu li e concordo com a coleta e processamento dos meus dados pessoais de acordo com a Política de Privacidade.
                            </label>
                            
                            <Modal isOpen={isModalOpen} onClose={closeModal}>
                                <p>Formulário enviado com sucesso!</p>
                            </Modal>
                            <button className="col-start-2 w-[9rem] h-[2.5rem] mt-[1.4rem] ml-[1.2rem] tablet:w-[12.5rem] tablet:h-[3rem] rounded-lg bg-gradient-to-b from-laranja to-magenta">
                                <p className="text-white text-[0.7rem] font-semibold">Enviar</p>
                                </button>
                        </div>
                    </form>
            </div>  
         </div>
    )
  };
  
  
