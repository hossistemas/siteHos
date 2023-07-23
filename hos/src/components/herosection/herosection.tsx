import Image from 'next/image'


interface HeroSectionProps {
    title: string;
    text: string;
    img: any;
    bgClassName: any,
    titleClassName: any,
    textClassName: any,
    buttonClassName: any,
}

export function HeroSection({title, text, img, bgClassName, titleClassName, textClassName, buttonClassName}: HeroSectionProps){
    
    return(
        <>
        
        <div className={`drop-shadow-lg mb-[5rem] tablet:pb-[1rem] ${bgClassName}`}>
            <div className="mx-auto max-w-[460px] tablet:flex tablet:justify-center tablet:items-center  tablet:max-w-[1200px] tablet:h-[500px]">

                <div className='pt-[3rem] px-[3rem] max-w-[500px] tablet:pl-[2rem] tablet:pr-[1.6rem] tablet:max-w-[510px]  '>
                    <h1 className={`text-[1.5rem] font-bold leading-none tablet:text-[2.25rem] ${titleClassName}`}>{title}</h1>
                    <p className={`text-[0.8rem] font-medium my-[1rem] tablet:text-[1.5rem] ${textClassName}`}>{text}</p>
                    <button className={`text-[1rem] font-regular mb-[1.3rem] px-[1.3rem] py-[0.4rem] rounded-md tablet:text-[1.2rem] ${buttonClassName}`}>Solicite uma demonstração</button>
                </div>

                <div className=' tablet:flex  '>
                    <Image src={img} alt='' className=' tablet:w-[500px] h-auto tablet:mt-[6rem]'/>
                </div>
            
            </div>
            
        </div>

        </>
        )    

}
    
