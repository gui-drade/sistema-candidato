import { Politico } from './Politico';
import { Esfera, Poder } from './Enum';
export declare class Senador extends Politico {
    private nomeEstado;
    private anoEleito;
    constructor(nome: string, partido: string, esfera: Esfera, remuneracao: number, poder: Poder, projetos: string[], nomeTrabalho: string, enderecoTrabalho: string, nomeEstado: string, anoEleito: number);
    aprovarAutoridade(autoridade: string, autorizado: boolean): string;
    julgarCrimes(crime: string, condenado: boolean): string;
    representarEstado(): string;
    exercerMandato(): string;
    getNomeEstado(): string;
    getAnoEleito(): number;
}
//# sourceMappingURL=Senador.d.ts.map