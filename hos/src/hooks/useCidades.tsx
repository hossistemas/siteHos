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
   

    useEffect(() => {
        fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${siglaUF}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Erro na requisição");
            }
            return response.json();
          })
          .then((data) => {
            setCidades(data);
          })
          .catch((error) => {
            console.error("Erro ao buscar cidades:", error);
            setCidades([]);
          });
      }, [siglaUF]);

    return {
        cidades, useCidades
    }
}

