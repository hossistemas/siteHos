import useCidades from "@/hooks/useCidades";
import useEstados from "@/hooks/useEstados";
import { SetStateAction, useState } from "react";
import Image from 'next/image'




export function Formulario () {
    const { estados } = useEstados();
    const [selectedEstado, setSelectedEstado] = useState('')
    const { cidades } = useCidades({siglaUF: selectedEstado});

    const handleEstadoUpdate = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedEstado(event.target.value)
    }

    return (
        <div>
             <div className="bg-gradient-to-b from-laranja to-magenta w-auto h-[16rem] pt-[3rem] tablet:h-[21rem]">
                <div className="tablet:flex tablet:justify-center tablet:items-center tablet:pt-[4.5rem]">
                    <h4 className="text-[1.25rem] font-bold text-white">Converse com um de nossos consultoress</h4>
                    <div />
                    <p>Você ainda tem alguma dúvida? Entre em contato conosco pelos canais oficiais.</p>
                </div>
            </div>
            
            
            <form action="" className="bg-white mx-auto w-[22rem] h-[56rem] rounded-lg drop-shadow-botao mt-[-2rem]">
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

                    <label className="telefone">Telefone*
                        <input type="text" placeholder="(__)_____-____" />
                    </label>  

                    <label className="horário">Horário para contato*
                        <input type="text" placeholder="00:00" />
                    </label>  

                    <label className="mensagem">Deixe uma mensagem*
                        <input type="text" placeholder="Digite sua mensagem" />
                    </label>  

                    <p>*Campos obrigatórios</p>

                    <button> enviar </button>
                </div>
            </form>
        
            
        </div>
    )
  };
  
  
