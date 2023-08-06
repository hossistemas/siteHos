import { Header } from "@/components/header";
import { Subheader } from "@/components/subheader";
import { Footer } from "@/components/footer";

export default function Administracao() {
  return(
      <>
      <Header />
      <Subheader
      primeiro={"Quem Somos"} hrefPrimeiro={"/sobre/quemsomos"}
      segundo={"Perguntas frequentes"}  hrefSegundo={"/sobre/faq"}
      terceiro={"Contato"} hrefTerceiro={"/sobre/contato"}
      quarto={"Revendas"}  hrefQuarto={"/sobre/revendas"}
      />

      <Footer />
  
      </>
   )
  }