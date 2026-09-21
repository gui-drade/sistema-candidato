import { Politico } from './Politico';
import { Esfera, Poder } from './Enum';
export declare class DeputadoFederal extends Politico {
    private bancada;
    constructor(nome: string, partido: string, esfera: Esfera, remuneracao: number, poder: Poder, projetos: string[], nomeTrabalho: string, enderecoTrabalho: string, bancada: string);
    votarPEC(nomePEC: string, aprovada: boolean): string;
    criarCPI(nomeCPI: string, data: string, local: string): string;
    votarPPA(nomePPA: string, aprovado: boolean): string;
    votarLDO(nomeLDO: string, aprovado: boolean): string;
    votarLOA(nomeLOA: string, aprovado: boolean): string;
    proporLeiComplementar(leiComplementar: string): string;
    exercerMandato(): string;
    getBancada(): string;
}
//# sourceMappingURL=deputadoFederal.d.ts.map