import { Header } from "@/components/header";
import { HeroSection } from "@/components/herosection";
import { Subheader } from "@/components/subheader";
import complementares from '../../../../public/Soluções-Complementares.png'
 
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Conformidade } from "@/components/conformidade";
import { Recurso } from "@/components/recurso";

export default function Administracao() {
  return(
      <div className="overflow-x-hidden tablet:w-full">
      <Header solucoesClassName={'tablet:font-extrabold tablet:text-vermelho'} sobreClassName={''} suporteClassName={''} universidadeClassName={''} />
      <Subheader
      primeiro={"Administração de Vendas"} hrefPrimeiro={"/solucoes/administracao"}
      segundo={"Gerenciamento de Loja"}  hrefSegundo={"/solucoes/gerenciamento"}
      terceiro={"Processos de Manipulação"} hrefTerceiro={"/solucoes/processos"}
      quarto={"Soluções complementares"}  hrefQuarto={"/solucoes/complementares"}
      urlUm={"/administracao"} urlDois={"/gerenciamento"} urlTres={"/processos"} urlQuatro={"/complementares"}
      />
      <HeroSection 
        bgClassName={"bg-fundo"}
        title={"Aprimore sua experiência e torne-a ainda mais completa"}
        titleClassName={"text-grafite"}
        text={"Centralize e automatize as informações da sua farmácia de maneira fácil e rápida."}
        textClassName={"text-grafite"}
        buttonClassName={"bg-gradient-to-b from-laranja to-magenta text-white hover:bg-gradient-to-b hover:from-darker hover:to-darker hover:transition hover:duration-500"}
        img={complementares} buttonName={'Solicite uma demonstração'} imageClassName={''} linkName={"/sobre/contato"}      /> 
      <Conformidade />
      <Recurso />
      <Cta />
      <Footer />
      </div>
   )
  }