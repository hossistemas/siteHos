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
            <div className="bg-fundo pt-5 px-[1rem] flex ">               
                <div className="w-[9.8rem] h-[12.3rem] mr-[0.8rem] b-[1.5rem]  rounded-lg bg-gradient-to-b from-degradeUm  to-degradeDois">               
                        <Image src={pdv} alt='' className='mx-auto pt-[1.9rem]'/>
                        <div className="text-white text-[1.25rem] font-extrabold flex justify-center mt-[1.5rem]">
                             <p>+</p>
                             <Card initialValue={0} finalValue={10}></Card>
                             <p>MIL</p>
                        </div>
                        <p className='text-[0.8rem] text-white flex mx-auto justify-center mt-[0.5rem] pb-[1.5rem]'>PDV</p>
                </div>
                

                <div className=" w-[9.8rem] h-[12.3rem]  rounded-lg bg-gradient-to-b from-degradeUm to-degradeDois">               
                        <Image src={brasil} alt='' className='mx-auto pt-[1.9rem]'/>
                        <div className="text-white text-[1.25rem] font-extrabold flex justify-center mt-[1.5rem]">
                             <Card initialValue={0} finalValue={26}></Card>
                        </div>
                        <p className='text-[0.8rem] text-white flex mx-auto justify-center mt-[0.5rem]'>PDV</p>
                </div>
            </div>
            
            <div className="bg-fundo pt-[0.8rem] px-[1rem] flex justify-center ">
                <div className="w-[9.8rem] h-[12.3rem] rounded-lg bg-gradient-to-b from-degradeUm to-degradeDois">               
                            <Image src={rede} alt='' className='mx-auto pt-[1.9rem]'/>
                            <div className="text-white text-[1.25rem] font-extrabold flex justify-center mt-[1.5rem]">
                                <p>+</p>
                                <Card initialValue={0} finalValue={10}></Card>
                                <p>MIL</p>
                            </div>
                            <p className='text-[0.8rem] text-white flex mx-auto justify-center mt-[0.5rem]'>PDV</p>
                </div>
            </div>
        </>
      );
    }
;
    
