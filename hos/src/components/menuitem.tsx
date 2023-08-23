import Link from "next/link";

interface MenuProps {
    ativo?: Boolean,
    hrefDesc: string,
    descricao: string,
    
}

export function Menu({ativo, hrefDesc, descricao} : MenuProps){
    return(
        <Link href={hrefDesc}>
            <li className={`${ativo ? 'activemenu' : ''}  flex w-[11.2rem] px-[1rem] py-[2rem] text-center mx-auto justify-center self-center  tablet:py-[1.6rem] tablet:px-[0.3rem] tablet:w-[17rem]`}>{descricao}</li>
        </Link>
    )
}