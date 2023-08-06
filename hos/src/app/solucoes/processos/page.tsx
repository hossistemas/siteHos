import { Header } from "@/components/header";
import { HeroSection } from "@/components/herosection";
import { Subheader } from "@/components/subheader";
import manipulacao from '../../../../public/manipulacao.png'
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Maximize } from "@/components/maximiza";
import { Gestao } from "@/components/gestao";
import { Emuitomais } from "@/components/emuitomais";

export default function Processos() {
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
      title={"Gestão descomplicada para farmácias de manipulação"} 
      titleClassName={"text-fundo"}
      text={"Manipulação, Frente de Caixa e Controles Administrativos em um só lugar!"} 
      textClassName={"text-fundo"}
      buttonClassName={"bg-darker text-white hover:bg-fundo hover:text-darker hover:transition hover:duration-500"}
      img={manipulacao}
      /> 
      <Maximize />
      <Gestao />
      <Emuitomais />
    
      <Cta />
      <Footer />
  
      </>
   )
  }