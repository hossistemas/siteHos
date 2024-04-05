import { renderToString } from "react-dom/server";

export interface EmailData {
    formReq: string;
    para:string;
    assunto:string;
    nome:string; 
    email:string;
    empresa:string;
    estado:string; 
    cidade:string;
    mensagem?:string;
    telefone:string; 
    horario:string;
    LGPD:string;
    cnpj?:string;
}

export function emailTemplate(props:EmailData){
    return renderToString(
        <>
            <p>Formulário: {props.formReq}</p>
            <p>Nome do Solicitante: {props.nome}</p>
            {
                props.cnpj ? <p>CNPJ: {props.cnpj}</p> : null
            }
            <p>Empresa: {props.empresa}</p>
            <p>Estado: {props.estado}</p>
            <p>Cidade: {props.cidade}</p>
            <p>E-mail: {props.email}</p>
            <p>Telefone para Contato: {props.telefone}</p>
            <p>Horário para Contato: {props.horario}</p>
            {
                props.formReq.toLowerCase() == 'clientes' ? <p>Mensagem: {props.mensagem}</p> : null 
            }
        </>
    )
}