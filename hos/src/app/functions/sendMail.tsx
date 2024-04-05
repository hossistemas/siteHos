import { EmailData, emailTemplate } from '@/components/EmailTemplate';

interface ApiEmailModel {
    body: {
        para: string;
        assunto: string;
        mensagem: string;
    }
}

export default async function sendMail(
  props:any
) {
  try {
    const data = props

    const assuntoLabel : {
      [key:string]: string
    } = {
      'suporte': 'Dúvidas',
      'financeiro': 'Quero o HOS para minha Farmácia',
      'demonstracao': 'Demonstração',
      'representante': 'Seja um Representante'
    }

    const emailData : EmailData = {
        formReq: props.formReq,
        para: 'comercial@hos.com.br',
        assunto: 'Site HOS | ' + assuntoLabel[data.assunto],
        cnpj: data.cnpj,
        nome: data.nome,
        email: data.email,
        empresa: data.empresa,
        estado: data.estado,
        cidade: data.cidade,
        mensagem: data.mensagem,
        telefone: data.telefone,
        horario: data.horario,
        LGPD: data.LGPD == 'on' ? 'Aceito' : 'Rejeitado'
    }

    const emailApi : ApiEmailModel = {
        body: {
            para: emailData.para,
            assunto: emailData.assunto,
            mensagem: emailTemplate(emailData)
        }
    }

    const url: string | undefined = process.env.API_EMAIL;

    const headers: HeadersInit = {
        api_key: process.env.API_KEY_MAIL ?? ''

    }
    return url 
        ? fetch(url, {
            headers: headers,
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(emailApi)
        })
        : null

  } catch (e) {
    return
  }
}