import {Politico} from './Politico'
import {Esfera,Poder} from './Enum'

class Presidente extends Politico {
    ministros:string[];



    constructor(ministros:string[],nome: string, partido:string, esfera:Esfera,remuneracao: number,poder: Poder, projetos:string[],nomeTrabalho: string, enderecoTrabalho: string) {
        super(nome,partido,esfera,remuneracao,poder,projetos,nomeTrabalho,enderecoTrabalho)
        this.ministros = ministros

    }
}