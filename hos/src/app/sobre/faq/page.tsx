'use client'

import { Header } from "@/components/header";
import { Subheader } from "@/components/subheader";
import { Footer } from "@/components/footer";
import { Faq } from "@/components/faq";


export default function Administracao() {
  return(
      <>
      <Header solucoesClassName={''} sobreClassName={'tablet:font-extrabold tablet:text-vermelho'} suporteClassName={''} universidadeClassName={''} />
      <Subheader
        primeiro={"Quem Somos"} hrefPrimeiro={"/sobre/quemsomos"}
        segundo={"Perguntas frequentes"} hrefSegundo={"/sobre/faq"}
        terceiro={"Contato"} hrefTerceiro={"/sobre/contato"}
        quarto={"Revendas"} hrefQuarto={"/sobre/revendas"} urlUm={"/quemsomos"} urlDois={"/faq"} urlTres={"/contato"} urlQuatro={"/revendas"}      />
      <Faq />
      <Footer />
  
      </>
   )
  }