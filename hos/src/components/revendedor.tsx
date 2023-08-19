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
            cidade:'Salvador - Bahia',
            email:'consultimesolucoes@gmail.com',
            telefone:'(71) 3372-4545',
        },
        {
            image:'/maletinha.svg',
            title:'Contabilize Gestão',
            cidade:'Castelo - Espírito Santo',
            email:'nubia@contabilizegestao.com.br',
            telefone:'(26) 3542-5165',
        },
        {
            image:'/maletinha.svg',
            title:'Rafael Lucena Consultoria',
            cidade:'Guarapari - Espírito Santo',
            email:'rafaellucenaconsultoria@gmail.com',
            telefone:'(27) 9.9652-1589',
        },
        {
            image:'/maletinha.svg',
            title:'Lef Sistemas',
            cidade:'Várzea Grande - Mato Grosso',
            email:'ilson.ramos@lefsistemas.com.br',
            telefone:'(65) 3044-3573',
        },
        {
            image:'/maletinha.svg',
            title:'Andrade Silva Tecnologia',
            cidade:'Campo Grande - Mato Grosso do Sul',
            email:'paulo@infoin.com.br',
            telefone:'(67) 9.9129-0789',
        },
        {
            image:'/maletinha.svg',
            title:'Consulfar',
            cidade:'Belo Horizonte - Minas Gerais',
            email:'jadersondsousa@gmail.com',
            telefone:'(31) 9.8480-7777',
        },
        {
            image:'/maletinha.svg',
            title:'Softek Automação',
            cidade:'Governador Valadares - Minas Gerais',
            email:'softekautomacao@gmail.com',
            telefone:'(33) 3271-4427',
        },
        {
            image:'/maletinha.svg',
            title:'Pablo Gabriel Teixeira da Silva',
            cidade:'Monte Azul - Minas Gerais',
            email:'hosbh@hotmail.com',
            telefone:'(38) 3811-1908',
        },
        {
            image:'/maletinha.svg',
            title:'Relcach',
            cidade:'Patos de Minas - Minas Gerais',
            email:'realch@hotmail.com',
            telefone:'(34) 3061-5506',
        },
        {
            image:'/maletinha.svg',
            title:'Unisystem',
            cidade:'Ananindeua - Pará',
            email:'marcos.lobato1840@gmail.com',
            telefone:'(91) 9.8048-5701',
        },
        {
            image:'/maletinha.svg',
            title:'Integra Sistemas',
            cidade:'Santo André - Paraíba',
            email:'auxiliar.adm@integrasistemas.com.br',
            telefone:'(11) 4475.3712',
        },
        {
            image:'/maletinha.svg',
            title:'Inovar Automação',
            cidade:'Sapé - Paraíba',
            email:'zairofs@hotmail.com',
            telefone:'(11) 4475.3712',
        },
        {
            image:'/maletinha.svg',
            title:'Laz Digital',
            cidade:'Sertânia - Pernambucoa',
            email:'zuleilson@hotmail.com',
            telefone:'(87) 9.9647-8780',
        },
        {
            image:'/maletinha.svg',
            title:'Sysfarma',
            cidade:'Belford Roxo - Rio de Janeiro',
            email:'alessandro.lucc@gmail.com',
            telefone:'(21) 2761-1494',
        },
        {
            image:'/maletinha.svg',
            title:'Revenda Giovani',
            cidade:'Duque de Caxias - Rio de Janeiro',
            email:'giovaniaraujo@hotmail.com',
            telefone:'(21) 9.8001-5036',
        },
        {
            image:'/maletinha.svg',
            title:'Invicttus',
            cidade:'Natal - Rio Grande do Norte',
            email:'andrearaujo@matecnologia.com.br',
            telefone:'(84) 9.9118-7859',
        },
        {
            image:'/maletinha.svg',
            title:'Cleonides Fernandes de Brito',
            cidade:'Parnamirim - Rio Grande do Norte',
            email:'cleonidesjr@hotmail.com',
            telefone:'(84) 9.9630-5323',
        },
        {
            image:'/maletinha.svg',
            title:'Zupa System',
            cidade:'Capão da Canoa - Rio Grande do Sul',
            email:'zupasystem@gmail.com',
            telefone:'(51) 3622-1509',
        },
        {
            image:'/maletinha.svg',
            title:'BeEasy',
            cidade:'Farroupilha - Rio Grande do Sul',
            email:'pri@beeasy.com.br',
            telefone:'(54) 3698-9128',
        },
        {
            image:'/maletinha.svg',
            title:'Celulah',
            cidade:'Igrejinha - Rio Grande do Sul',
            email:'admcelulah@gmail.com',
            telefone:'(54) 9.9697-0208',
        },
        {
            image:'/maletinha.svg',
            title:'Base4 Sistemas Ltda',
            cidade:'Catanduva - São Paulo',
            email:'fernandofarinha@base4.com.br',
            telefone:'(17) 3524-2971',
        },
    ];

    return (
        <div className="bg-fundo">   
        
        <div className="pb-[2rem]">
            <h3 className="text-grafite w-[15.5rem] text-[1.4rem] font-bold pb-[1.5rem] mx-auto">Encontre uma revenda próxima a você!</h3>
            <input type="text" placeholder="Local ou revendedor" className="w-[15rem] h-[2.3rem] flex justify-center mx-auto drop-shadow-lg pl-[1rem] rounded-xl text-[0.7rem] text-cinza" />
        </div>

        <div> 
            <p className="text-grafite text-[0.9rem] font-semibold ml-[3.5rem]">Todos os revendedores </p>
            {revendedores.map((item, index) => (
                <div key={index} className="pb-[5rem] w-[15.5rem] h-[8.5rem] my-[0.7rem] mx-auto bg-white drop-shadow-xl rounded-lg">
            <Image src={item.image} width={100} height={100} alt='' className="flex w-[1rem] h-[2rem] ml-[1.35rem] pt-[1rem]"
            />
            <h2 className="text-[0.87rem] text-grafite font-semibold py-[0.8rem] ml-[1.35rem]">{item.title}</h2>
            <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Cidade:</span> {item.cidade} </p>
            <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">E-mail:</span> {item.email} </p>
            <p className="text-[0.6rem] text-cinza ml-[1.35rem]"> <span className="text-grafite font-medium">Telefone:</span> {item.telefone} </p>
            </div>
            ))}
      </div>




            <div className="tablet:grid tablet:grid-cols-2">
                    <form 
                    method="post"
                    action="https://sheetdb.io/api/v1/x8pbw34iytlna"
                    id="sheetdb-form" 
                    onSubmit={handleSubmit} 
                    className="bg-white mx-auto w-[22rem] h-[43rem] rounded-lg drop-shadow-botao mt-[-2rem] tablet:col-start-2 tablet:w-[35rem] tablet:h-[60rem] tablet:mt-[-12rem]">
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
  
  
