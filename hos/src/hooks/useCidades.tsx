import { useEffect, useState } from "react"

export interface ICidade {
    nome: string;
    codigo_ibge: string;
  }
  

  interface IUseCidadesProps {
    siglaUF: string; 
  }



export default function useCidades ({ siglaUF }: IUseCidadesProps) {
    const [cidades, setCidades] = useState<ICidade[]>([]);

    useEffect (() => {
        fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${siglaUF}?providers=dados-abertos-br,gov,wikipedia`)
        .then((response) => response.json())
        .then((data) => setCidades(data))

    }, [siglaUF]);

    return {
        cidades, useCidades
    }
}

