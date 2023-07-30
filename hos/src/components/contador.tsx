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
            <p className="text-fundo text-[1.25rem] font-extrabold tablet:text-[3.12rem]">{count}</p>

        );
      };
    
      return (
        <>
            <div className="bg-fundo max-w-auto pt-5 px-[1rem]  ">  
                <div className='grid grid-cols-4 tablet:w-[1200px] tablet:flex tablet:mx-auto tablet:items-center tablet:justify-center tablet:mt-[5rem]'>
                    
                    <div className="col-span-2 w-[9.8rem] h-[12.3rem] mr-[0.8rem] b-[1.5rem] rounded-lg bg-gradient-to-b from-degradeUm  to-degradeDois tablet:w-[20.8rem] tablet:h-[22.5rem] tablet:rounded-xl tablet:mr-[5rem]">               
                            <Image src={pdv} alt='' className='mx-auto pt-[1.9rem] tablet:w-[7.8rem] tablet:h-auto tablet:mt-[2rem]'/>
                            <div className="text-fundo text-[1.25rem] font-extrabold flex justify-center mt-[1.5rem] tablet:text-[3.12rem]">
                                <p>+</p>
                                <Card initialValue={0} finalValue={10}></Card>
                                <p>MIL</p>
                            </div>
                            <p className='text-[0.8rem] text-fundo flex mx-auto justify-center mt-[0.5rem] pb-[1.5rem] tablet:text-[1.5rem]'>PDV</p>
                    </div>
                    

                    <div className="col-span-2 w-[9.8rem] h-[12.3rem]  rounded-lg bg-gradient-to-b from-degradeUm to-degradeDois tablet:w-[20.8rem] tablet:h-[22.5rem] tablet:rounded-xl tablet:mr-[5rem]">               
                            <Image src={brasil} alt='' className='mx-auto pt-[1.9rem] tablet:w-[7.8rem] tablet:h-auto tablet:mt-[2rem]'/>
                            <div className="text-fundo text-[1.25rem] font-extrabold flex justify-center mt-[1.5rem] tablet:text-[3.12rem]">
                                <Card initialValue={0} finalValue={26}></Card>
                            </div>
                            <p className='text-[0.8rem] text-fundo flex mx-auto justify-center mt-[0.5rem] tablet:text-[1.5rem]'>ESTADOS DO BRASIL</p>
                    </div>

                    <div className="col-start-2 col-span-2 w-[9.8rem] h-[12.3rem] mt-[0.5rem] rounded-lg bg-gradient-to-b from-degradeUm to-degradeDois tablet:mt-0 tablet:w-[20.8rem] tablet:h-[22.5rem] tablet:rounded-xl">               
                                <Image src={rede} alt='' className='mx-auto pt-[1.9rem] tablet:w-[7.8rem] tablet:h-auto tablet:mt-[2rem]'/>
                                <div className="text-fundo text-[1.25rem] font-extrabold flex justify-center mt-[1.5rem] tablet:text-[3.12rem]">
                                    <p>+</p>
                                    <Card initialValue={450} finalValue={500}></Card>     
                                </div>
                                <p className='text-[0.8rem] text-fundo flex mx-auto justify-center mt-[0.5rem] tablet:text-[1.5rem]'>REDE DE CLIENTES</p>
                    </div>
                </div>         
            </div>
            
        </>
      );
    }
;
    
