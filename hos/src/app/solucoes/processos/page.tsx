import { Header } from "@/components/header";
import { HeroSection } from "@/components/herosection";
import { Subheader } from "@/components/subheader";
import manipulacao from '../../../../public/Processos-de-Manipulação.png'
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Maximize } from "@/components/maximiza";
import { Gestao } from "@/components/gestao";
import { Emuitomais } from "@/components/emuitomais";

export default function Processos() {
  return(
      <div className="overflow-x-hidden tablet:w-full">
      <Header solucoesClassName={'tablet:font-extrabold tablet:text-vermelho'} sobreClassName={''} suporteClassName={''} universidadeClassName={''}/>
      <Subheader
      primeiro={"Administração de Vendas"} hrefPrimeiro={"/solucoes/administracao"}
      segundo={"Gerenciamento de Loja"}  hrefSegundo={"/solucoes/gerenciamento"}
      terceiro={"Processos de Manipulação"} hrefTerceiro={"/solucoes/processos"}
      quarto={"Soluções complementares"}  hrefQuarto={"/solucoes/complementares"}
      urlUm={"/administracao"} urlDois={"/gerenciamento"} urlTres={"/processos"} urlQuatro={"/complementares"} 
      />
      <HeroSection 
        bgClassName={"bg-gradient-to-b from-laranja to-magenta"}
        title={"Gestão descomplicada para farmácias de manipulação"}
        titleClassName={"text-fundo tablet:w-[35rem]"}
        text={"Manipulação, Frente de Caixa e Controles Administrativos em um só lugar!"}
        textClassName={"text-fundo"}
        buttonClassName={"bg-darker text-white hover:bg-fundo hover:text-darker hover:transition hover:duration-500"}
        img={manipulacao} buttonName={'Solicite uma demonstração'} imageClassName={'tablet:mr-0 tablet:ml-[3.8rem] tablet:h-auto tablet:w-[91rem] tablet:mt-[5.1rem]'} linkName={"/sobre/contato"}      /> 
      <Maximize />
      <Gestao />
      <Emuitomais />
    
      <Cta />
      <Footer />
  
      </div>
   )
  }