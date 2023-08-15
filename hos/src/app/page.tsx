'use client'
import { Header } from "@/components/header";
import { HeroSection } from "@/components/herosection";
import { Beneficios } from "@/components/beneficios";
import { Sistema } from "@/components/sistema";
import { Solucoes } from "@/components/solucoes";
import { FinanceiroWeb } from "@/components/financeiroWeb";
import { Painel } from "@/components/painel";
import { Cta } from "@/components/cta";
import {Contador} from "@/components/contador";
import { Feedback } from "@/components/feedback";
import banner from '../../public/Homepage.png';
import { Simplifique } from "@/components/simplifique";
import { Marcas } from "@/components/marcas";
import { Footer } from "@/components/footer";
import {NextUIProvider} from "@nextui-org/react";


export default function Home() {
  
  return (

    <>
    <NextUIProvider>

    <Header />
    <HeroSection 
          bgClassName={"bg-gradient-to-b from-laranja to-magenta"}
          title={"Sistema intuitivo, processos claros e suporte simplificado!"}
          titleClassName={"text-white"}
          text={"Temos a receita certa para o sucesso da sua drogaria ou farmácia de manipulação."}
          textClassName={"text-white"}
          buttonClassName={"bg-darker text-white hover:bg-white hover:text-darker hover:transition hover:duration-500"}
          img={banner} buttonName={'Solicite uma demonstração'}      />
    <Beneficios />
    <Sistema />
    <Solucoes />
    <FinanceiroWeb />
    <Painel />
    <Cta />
    <Contador initialValue={0} />
    <Feedback />
    <Simplifique />
    <Marcas />
    <Footer />
    </NextUIProvider>
   
      

    </>
 )
}