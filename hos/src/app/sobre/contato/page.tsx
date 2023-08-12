'use client'

import { Header } from "@/components/header";
import { Subheader } from "@/components/subheader";
import { Footer } from "@/components/footer";
import { Formulario } from "@/components/converse";



export default function Contato () {
  return(
      <>
      <Header />
      <Subheader
      primeiro={"Quem Somos"} hrefPrimeiro={"/sobre/quemsomos"}
      segundo={"Perguntas frequentes"}  hrefSegundo={"/sobre/faq"}
      terceiro={"Contato"} hrefTerceiro={"/sobre/contato"}
      quarto={"Revendas"}  hrefQuarto={"/sobre/revendas"}
      />
      <Formulario />
      <Footer />
  
      </>
   )
  }