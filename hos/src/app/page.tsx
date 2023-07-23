import { Header } from "@/components/header";
import { HeroSection } from "@/components/herosection/herosection";


export default function Home() {
  return (
    <>
    <Header />
    <HeroSection 
      bgClassName={"bg"}
      title={"Sistema intuitivo, processos claros e suporte simplificado!"} 
      text={"Temos a receita certa para o sucesso da sua drogaria ou farmácia de manipulação."} 
      img={undefined}
    />

      

    </>
 )
}
