'use client'

import { count } from "console";
import Image from "next/image"
import { useEffect, useState } from "react";

interface ContadorProps {

}


        

export  function Contador(props: ContadorProps)  {

    const Card = ({ initialValue, finalValue }: { initialValue: number; finalValue: number }) => {
        const [count, setCount] = useState(initialValue);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCount((prevCount) => (prevCount < finalValue ? prevCount + 1 : prevCount));
          }, 30);
      
          return () => clearInterval(interval);
        }, [finalValue]);

    
        return(
        <>
        <div className="border p-4 m-4 rounded-lg shadow-md">
        <p className="text-4xl font-bold">{count}</p>
        </div>

        <div className="flex justify-center items-center h-screen">
        <Card initialValue={0} finalValue={50} />
        <Card initialValue={0} finalValue={100} />
        <Card initialValue={0} finalValue={200} />
        </div>
        </>
        )    

    }
};
    
