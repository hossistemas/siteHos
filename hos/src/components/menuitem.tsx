import Link from "next/link";

interface MenuProps {
    ativo?: Boolean,
    hrefDesc: string,
    descricao: string,
    
}

export function Menu({ativo, hrefDesc, descricao} : MenuProps){
    return(
        <Link href={hrefDesc}>
            <li className={`${ativo ? 'activemenu' : ''} flex w-[7rem]  text-center mx-auto justify-center self-center py-[1.57rem] tablet:py-[2.13rem] tablet:px-[0.3rem] tablet:w-[17rem]`}>{descricao}</li>
        </Link>
    )
}