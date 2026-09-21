import {Politico} from './Politico'
import {Esfera,Poder} from './Enum'

class Presidente extends Politico {
    ministros:string[];



    constructor(nome: string, partido:string, esfera:Esfera,remuneracao: number,poder: Poder, projetos:string[],nomeTrabalho: string, enderecoTrabalho: string,ministros:string[]) {
        super(nome,partido,esfera,remuneracao,poder,projetos,nomeTrabalho,enderecoTrabalho)
        this.ministros = ministros

    }

   comandarForcasArmadas(): string {
    return "Comanda forças armadas"
   }

   exercerMandato(): string {
    return "O presidente exerce o mandato propondo, sancionando ou vetando leis e editando medidas provisórias."
   }

   nomearMinistro(ministroNovo: string): string {
           this.ministros.push(ministroNovo)
           return 'O presidente nomeou ' + ministroNovo + ' como ministro';

   }
   exonerarMinistro(ministroExonerado:string): string {
    if (this.ministros.length === 0) {
       return 'não há ministro para ser exonerado'
      
    }
      const existeMinistro = this.ministros.some(
        ministro => ministro === ministroExonerado
      )
       if(existeMinistro === true) {
        this.ministros = this.ministros.filter(ministro => ministro !== ministroExonerado)
        return `O ministro ${ministroExonerado} foi exonerado`
      }

      else {
        return `O ministro ${ministroExonerado} não pode ser encontrado`
      }

   
   }
   representarPais(evento:string): string {
    return  `O presidente ${this.nome} foi representar o pais em: ` + evento
   }

   elaborarPPA(PPA: string): string {
    return `O presidente elaborou um PPA ${PPA}`
   }

    elaborarLDO(LDO: string): string {
    return `O presidente elaborou um LDO ${LDO}`
   }

    elaborarLOA(LOA: string): string {
    return `O presidente elaborou um LOA ${LOA}`
   }




}