import {Politico} from './Politico'
import {Esfera,Poder} from './Enum'


class Senador extends Politico {
    nomeEstado: string;
    anoEleito:number;

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
            return ` A autoridade ${autoridade} não foi aprovada pelo senado federal.`
        }
    }
   

}