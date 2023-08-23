import { Header } from "@/components/header";
import { Revendedor } from '@/components/revendedor'
import { Footer } from "@/components/footer";
import { Subheader } from "@/components/subheader";
import { Lista } from "@/components/listarevendedores";



export default function Revendas() {
  return(
      <>
      <Header solucoesClassName={''} sobreClassName={'tablet:font-extrabold tablet:text-vermelho'} suporteClassName={''} universidadeClassName={''} />
      <Subheader
      primeiro={"Quem Somos"} hrefPrimeiro={"/sobre/quemsomos"}
      segundo={"Perguntas frequentes"}  hrefSegundo={"/sobre/faq"}
      terceiro={"Contato"} hrefTerceiro={"/sobre/contato"}
      quarto={"Revendas"}  hrefQuarto={"/sobre/revendas"}
      urlUm={"/quemsomos"} urlDois={"/faq"} urlTres={"/contato"} urlQuatro={"/revendas"}/>
      <Lista />
      <Revendedor />
      <Footer />
  
      </>
   )
  }