import useCidades from "@/hooks/useCidades";
import useEstados from "@/hooks/useEstados";
import { useState } from "react";




export function Formulario () {
    const { estados } = useEstados();
    const { cidades} = useCidades({siglaUF: ''});
    const [selectedEstado, setSelectedEstado] = useState('')

    const handleEstadoUpdate = (event) => {
    
    }

    return (
        <div>
          <select name="" id="" value={selectedEstado} onChange={}>
            {estados.map((estado) => <option key={estado.id} value={estado.sigla}>{estado.nome}</option>)}
          </select>


          <select name="" id="">
            {cidades.map((cidade) => <option key={cidade.nome} > {cidade.nome} </option>)}
          </select>
     
        </div>
    )
  };
  
  
