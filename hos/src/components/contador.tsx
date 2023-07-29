'use client'

import pdv from '../../public/pdv.svg'
import brasil from '../../public/brasil.svg'
import rede from '../../public/rede.svg'
import Image from 'next/image'
import { useEffect, useState } from "react";


interface ContadorProps {
    initialValue: number;
}


        

export  function Contador(props: ContadorProps)  {

    const Card = ({ initialValue, finalValue }: { initialValue: number; finalValue: number }) => {
        const [count, setCount] = useState(initialValue);
    
        useEffect(() => {
          const interval = setInterval(() => {
            setCount((prevCount) => (prevCount < finalValue ? prevCount + 1 : prevCount));
          }, 100);
    
          return () => clearInterval(interval);
        }, [finalValue]);
    
        return (
            <p className="text-white text-[1.25rem] font-extrabold">{count}</p>

        );
      };
    
      return (
        <>
            <div className="bg-fundo pt-5 px-[1rem] grid-cols-2 ">
                <div className="w-[9.8rem] h-[12.3rem] rounded-lg bg-gradient-to-b from-degradeUm to-degradeDois">
                <Image src={pdv} alt=''/>
                <div className="text-white text-[1.25rem] font-extrabold flex">
                <p>+</p>
                <Card initialValue={0} finalValue={10}></Card>
                <p>MIL</p>
                </div>
                </div>
            </div>
        </>
      );
    }
;
    
