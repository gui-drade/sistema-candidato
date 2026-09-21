import {Politico} from './Politico'
import {Esfera,Poder} from './Enum'

class Governador extends Politico {
   secretarios: string[];
   nomeEstado: string;


   constructor(nome: string, partido:string, esfera:Esfera,remuneracao: number,poder: Poder, projetos:string[],nomeTrabalho: string, enderecoTrabalho: string, secretarios: string[], nomeEstado: string) {
    super(nome,partido,esfera,remuneracao,poder,projetos,nomeTrabalho,enderecoTrabalho)
      this.secretarios = secretarios;
      this.nomeEstado = nomeEstado

   }

   decretarEstadoCalamidade(motivo:string): string {
    return `O Governador declarou estado de calamidade devido a ${motivo}`
   }

   enviarPEC(nomePEC:string) {
   return `O Governador encaminhou a Proposta de Emenda à Constituição (PEC) ${nomePEC}.`

   }

   gerirPM(): string {
    return  `O Governador exerce a gestão e o acompanhamento das atividades da Polícia Militar.`
   }

   administrarRodovias(): string {
    return `O Governador realiza a administração e a manutenção das rodovias estaduais.`
}

coordenarEducacao(): string {
    return "O Governador coordena as políticas e ações relacionadas à educação pública estadual.";
}

coordenarSaude(): string {
    return "O Governador coordena as políticas e ações relacionadas à saúde pública estadual.";
}

elaborarPPA(PPA: string): string {
    return `O Governador elaborou o Plano Plurianual (PPA): ${PPA}.`;
}

elaborarLDO(LDO: string): string {
    return `O Governador elaborou a Lei de Diretrizes Orçamentárias (LDO): ${LDO}.`;
}

elaborarLOA(LOA: string): string {
    return `O Governador elaborou a Lei Orçamentária Anual (LOA): ${LOA}.`;
}

exercerMandato(): string {
    return `O Governador exerce seu mandato por meio das seguintes atribuições:
- Sancionar leis estaduais;
- Vetar leis estaduais;
- Decretar estado de calamidade;
- Enviar PEC à Assembleia Legislativa.`
}
   }
