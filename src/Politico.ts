import {Esfera,Poder} from './Enum'

 export abstract class Politico {
    nome: string;
    partido: string;
    esfera: Esfera;
    poder: Poder;
    Remuneracao:number;
    projetos:string[];
    nomeTrabalho: string;
    enderecoTrabalho: string;


  constructor(nome: string, partido:string, esfera:Esfera,remuneracao: number,poder: Poder, projetos:string[],nomeTrabalho: string, enderecoTrabalho: string) {
    this.nome = nome;
    this.partido = partido;
    this.esfera = esfera;
    this.poder = poder
    this.Remuneracao = remuneracao;
    this.projetos = projetos;
    this.nomeTrabalho = nomeTrabalho;
    this.enderecoTrabalho = enderecoTrabalho;
  }

   abstract exercerMandato(): string;

}