import { Politico } from './Politico';
import { Esfera, Poder } from './Enum';
export declare class DeputadoEstadual extends Politico {
    private nomeEstado;
    private comissoes;
    constructor(nome: string, partido: string, esfera: Esfera, remuneracao: number, poder: Poder, projetos: string[], nomeTrabalho: string, enderecoTrabalho: string, nomeEstado: string, comissoes: string[]);
    exercerMandato(): string;
    votarPPA(nomePPA: string, aprovado: boolean): string;
    votarLDO(nomeLDO: string, aprovado: boolean): string;
    votarLOA(nomeLOA: string, aprovado: boolean): string;
    proporEmendaConstitucional(emendaConstitucional: string): string;
    criarCPI(nomeCPI: string, data: string, local: string): string;
    getNomeEstado(): string;
    getComissoes(): string[];
    adicionarComissao(comissao: string): void;
}
//# sourceMappingURL=deputadoEstadual.d.ts.map