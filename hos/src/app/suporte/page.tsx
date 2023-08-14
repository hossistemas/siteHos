import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/herosection";
import suporte from '../../../public/suporte.png'


export default function Suporte() {
  return(
      <>
      <Header />
      <HeroSection 
              bgClassName={"bg-white"}
              title={"Precisa de suporte?"}
              titleClassName={"text-grafite"}
              text={"Abra um chamado através da nossa Área do Cliente. As respostas ao seu chamado são no período das 8h às 18h (segunda a sexta-feira)."}
              textClassName={"text-grafite"}
              buttonClassName={"bg-white border-2 border-vermelho text-vermelho hover:bg-darker hover:border-white hover:text-white hover:transition hover:duration-500"}
              img={suporte} buttonName={'Área do Cliente'}      /> 
      <Footer />
  
      </>
   )
  }