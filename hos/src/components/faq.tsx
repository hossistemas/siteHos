import Acordeao from "./Acordeao";
import Image from "next/image";
import faq from '../../public/faq.svg'
import flecha from '../../public/pequenaFlechaDireita.svg'
import Link from "next/link";

const perguntasRespostas = [
    {
      title:'Qual o valor do sistema?',
       text:'A mensalidade é flexível e depende de vários fatores, como o número de computadores, o tamanho da equipe, o porte da farmácia e o faturamento mensal. Para obter uma avaliação mais precisa, recomendamos entrar em contato com um dos nossos especialistas.'
    },  
    
    {
        title:'Como funciona a forma de pagamento?',
       text:'A cada mês, a farmácia recebe um boleto contendo o valor da mensalidade do sistema. Esse boleto pode ser pago em agências bancárias, casas lotéricas, aplicativos de pagamento ou através de serviços de internet banking. Além disso, a farmácia também tem a opção de realizar uma transferência bancária, se preferir.' 
    },
    {
        title:'Existe algum valor de implantação a ser pago?',
       text:'O valor da implantação é negociado entre a farmácia e o consultor comercial da HOS, levando em consideração diversos aspectos, como a infraestrutura da farmácia (condições dos computadores, configurações), o número de funcionários, o tempo necessário para o treinamento, bem como os custos de deslocamento e estadia.' 
    },
    {
        title:'Quais são as consequências se a farmácia não pagar ou atrasar a assinatura do sistema?',
       text:'Em caso de atraso no pagamento da assinatura, o sistema permanece disponível para uso por um período de 5 dias. Após esse prazo, se o pagamento não for confirmado, o acesso às ferramentas do sistema será bloqueado. Assim que a farmácia efetuar e comprovar o pagamento da assinatura, o acesso será automaticamente restabelecido.' 
    },
    {
        title:'Como posso efetuar a compra do sistema?',
       text:'Contamos com revendas autorizadas em todo o Brasil. Para sua comodidade, solicite uma demonstração do sistema para que nossos especialistas entrem em contato com sua farmácia e agendem o melhor horário para falar com você.' 
    },
    {
        title:'Como que funciona o suporte do sistema?',
       text:'O suporte do sistema está disponível de segunda a sexta-feira, das 08:00 às 18:00 horas. Para casos de urgência, também oferecemos plantão de suporte das 18:00 às 22:00. Aos sábados, domingos e feriados, temos plantonistas disponíveis para atender a urgências das 08:00 às 22:00.' 
    },
    {
        title:'Será oferecido algum tipo de treinamento para minha farmácia?',
       text:'Após a implementação do sistema, nossa equipe de implantação oferece treinamentos presenciais ou online, conduzidos por consultores especializados. Além disso, estamos sempre disponíveis para uma comunicação fácil, a fim de solucionar quaisquer dúvidas que possam surgir durante o treinamento.' 
    },
    {
        title:'Como funciona a assinatura do sistema?',
       text:'A fim de garantir o acesso às funções e ferramentas do sistema, a farmácia realiza uma assinatura com fidelidade, permitindo que possamos contribuir de forma eficaz para o crescimento do seu negocio.' 
    },
   
]

export function Faq () {
    
    
    return (
        <div>
            <div className="bg-gradient-to-b from-laranja to-magenta w-auto h-[12rem] pt-[3rem] tablet:h-[21rem]">
                <div className="tablet:flex  tablet:items-center tablet:pt-[4.5rem] tablet:ml-[12rem]">
                    <div className="bg-white w-[2.75rem] h-[2.75rem] rounded-full flex mx-auto items-center justify-center drop-shadow-lg  tablet:w-[3.5rem] tablet:h-[3.5rem] tablet:mx-0">
                        <Image src={faq} alt='' className=''/>
                    </div>
                    <h2 className="text-[1.5rem] text-white font-bold flex justify-center mx-auto pt-[0.8rem] tablet:mx-0 tablet:text-[2.75rem] tablet:ml-6 tablet:mb-3">Perguntas Frequentes</h2>
                </div>
            </div>
            <div className="bg-fundo pt-5">
                <div className="pb-[5rem] ">
                    <Acordeao sections={perguntasRespostas} section={undefined} index={undefined} sectionIndex={undefined}/>
                </div>

                <div className="pb-[3rem] tablet:pb-[6rem] tablet:pt-[9rem]">
                    <p className="text-[1rem] text-grafite font-semibold w-[13rem] flex mx-auto text-center tablet:text-[1.25rem] tablet:w-[25rem]">Não encontrou a resposta para sua dúvida?</p>
                    <Link href="/sobre/contato">       
                        <button className="flex justify-center items-center mx-auto mt-[1rem] pt-[1.2rem] w-[13.4rem] h-[0.9rem]  py-[1.3rem] px-[0.8rem] rounded-lg bg-gradient-to-b from-laranja to-magenta  tablet:pt-[1.5rem] tablet:w-[15rem] tablet:h-[3.5rem] tablet:rounded-lg tablet:hover:bg-gradient-to-b tablet:hover:from-darker tablet:hover:to-darker tablet:hover:duration-1000">
                                    <p className="text-fundo text-[0.87rem] font-normal text-center pr-[0.5rem]">Entre em contato conosco</p>
                                    <Image src={flecha} alt="" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
  };
  
  
