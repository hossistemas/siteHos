import { Header } from "@/components/header";
import { HeroSection } from "@/components/herosection";
import { Subheader } from "@/components/subheader";
import loja from '../../../../public/loja.png'
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Potencialize } from "@/components/potencialize";
import { Circulo } from "@/components/circulo";

export default function Gerenciamento() {
  return(
      <>
      <Header />
      <Subheader
      primeiro={"Administração"} hrefPrimeiro={"/solucoes/administracao"}
      segundo={"Gerenciamento de Loja"}  hrefSegundo={"/solucoes/gerenciamento"}
      terceiro={"Processos de Manipulação"} hrefTerceiro={"/solucoes/processos"}
      quarto={"Soluções complementares"}  hrefQuarto={"/solucoes/complementares"}
      />
      <HeroSection 
      bgClassName={"bg-gradient-to-b from-laranja to-magenta"}
      title={"Transforme sua farmácia em um sucesso lucrativo"} 
      titleClassName={"text-fundo"}
      text={"Agilize processos, amplie vendas e aumente as margens de lucro com eficiência"} 
      textClassName={"text-fundo"}
      buttonClassName={"bg-darker text-white hover:bg-fundo hover:text-darker hover:transition hover:duration-500"}
      img={loja}
      /> 
      <Potencialize />
      <Circulo />
    
      <Cta />
      <Footer />
  
      </>
   )
  }