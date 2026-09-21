import { Esfera, Poder } from './Enum';
export declare abstract class Politico {
    private nome;
    private partido;
    private esfera;
    private poder;
    private Remuneracao;
    private projetos;
    private nomeTrabalho;
    private enderecoTrabalho;
    constructor(nome: string, partido: string, esfera: Esfera, remuneracao: number, poder: Poder, projetos: string[], nomeTrabalho: string, enderecoTrabalho: string);
    abstract exercerMandato(): string;
    getNome(): string;
    getPartido(): string;
    getEsfera(): Esfera;
    getPoder(): Poder;
    getNomeTrabalho(): string;
    getEnderecoTrabalho(): string;
    getRemuneracao(): number;
    getProjetos(): string[];
    adicionarProjeto(projeto: string): void;
    alterarRemuneracao(novaRemuneracao: number): void;
}
//# sourceMappingURL=Politico.d.ts.map