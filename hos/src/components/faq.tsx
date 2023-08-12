import Acordeao from "./Acordeao";
import Image from "next/image";
import faq from '../../public/faq.svg'

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
            <div className="bg-gradient-to-b from-laranja to-magenta w-auto h-[12rem] pt-[3rem]">
                <div className="bg-white w-[2.75rem] h-[2.75rem] rounded-full flex mx-auto items-center justify-center drop-shadow-lg ">
                    <Image src={faq} alt='' className=''/>
                </div>
                <h2 className="text-[1.5rem] text-white font-bold flex justify-center mx-auto pt-[0.8rem]">Perguntas Frequentes</h2>
            </div>
        <div className="pb-[5rem]">
            <Acordeao sections={perguntasRespostas} section={undefined} index={undefined} sectionIndex={undefined}/>
        </div>
        </div>
    )
  };
  
  
