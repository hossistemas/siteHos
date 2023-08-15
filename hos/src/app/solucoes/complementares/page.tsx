import { Header } from "@/components/header";
import { HeroSection } from "@/components/herosection";
import { Subheader } from "@/components/subheader";
import complementares from '../../../../public/complementares.png'
 
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Conformidade } from "@/components/conformidade";
import { Recursos } from "@/components/recursos";

export default function Administracao() {
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
        bgClassName={"bg-fundo"}
        title={"Aprimore sua experiência e torne-a ainda mais completa"}
        titleClassName={"text-grafite"}
        text={"Centralize e automatize as informações da sua farmácia de maneira fácil, e rápida."}
        textClassName={"text-grafite"}
        buttonClassName={"bg-gradient-to-b from-laranja to-magenta text-white hover:bg-gradient-to-b hover:from-darker hover:to-darker hover:transition hover:duration-500"}
        img={complementares} buttonName={'Solicite uma demonstração'}      /> 
      <Conformidade />
      <Recursos />
      <Cta />
      <Footer />
      </>
   )
  }