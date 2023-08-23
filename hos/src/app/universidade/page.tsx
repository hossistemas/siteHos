import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Herouniversidade } from "@/components/herouniversidade";
import { Videos } from "@/components/videos";
import { Cta } from "@/components/cta";



export default function Suporte() {
  return(
      <div className="overflow-x-hidden tablet:w-full">
      <Header solucoesClassName={''} sobreClassName={''} suporteClassName={''} universidadeClassName={'tablet:font-extrabold tablet:text-vermelho'} />
      <Herouniversidade />
      <Videos />
      <Cta />
      <Footer />  
      </div>
   )
  }