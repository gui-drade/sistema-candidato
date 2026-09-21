import {Esfera,Poder} from './Enum'

 export abstract class Politico {
  private nome: string;
  private partido: string;
   private esfera: Esfera;
   private poder: Poder;
    private Remuneracao:number;
   private projetos:string[];
   private nomeTrabalho: string;
   private enderecoTrabalho: string;


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


    getNome(): string {
        return this.nome;
    }

    getPartido(): string {
        return this.partido;
    }

    getEsfera(): Esfera {
        return this.esfera;
    }

    getPoder(): Poder {
        return this.poder;
    }

    getNomeTrabalho(): string {
        return this.nomeTrabalho;
    }

    getEnderecoTrabalho(): string {
        return this.enderecoTrabalho;
    }

    getRemuneracao(): number {
        return this.Remuneracao;
    }

    getProjetos(): string[] {
        return [...this.projetos]
    }

    adicionarProjeto(projeto: string): void {
        this.projetos.push(projeto);
    }

    alterarRemuneracao(novaRemuneracao: number): void {
        this.Remuneracao = novaRemuneracao;
    }


}