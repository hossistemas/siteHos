import Acordeao from "./Acordeao";

const perguntasRespostas = [
    {
      title:'Preciso fazer uma avaliação?',
       text:' Sim, pois cada cliente tem uma indicação e anatomia distinta. Os tratamentos variam de acordo com o que vc deseja de resultado e indicação do profissional.'
    },  
    
    {
        title:'Após procedimento o que devo ter de cuidados?',
       text:' Cada procedimento tem sua orientação. Mas pode ficar tranquila, rotina normal com alguns cuidados específicos de cada protocolo.' 
    },
    {
        title:'Posso fazer mais de um procedimento no mesmo dia?',
       text:' Sim, porém tem protocolos que precisam de um intervalo entre eles para que sejam realizados.' 
    },
    {
        title:'É feito com anestesia?',
       text:'Sim, nossos procedimentos são com anestesia tópica ou injetável, depende do protocolo.' 
    },
    {
        title:'Tem contraindicação?',
       text:'Sim, principalmente lactantes e grávidas. É feito uma anamnese antes do seu procedimento para entender um pouco da sua saúde e dar continuidade ao seu protocolo com toda segurança.' 
    },
    {
        title:'Resultado é imediato?',
       text:' Alguns procedimentos sim, outros ao longo dos dias. Cada protocolo tem sua função e importância no seu tratamento.' 
    },
    {
        title:'Esses procedimentos são compatíveis com o organismo?',
       text:' São compatíveis e absorvidos pelo organismo. Melhor tecnologia que temos hoje na Estética é usada na Salomão sempre pensando na sua segurança.' 
    },
   
]

export function Faq () {
    
    
    return (
        <div>
            <Acordeao sections={perguntasRespostas} section={undefined} index={undefined} sectionIndex={undefined}/>
        </div>
    )
  };
  
  
