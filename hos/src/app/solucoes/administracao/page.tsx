import { Header } from "@/components/header";
import { HeroSection } from "@/components/herosection";
import { Subheader } from "@/components/subheader";
import gerenciamento from '../../../../public/gerenciamento.png'
import { Otimize } from "@/components/otimize";

export default function Administracao() {
  return(
      <>
      <Header />
      <Subheader
      primeiro={"Administração"} hrefPrimeiro={"/solucoes/administracao"}
      segundo={"Gerenciamento de Loja"}  hrefSegundo={"/"}
      terceiro={"Processos de Manipulação"} hrefTerceiro={""}
      quarto={"Soluções complementares"}  hrefQuarto={""}
      />
      <HeroSection 
      bgClassName={"bg-fundo"}
      title={"Melhore sua margem de lucro em cada oportunidade de venda"} 
      titleClassName={"text-grafite"}
      text={"Velocidade e entendimento do cliente como chave para o seu sucesso."} 
      textClassName={"text-grafite"}
      buttonClassName={"bg-gradient-to-b from-laranja to-magenta text-white hover:bg-gradient-to-b hover:from-darker hover:to-darker hover:transition hover:duration-500"}
      img={gerenciamento}
      /> 
      <Otimize /> 
  
      </>
   )
  }