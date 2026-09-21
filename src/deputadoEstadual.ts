import {Politico} from './Politico'
import {Esfera,Poder} from './Enum'


class DeputadoEstadual extends Politico {
    public nomeEstado: string;
    public comissoes:string[];

    constructor(nome: string, partido:string, esfera:Esfera,remuneracao: number,poder: Poder, projetos:string[],nomeTrabalho: string, enderecoTrabalho: string,nomeEstado:string,comissoes:string[]){
        super(nome,partido,esfera,remuneracao,poder,projetos,nomeTrabalho,enderecoTrabalho)

        this.nomeEstado = nomeEstado
        if(comissoes.length === 0) {
            throw new Error("O Deputado Estadual deve participar de pelo menos uma comissão.")
        }
        this.comissoes = comissoes
        
    }

    exercerMandato():string {
        return 'legislar sobre assuntos de interesse estadual e fiscalizar o Governador.'
    }


    votarPPA(nomePPA: string, aprovado: boolean): string {
    if (aprovado) {
        return `O Deputado Estadual ${this.nome} aprovou o PPA estadual ${nomePPA}.`
    } else {
        return `O Deputado Estadual ${this.nome} não aprovou o PPA estadual ${nomePPA}.`
    }
}

votarLDO(nomeLDO: string, aprovado: boolean): string {
    if (aprovado) {
        return `O Deputado Estadual ${this.nome} aprovou a LDO estadual ${nomeLDO}.`
    } else {
        return `O Deputado Estadual ${this.nome} não aprovou a LDO estadual ${nomeLDO}.`
    }
}

votarLOA(nomeLOA: string, aprovado: boolean): string {
    if (aprovado) {
        return `O Deputado Estadual ${this.nome} aprovou a LOA estadual ${nomeLOA}.`
    } else {
        return `O Deputado Estadual ${this.nome} não aprovou a LOA estadual ${nomeLOA}.`
    }
}

proporEmendaConstitucional(EmendaConstitucional:string): string {
     return `O Deputado ${this.nome} propôs a emenda constitucional ${EmendaConstitucional}`
}

criarCPI(nomeCPI: string, data: string, local: string): string {
    return `A CPI ${nomeCPI} foi criada em ${data}, no local ${local}, pelo Deputado Estadual.`
}
}