import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/herosection";
import suporte from '../../../public/suporte.png'


import { Atendimento } from "@/components/atendimento";


export default function Suporte() {
  return(
    <div className="overflow-x-hidden tablet:w-full">
      <Header solucoesClassName={''} sobreClassName={''} suporteClassName={'tablet:font-extrabold tablet:text-vermelho'} universidadeClassName={''} />
      <HeroSection 
        bgClassName={"bg-white"}
        title={"Precisa de suporte?"}
        titleClassName={"text-grafite font-bold"}
        text={"Abra um chamado através da nossa Área do Cliente. As respostas ao seu chamado são no período das 8h às 18h (segunda a sexta-feira)."}
        textClassName={"text-grafite leading-tight w-[20rem] tablet:w-[35rem]"}
        buttonClassName={"bg-white border-2 border-vermelho text-vermelho  hover:bg-darker hover:border-white hover:text-white hover:transition hover:duration-500"}
        img={suporte} buttonName={'Área do Cliente'} imageClassName={'tablet:h-[500px] tablet:mt-[7rem]'} linkName={"http://cliente.hos.com.br/gerencial/Arearestrita/Autenticacao/Login"}      />
      <Atendimento /> 
      <Footer />
  
      </div>
   )
  }