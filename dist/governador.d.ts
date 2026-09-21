import { Politico } from './Politico';
import { Esfera, Poder } from './Enum';
export declare class Governador extends Politico {
    private secretarios;
    private nomeEstado;
    constructor(nome: string, partido: string, esfera: Esfera, remuneracao: number, poder: Poder, projetos: string[], nomeTrabalho: string, enderecoTrabalho: string, secretarios: string[], nomeEstado: string);
    decretarEstadoCalamidade(motivo: string): string;
    enviarPEC(nomePEC: string): string;
    gerirPM(): string;
    administrarRodovias(): string;
    coordenarEducacao(): string;
    coordenarSaude(): string;
    elaborarPPA(PPA: string): string;
    elaborarLDO(LDO: string): string;
    elaborarLOA(LOA: string): string;
    exercerMandato(): string;
    getSecretarios(): string[];
    getNomeEstado(): string;
}
//# sourceMappingURL=governador.d.ts.map