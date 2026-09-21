"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeputadoEstadual = void 0;
const Politico_1 = require("./Politico");
class DeputadoEstadual extends Politico_1.Politico {
    nomeEstado;
    comissoes;
    constructor(nome, partido, esfera, remuneracao, poder, projetos, nomeTrabalho, enderecoTrabalho, nomeEstado, comissoes) {
        super(nome, partido, esfera, remuneracao, poder, projetos, nomeTrabalho, enderecoTrabalho);
        this.nomeEstado = nomeEstado;
        if (comissoes.length === 0) {
            throw new Error("O Deputado Estadual deve participar de pelo menos uma comissão.");
        }
        this.comissoes = comissoes;
    }
    exercerMandato() {
        return 'legislar sobre assuntos de interesse estadual e fiscalizar o Governador.';
    }
    votarPPA(nomePPA, aprovado) {
        if (aprovado) {
            return `O Deputado Estadual ${this.getNome()} aprovou o PPA estadual ${nomePPA}.`;
        }
        else {
            return `O Deputado Estadual ${this.getNome()} não aprovou o PPA estadual ${nomePPA}.`;
        }
    }
    votarLDO(nomeLDO, aprovado) {
        if (aprovado) {
            return `O Deputado Estadual ${this.getNome()} aprovou a LDO estadual ${nomeLDO}.`;
        }
        else {
            return `O Deputado Estadual ${this.getNome()} não aprovou a LDO estadual ${nomeLDO}.`;
        }
    }
    votarLOA(nomeLOA, aprovado) {
        if (aprovado) {
            return `O Deputado Estadual ${this.getNome()} aprovou a LOA estadual ${nomeLOA}.`;
        }
        else {
            return `O Deputado Estadual ${this.getNome()} não aprovou a LOA estadual ${nomeLOA}.`;
        }
    }
    proporEmendaConstitucional(emendaConstitucional) {
        return `O Deputado ${this.getNome()} propôs a emenda constitucional ${emendaConstitucional}`;
    }
    criarCPI(nomeCPI, data, local) {
        return `A CPI ${nomeCPI} foi criada em ${data}, no local ${local}, pelo Deputado Estadual.`;
    }
    getNomeEstado() {
        return this.nomeEstado;
    }
    getComissoes() {
        return [...this.comissoes];
    }
    adicionarComissao(comissao) {
        this.comissoes.push(comissao);
    }
}
exports.DeputadoEstadual = DeputadoEstadual;
//# sourceMappingURL=deputadoEstadual.js.map