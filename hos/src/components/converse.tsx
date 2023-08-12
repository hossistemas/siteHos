import useCidades from "@/hooks/useCidades";
import useEstados from "@/hooks/useEstados";
import { SetStateAction, useState } from "react";
import InputMask from 'react-input-mask';
import Image from 'next/image'

import telefone from '../../public/telefone.svg'
import whatsapp from '../../public/whatsapp.svg'
import localizacao from '../../public/localizacao.svg'
import horario from '../../public/horario.svg'



export function Formulario () {
    const { estados } = useEstados();
    const [selectedEstado, setSelectedEstado] = useState('')
    const { cidades } = useCidades({siglaUF: selectedEstado});

    const handleEstadoUpdate = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedEstado(event.target.value)
    }

    return (
        <div className="bg-fundo">
             <div className="bg-gradient-to-b from-laranja to-magenta w-auto h-[16rem] pt-[3rem] tablet:h-[21rem]">
                <div className="tablet:flex tablet:justify-center tablet:items-center tablet:pt-[4.5rem]">
                    <h4 className="text-[1.25rem] font-bold text-white">Converse com um de nossos consultoress</h4>
                    <div />
                    <p>Você ainda tem alguma dúvida? Entre em contato conosco pelos canais oficiais.</p>
                </div>
            </div>
            
            
            <form action="" className="bg-white mx-auto w-[22rem] h-[48rem] rounded-lg drop-shadow-botao mt-[-2rem]">
                <div className="mx-[1rem] py-[2rem] grid grid-cols-2">
                    <label className="nome text-[0.875rem] text-cinza font-bold col-span-2" >Nome completo*
                        <input type="text" placeholder="Digite aqui seu nome completo" className="w-[20rem] h-[2rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] mb-[1.5rem]" />
                    </label>

                    <label className="email text-[0.875rem] text-cinza font-bold col-span-2" >E-mail*
                        <input type="text" placeholder="seu-email@gmail.com" className="w-[20rem] h-[2rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] mb-[1.5rem]"/>
                    </label>

                    <label className="empresa text-[0.875rem] text-cinza font-bold col-span-2">Nome da Empresa*
                        <input type="text" placeholder="Digite aqui o nome da empresa" className="w-[20rem] h-[2rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] mb-[1.5rem]"/>
                    </label>   

                    <label className="estado text-[0.875rem] text-cinza font-bold"> Estado*
                        <select name="" id="" value={selectedEstado} onChange={handleEstadoUpdate} className="w-[9rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] py-1"> 
                            {estados.map((estado) => <option key={estado.id} value={estado.sigla} >{estado.nome}</option>)}
                        </select>
                    </label>

                    <label className="cidades text-[0.875rem] text-cinza font-bold"> Cidades*
                        <select name="" id="" className="w-[9rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] py-[0.2rem] mb-[1.5rem]">
                            {cidades.map((cidade) => <option key={cidade.nome}> {cidade.nome} </option>)}
                        </select>
                    </label>
                    
                    <label className="assunto text-[0.875rem] text-cinza font-bold col-span-2"> Assunto*
                        <select name="" id=""  className="w-[20rem] h-[2rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] mb-[1.5rem]">
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        </select>
                    </label>

                    <label className="telefone text-[0.875rem] text-cinza font-bold">Telefone*
                     <InputMask  mask="(99) 99999-9999"  maskChar=""  placeholder="(DD) _____-____" className='w-[9rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] py-1' required />
                    </label>  

                    <label className="horário text-[0.875rem] text-cinza font-bold">Horário para contato*
                        <input type="time" placeholder="00:00" className='w-[9rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] py-[0.18rem] mb-[1.5rem]' />
                    </label>  

                    <label className="mensagem text-[0.875rem] text-cinza font-bold col-span-2">Deixe uma mensagem*
                        <textarea  placeholder="Digite sua mensagem" className="w-[20rem] h-[6rem] border-2 rounded-lg  font-normal text-[0.7rem] pl-[0.7rem] pt-[0.3rem] mt-[0.3rem] mb-[0.5rem]"
                        />
                    </label>  

                    <p className="text-[0.6rem] text-grafite flex items-end justify-end col-start-2 ">*Campos obrigatórios</p>

                    <button className="col-start-2 w-[9rem] h-[2.5rem] mt-[1.4rem] ml-[1.2rem] rounded-lg bg-gradient-to-b from-laranja to-magenta">
                        <p className="text-white text-[0.7rem] font-semibold">Enviar</p>
                        </button>
                </div>
            </form>
        

        <div className="pt-[5rem]">
            <div className='w-[2.5rem] h-[2.5rem] flex items-center justify-center mx-auto bg-gradient-to-b from-laranja to-magenta rounded-full '>
                <Image src={telefone} alt="" />
            </div>
                <h5 className="text-grafite text-[0.9rem] w-[10rem] font-semibold mx-auto text-center mt-[0.6rem]" >Telefone</h5>
                <p className="text-cinza text-[0.9rem] w-[10rem] font-semibold text-center mx-auto mt-[-0.3rem]">+55 (54) 2621-4400</p>
        </div>

        <div className="pt-[2.5rem]">
            <div className='w-[2.5rem] h-[2.5rem] flex items-center justify-center mx-auto bg-gradient-to-b from-laranja to-magenta rounded-full '>
                <Image src={whatsapp} alt="" />
            </div>
                <h5 className="text-grafite text-[0.9rem] w-[10rem] font-semibold mx-auto text-center mt-[0.6rem]" >WhatsApp</h5>
                <p className="text-cinza text-[0.9rem] w-[10rem] font-semibold text-center mx-auto mt-[-0.3rem]">+55 (54) 9 9640 0699</p>
        </div>

        <div className="pt-[2.5rem]">
            <div className='w-[2.5rem] h-[2.5rem] flex items-center justify-center mx-auto bg-gradient-to-b from-laranja to-magenta rounded-full '>
                <Image src={horario} alt="" />
            </div>
                <h5 className="text-grafite text-[0.9rem] w-[10rem] font-semibold mx-auto text-center mt-[0.6rem]" >Horário de atendimento</h5>
                <p className="text-cinza text-[0.9rem] w-[10rem] font-semibold text-center mx-auto mt-[-0.3rem] leading-tight">Segunda à Sexta-feira: 08h às 18h</p>
        </div>

        <div className="pt-[2.5rem] pb-[3rem]">
            <div className='w-[2.5rem] h-[2.5rem] flex items-center justify-center mx-auto bg-gradient-to-b from-laranja to-magenta rounded-full '>
                <Image src={localizacao} alt="" />
            </div>
                <h5 className="text-grafite text-[0.9rem] w-[10rem] font-semibold mx-auto text-center mt-[0.6rem]" >Endereço</h5>
                <p className="text-cinza text-[0.9rem] w-[12.2rem] font-semibold text-center mx-auto mt-[-0.3rem] leading-tight">Rua Pernambuco, 212, Bairro Humaitá, Bento Gonçalves RS - 95705-024</p>
        </div>


</div>
         
    )
  };
  
  
