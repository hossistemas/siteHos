import { Header } from "@/components/header";
import { Subheader } from "@/components/subheader";
import { Footer } from "@/components/footer";
import { Heroquemsomos } from "@/components/heroquemsomos";
import { Tres } from "@/components/quemsomostres";


export default function Administracao() {
  return(
    <div className="overflow-x-hidden tablet:w-full">
      <Header solucoesClassName={''} sobreClassName={'tablet:font-extrabold tablet:text-vermelho'} suporteClassName={''} universidadeClassName={''} />
      <Subheader
      primeiro={"Quem Somos"} hrefPrimeiro={"/sobre/quemsomos"}
      segundo={"Perguntas frequentes"}  hrefSegundo={"/sobre/faq"}
      terceiro={"Contato"} hrefTerceiro={"/sobre/contato"}
      quarto={"Revendas"}  hrefQuarto={"/sobre/revendas"}
      urlUm={"/quemsomos"} urlDois={"/faq"} urlTres={"/contato"} urlQuatro={"/revendas"}/>
      <Heroquemsomos />
      <Tres />
      <Footer />
  
      </div>
   )
  }