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
             <div className="bg-gradient-to-b from-laranja to-magenta w-auto h-[12rem] pt-[3rem] tablet:h-[21rem]">
                <div className="tablet:flex tablet:justify-center tablet:items-center tablet:pt-[4.5rem]">
                    <h4 className="text-[1.25rem] font-bold text-white">Converse com um de nossos consultoress</h2>
                    <div />
                    <p>Você ainda tem alguma dúvida? Entre em contato conosco pelos canais oficiais.</p>
                </div>
            </div>

            <form action="">
                <label className="nome" >Nome completo*
                    <input type="text" placeholder="Digite aqui seu nome completo" />
                </label>

                <label className="email" >E-mail*
                    <input type="text" placeholder="seu-email@gmail.com" />
                </label>

                <label className="empresa">Nome da Empresa*
                    <input type="text" placeholder="Digite aqui o nome da empresa" />
                </label>   

                <select name="" id="" value={selectedEstado} onChange={handleEstadoUpdate}>
                    {estados.map((estado) => <option key={estado.id} value={estado.sigla}>{estado.nome}</option>)}
                 </select>

                <select name="" id="">
                    {cidades.map((cidade) => <option key={cidade.nome}> {cidade.nome} </option>)}
                </select>
                
                <label> Assunto*
                    <select name="" id="">
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
            </form>
        
            
        </div>
    )
  };
  
  
