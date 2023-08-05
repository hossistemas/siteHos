import { Header } from "@/components/header";
import { Subheader } from "@/components/subheader";

export default function Administracao() {
  return(
      <>
      <Header />
      <Subheader
      primeiro={"Administração"} hrefPrimeiro={"/solucoes/administracao"}
      segundo={"Gerenciamento de Loja"}  hrefSegundo={"/"}
      terceiro={"Processos de Manipulação"} hrefTerceiro={""}
      quarto={"Soluções complementares"}  hrefQuarto={""}
      />
        
  
      </>
   )
  }