import { Politico } from './Politico'
import { Esfera, Poder } from './Enum'

class DeputadoFederal extends Politico {

    bancada: string;

    constructor(
        nome: string,
        partido: string,
        esfera: Esfera,
        remuneracao: number,
        poder: Poder,
        projetos: string[],
        nomeTrabalho: string,
        enderecoTrabalho: string,
        bancada: string
    ) {
      super(nome,partido,esfera,remuneracao,poder,projetos,nomeTrabalho,enderecoTrabalho)
        this.bancada = bancada
    }
 votarPEC(nomePEC:string,aprovada:boolean): string {
    if(aprovada) {
        return `A PEC ${nomePEC} foi aprovada pelo Deputado`
    }

    else {
         return `A PEC ${nomePEC} não foi aprovada pelo Deputado`
    }
 }

criarCPI(nomeCPI: string, data: string, local: string): string {
    return `A CPI ${nomeCPI} foi criada em ${data}, no local ${local}, pelo Deputado Federal.`
}

votarPPA(nomePPA: string, aprovado:boolean): string {
    if(aprovado) {
        return `O deputado ${this.nome} aprovou a ${nomePPA}`
    }

    else {
        return `O deputado ${this.nome} não aprovou a ${nomePPA}`
    }
}


votarLDO(nomeLDO: string, aprovado:boolean): string {
    if(aprovado) {
        return `O deputado ${this.nome} aprovou a ${nomeLDO}`
    }

    else {
        return `O deputado ${this.nome} não aprovou a ${nomeLDO}`
    }
}

votarLOA(nomeLOA: string, aprovado:boolean): string {
    if(aprovado) {
        return `O deputado ${this.nome} aprovou a ${nomeLOA}`
    }

    else {
        return `O deputado ${this.nome} não aprovou a ${nomeLOA}`
    }
}
proporLeiComplementar(leiComplementar:string): string {
   return `O deputado ${this.nome} propôs a lei complementar ${leiComplementar}.`
}

exercerMandato(): string {
     return `O Deputado Federal exerce seu mandato por meio da elaboração de leis sobre o Código Penal, o Código Tributário e as leis trabalhistas, além da fiscalização do Presidente da República.`
}
}