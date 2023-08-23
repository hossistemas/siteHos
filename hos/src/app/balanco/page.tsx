import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Balanco } from "@/components/balanco";



export default function Suporte() {
  return(
    <div className="overflow-x-hidden tablet:w-full">
      <Header solucoesClassName={''} sobreClassName={''} suporteClassName={''} universidadeClassName={''} />
      <Balanco />
      <Footer />
  
      </div>
   )
  }