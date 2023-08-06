'use client'
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

interface Faqprops{

}

export function Faq(props: Faqprops){
  

  return (

    <Accordion selectionMode="multiple" variant="shadow" className="w-[31rem]" >

      <AccordionItem key="1" aria-label="Accordion 1" title="Qual o valor do sistema?" className="tablet:ml-5 pb-[0.5rem]">
      <div className="bg-cinza w-[15rem] h-[0.05rem] mb-[1rem]"></div>
      A mensalidade é flexível e depende de vários fatores, como o número de computadores, o tamanho da equipe, o porte da farmácia e o faturamento mensal. Para obter uma avaliação mais precisa, recomendamos entrar em contato com um dos nossos especialistas.
      </AccordionItem>

       
    </Accordion>
  );
}
