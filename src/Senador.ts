import {Politico} from './Politico'
import {Esfera,Poder} from './Enum'


export class Senador extends Politico {
    private nomeEstado: string;
    private anoEleito:number;

    constructor(nome: string, partido:string, esfera:Esfera,remuneracao: number,poder: Poder, projetos:string[],nomeTrabalho: string, enderecoTrabalho: string, nomeEstado:string, anoEleito:number){
        super(nome,partido,esfera,remuneracao,poder,projetos,nomeTrabalho,enderecoTrabalho)
        this.nomeEstado = nomeEstado;
        this.anoEleito = anoEleito;
    }

    aprovarAutoridade(autoridade:string, autorizado:boolean): string {
        if(autorizado) {
            return `A autoridade ${autoridade} foi aprovada pelo senado federal.`
        }

        else {
            return `A autoridade ${autoridade} não foi aprovada pelo senado federal.`
        }
    }

    julgarCrimes(crime:string, condenado:boolean): string {
        if(condenado) {
            return `O crime ${crime} foi julgado e o réu foi condenado pelo Senado Federal`
        }
        else {
             return `O crime ${crime} foi julgado e o réu não foi condenado pelo Senado Federal`
        }
    }

    representarEstado(): string {
    return `O Senador representa os interesses do Estado de ${this.nomeEstado}.`
}

exercerMandato(): string {
    return `O Senador exerce seu mandato por meio da sabatina e aprovação de autoridades, da elaboração de leis federais e da autorização de operações financeiras externas.`
}

 getNomeEstado(): string {
        return this.nomeEstado;
    }

    getAnoEleito(): number {
        return this.anoEleito;
    }
   

}