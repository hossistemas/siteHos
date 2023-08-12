'use client'
import useCidades from "@/hooks/useCidades";
import useEstados from "@/hooks/useEstados";
import { SetStateAction, useState } from "react";
import InputMask from 'react-input-mask';
import Image from 'next/image'




export function Revendedor () {
    const { estados } = useEstados();
    const [selectedEstado, setSelectedEstado] = useState('')
    const { cidades } = useCidades({siglaUF: selectedEstado});

    const handleEstadoUpdate = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedEstado(event.target.value)
    }

    const revendedores = [
        {
            image:'/maletinha.svg',
            title:'Inforsas',
            cidade:'Arapiraca - Alagoas',
            email:'inforsas@gmail.com',
            telefone:'(84) 9.9697-1337',
        },
        {
            image:'/maletinha.svg',
            title:'Consultime Soluções',
            cidade:'Arapiraca - Alagoas',
            email:'inforsas@gmail.com',
            telefone:'(84) 9.9697-1337',
        },
    ];

    return (
        <div className="bg-fundo">   

        {revendedores.map((item, index) => (
        <div key={index} className="pb-[5rem]">
          <Image src={item.image} width={100} height={100} alt='' className="flex w-[2rem] h-[2rem]"
          />
          <h2>{item.title}</h2>
          <p> <span>Cidade:</span> {item.cidade} </p>
          <p> <span>E-mail:</span> {item.email} </p>
          <p> <span>Telefone:</span> {item.telefone} </p>
        </div>
      ))}




            <div className="tablet:grid tablet:grid-cols-2">
                    <form action="" className="bg-white mx-auto w-[22rem] h-[43rem] rounded-lg drop-shadow-botao mt-[-2rem] tablet:col-start-2 tablet:w-[35rem] tablet:h-[60rem] tablet:mt-[-12rem]">
                        <div className="mx-[1rem] py-[2rem] grid grid-cols-2 tablet:mx-[4rem] tablet:py-[3.5rem]" >
                            <label className="nome text-[0.875rem] text-cinza font-bold col-span-2  tablet:text-[1.125rem]" >Nome completo*
                                <input type="text" placeholder="Digite aqui seu nome completo" className="w-[20rem] h-[2rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] mb-[1.5rem] tablet:w-[27rem] tablet:text-[1rem] tablet:py-[1rem]" />
                            </label>

                            <label className="email text-[0.875rem] text-cinza font-bold col-span-2 tablet:text-[1.125rem]" >E-mail*
                                <input type="text" placeholder="seu-email@gmail.com" className="w-[20rem] h-[2rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] mb-[1.5rem] tablet:w-[27rem] tablet:text-[1rem] tablet:py-[1rem]"/>
                            </label>

                            <label className="empresa text-[0.875rem] text-cinza font-bold col-span-2 tablet:text-[1.125rem]">Nome da Empresa*
                                <input type="text" placeholder="Digite aqui o nome da empresa" className="w-[20rem] h-[2rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] mb-[1.5rem] tablet:w-[27rem] tablet:text-[1rem] tablet:py-[1rem]"/>
                            </label>   

                            <label className="estado text-[0.875rem] text-cinza font-bold tablet:text-[1.125rem]"> Estado*
                                <select name="" id="" value={selectedEstado} onChange={handleEstadoUpdate} className="w-[9rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] py-1 tablet:text-[1rem] tablet:py-[0.3rem] tablet:w-[13rem]"> 
                                    {estados.map((estado) => <option key={estado.id} value={estado.sigla} >{estado.nome}</option>)}
                                </select>
                            </label>

                            <label className="cidades text-[0.875rem] text-cinza font-bold tablet:text-[1.125rem] tablet:ml-2"> Cidades*
                                <select name="" id="" className="w-[9rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] py-[0.2rem] mb-[1.5rem] tablet:text-[1rem] tablet:py-[0.3rem] tablet:w-[13rem]">
                                    {cidades.map((cidade) => <option key={cidade.nome}> {cidade.nome} </option>)}
                                </select>
                            </label>

                            <label className="cnpj text-[0.875rem] text-cinza col-span-2 font-bold tablet:text-[1.125rem]">CNPJ*
                                <InputMask  mask="99.999.999/9999-99"  maskChar=""  placeholder="00.000.000/0001-00" className='w-[20rem] h-[2rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] mb-[1.5rem] tablet:w-[27rem] tablet:text-[1rem] tablet:py-[1rem]' required />
                            </label>  

                            <label className="telefone text-[0.875rem] text-cinza font-bold tablet:text-[1.125rem]">Telefone*
                                <InputMask  mask="(99) 99999-9999"  maskChar=""  placeholder="(DD) _____-____" className='w-[9rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] py-1 tablet:text-[1rem] tablet:py-[0.3rem] tablet:w-[13rem]' required />
                            </label>  

                            <label className="horário text-[0.875rem]  text-cinza font-bold tablet:text-[1.125rem] tablet:ml-2">Horário para contato*
                                <input type="time" placeholder="00:00" className='w-[9rem] border-2 rounded-lg font-normal text-[0.7rem] pl-[0.7rem] mt-[0.3rem] py-[0.18rem] mb-[1.5rem] tablet:text-[1rem] tablet:py-[0.3rem] tablet:w-[13rem]' />
                            </label> 

                            <p className="text-[0.6rem] text-grafite flex items-end justify-end col-start-2 tablet:text-[0.8rem]">*Campos obrigatórios</p>

                            <button className="col-start-2 w-[9rem] h-[2.5rem] mt-[1.4rem] ml-[1.2rem] tablet:w-[12.5rem] tablet:h-[3rem] rounded-lg bg-gradient-to-b from-laranja to-magenta">
                                <p className="text-white text-[0.7rem] font-semibold">Enviar</p>
                                </button>
                        </div>
                    </form>
            </div>  
         </div>
    )
  };
  
  
