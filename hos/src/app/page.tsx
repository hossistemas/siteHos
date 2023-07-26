import { Header } from "@/components/header";
import { HeroSection } from "@/components/herosection";
import { Beneficios } from "@/components/beneficios";
import { Sistema } from "@/components/sistema";
import banner from '../../public/Homepage.png';

export default function Home() {
  
  return (
    <>
    <Header />
    <HeroSection 
      bgClassName={"bg-gradient-to-b from-laranja to-magenta"}
      title={"Sistema intuitivo, processos claros e suporte simplificado!"} 
      titleClassName={"text-white"}
      text={"Temos a receita certa para o sucesso da sua drogaria ou farmácia de manipulação."} 
      textClassName={"text-white"}
      buttonClassName={"bg-darker text-white hover:bg-white hover:text-darker hover:transition hover:duration-500"}
      img={banner}
    />
    <Beneficios />
    <Sistema />
   
      

    </>
 )
}