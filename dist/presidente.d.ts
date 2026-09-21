import { Politico } from './Politico';
import { Esfera, Poder } from './Enum';
export declare class Presidente extends Politico {
    private ministros;
    constructor(nome: string, partido: string, esfera: Esfera, remuneracao: number, poder: Poder, projetos: string[], nomeTrabalho: string, enderecoTrabalho: string, ministros: string[]);
    comandarForcasArmadas(): string;
    exercerMandato(): string;
    nomearMinistro(ministroNovo: string): string;
    exonerarMinistro(ministroExonerado: string): string;
    representarPais(evento: string): string;
    elaborarPPA(PPA: string): string;
    elaborarLDO(LDO: string): string;
    elaborarLOA(LOA: string): string;
    getMinistros(): string[];
}
//# sourceMappingURL=presidente.d.ts.map