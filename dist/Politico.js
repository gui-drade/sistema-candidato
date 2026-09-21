"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Politico = void 0;
class Politico {
    nome;
    partido;
    esfera;
    poder;
    Remuneracao;
    projetos;
    nomeTrabalho;
    enderecoTrabalho;
    constructor(nome, partido, esfera, remuneracao, poder, projetos, nomeTrabalho, enderecoTrabalho) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.Remuneracao = remuneracao;
        this.projetos = projetos;
        this.nomeTrabalho = nomeTrabalho;
        this.enderecoTrabalho = enderecoTrabalho;
    }
    getNome() {
        return this.nome;
    }
    getPartido() {
        return this.partido;
    }
    getEsfera() {
        return this.esfera;
    }
    getPoder() {
        return this.poder;
    }
    getNomeTrabalho() {
        return this.nomeTrabalho;
    }
    getEnderecoTrabalho() {
        return this.enderecoTrabalho;
    }
    getRemuneracao() {
        return this.Remuneracao;
    }
    getProjetos() {
        return [...this.projetos];
    }
    adicionarProjeto(projeto) {
        this.projetos.push(projeto);
    }
    alterarRemuneracao(novaRemuneracao) {
        this.Remuneracao = novaRemuneracao;
    }
}
exports.Politico = Politico;
//# sourceMappingURL=Politico.js.map