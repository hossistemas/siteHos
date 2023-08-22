import Image from 'next/image'
import Link from 'next/link';

interface HeroSectionProps {
    title: string;
    text: string;
    img: any;
    bgClassName: any,
    titleClassName: any,
    textClassName: any,
    buttonClassName: any,
    buttonName: any,
    imageClassName: any,
}

export function HeroSection({title, text, img, bgClassName, titleClassName, textClassName, buttonClassName, buttonName, imageClassName}: HeroSectionProps){
    
    return(
        <>

        <div className={`drop-shadow-md mb-[5rem] overflow-x-hidden tablet:pb-[1rem] ${bgClassName}`}>
          
            <div className=" mx-auto max-w-[460px] tablet:flex tablet:justify-center tablet:items-center  tablet:max-w-[1200px] tablet:h-[570px]">

                <div className='pt-[3rem] px-[3rem] max-w-[500px] tablet:pl-[2rem] tablet: tablet:max-w-[590px]  '>
                    <h1 className={`text-[1.5rem] font-bold leading-none tablet:text-[2.25rem] ${titleClassName}`}>{title}</h1>
                    <p className={`text-[0.8rem] font-normal mt-[1rem] mb-[1.5rem] tablet:text-[1.5rem] tablet:pb-[1.5rem] ${textClassName}`}>{text}</p>
                    <Link href="/sobre/contato">
                        <button className={`w-[16rem] text-[1rem] font-regular mb-[1.3rem] px-[1.3rem] py-[0.4rem] rounded-md tablet:text-[1.2rem] tablet:w-[20rem] tablet:h-[3rem] ${buttonClassName}`}>{buttonName}</button>
                    </Link>
                </div>

                <div className=' tablet:flex  '>
                    <Image src={img} alt='' className={` tablet:w-auto tablet:h-[580px] tablet:mt-[1.4rem] ${imageClassName}`}/>
                </div>
            </div>

        </div>

        </>
        )    

}
    