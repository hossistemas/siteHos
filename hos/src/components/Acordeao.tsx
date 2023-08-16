import setaUp from '../../public/setaUp.svg'
import Image from 'next/image'
import { Key, useState} from "react"

type AcordeaoProps = {
    section: any,
    sections: any,
    index: any,
    sectionIndex: any,
}

type AcordeaoSectionProps = {
    section: any,
    sections: any,
    index: any,
    isActiveSection: any,
    setActiveIndex: any,
    activeIndex: any,
    sectionIndex: any,
    
}

const AcordeaoSection = ({section, isActiveSection, sectionIndex, setActiveIndex} : AcordeaoSectionProps) => {
    const toggleSection = () => {
        const nextIndex = isActiveSection ? null : sectionIndex;
        setActiveIndex(nextIndex);
    }
    

    return (
        <div className='bg-fundo'>
        <div className='mt-[3rem] pt-[0.5rem] -my-[2rem] rounded-lg bg-white drop-shadow-lg  max-w-[20.3rem] h-auto tablet:max-w-[31rem] tablet:pt-[1rem] tablet:pb-[0.5rem] tablet:ml-2'>
            
            <div onClick={toggleSection} className='flex pl-1 justify-between items-center pb-2 mx-auto  '>
                <div className='flex ml-2 justify-start items-center  font-semibold text-grafite text-[0.8rem] leading-tight tablet:text-[1.125rem] '>{section.title}</div>
                <div className=' flex justify-end items-end'>{isActiveSection ? <Image src={setaUp} alt="-" className=' bg-gradient-to-b from-laranja to-magenta rounded-full mx-2  px-[0.5rem] py-[0.6rem] tablet:py-[1rem] tablet:px-[1rem] tablet:h-[3rem] tablet:w-[3rem] transition-all ease-in-out duration-500 ' /> : <Image src={setaUp} alt="+" className=' bg-gradient-to-b from-laranja to-magenta rounded-full mx-2  px-[0.5rem] py-[0.6rem] -rotate-180 tablet:py-[1rem] tablet:px-[1rem] tablet:h-[3rem] tablet:w-[3rem] transition-all ease-in-out duration-500'/>}</div>
            </div>
            {isActiveSection && 
            <div className='transition-all ease-in-out duration-500'>
                <div className='bg-cinza bg-opacity-20 h-[0.1rem] w-[16rem] flex mx-auto my-[0.3rem] tablet:w-[26rem] tablet:my-[0.6rem] '></div>
            <div className='mt-[0.1rem] bg-creme flex mx-auto px-[1rem] py-[1rem]  font-medium rounded-xl  text-vermelho-madeira leading-tight text-[0.8rem] tablet:text-[1rem] '>{section.text}</div>
            </div>}
         </div>
        </div>
    );
};


const Acordeao = ({ sections } : AcordeaoProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
return (
    <div className=" w-[360px] px-[2rem] tablet:grid tablet:grid-cols-2 tablet:w-[64rem] tablet:h-[26rem] tablet:mx-auto tablet:gap-y-4 tablet:gap-x-4 ">
        {sections.map((section: any, index: Key | null | undefined) => (
        <AcordeaoSection section={section} key={index} 
        isActiveSection={index === activeIndex} 
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
        sectionIndex={index}
    
        
        sections={undefined} index={undefined}/>
        ))}
    </div>

 )
}

export default Acordeao;

