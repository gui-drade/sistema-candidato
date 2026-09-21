import {Politico} from './Politico'
import {Esfera,Poder} from './Enum'


class DeputadoEstadual extends Politico {
    nomeEstado: string;
    comissoes:string[];

    constructor(nome: string, partido:string, esfera:Esfera,remuneracao: number,poder: Poder, projetos:string[],nomeTrabalho: string, enderecoTrabalho: string,nomeEstado:string,comissoes:string[]){
        super(nome,partido,esfera,remuneracao,poder,projetos,nomeTrabalho,enderecoTrabalho)

        this.nomeEstado = nomeEstado
        this.comissoes = comissoes
    }

    
}