import { Header } from "@/components/header";
import { HeroSection } from "@/components/herosection";
import { Subheader } from "@/components/subheader";
import gerenciamento from '../../../../public/Administração-de-Vendas.png'
import { Otimize } from "@/components/otimize";
import { Render } from "@/components/carrosselsolucoes";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Administracao() {
  return(
      <>
      <Header solucoesClassName={'tablet:font-extrabold tablet:text-vermelho'} />
      <Subheader
        primeiro={"Administração de Vendas"} hrefPrimeiro={"/solucoes/administracao"}
        segundo={"Gerenciamento de Loja"} hrefSegundo={"/solucoes/gerenciamento"}
        terceiro={"Processos de Manipulação"} hrefTerceiro={"/solucoes/processos"}
        quarto={"Soluções complementares"} hrefQuarto={"/solucoes/complementares"} urlUm={"/administracao"} urlDois={"/gerenciamento"} urlTres={"/processos"} urlQuatro={"/complementares"}      />
      <HeroSection 
        bgClassName={"bg-fundo"}
        title={"Melhore sua margem de lucro em cada oportunidade de venda"}
        titleClassName={"text-grafite tablet:w-[35rem]"}
        text={"Velocidade e entendimento do cliente como chave para o seu sucesso."}
        textClassName={"text-grafite"}
        buttonClassName={"bg-gradient-to-b from-laranja to-magenta text-white hover:bg-gradient-to-b hover:from-darker hover:to-darker hover:transition hover:duration-500"}
        img={gerenciamento} buttonName={'Solicite uma demonstração'} imageClassName={''}      /> 
      <Otimize /> 
      <Render />
      <Cta />
      <Footer />
  
      </>
   )
  }