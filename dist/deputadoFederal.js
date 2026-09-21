"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeputadoFederal = void 0;
const Politico_1 = require("./Politico");
class DeputadoFederal extends Politico_1.Politico {
    bancada;
    constructor(nome, partido, esfera, remuneracao, poder, projetos, nomeTrabalho, enderecoTrabalho, bancada) {
        super(nome, partido, esfera, remuneracao, poder, projetos, nomeTrabalho, enderecoTrabalho);
        this.bancada = bancada;
    }
    votarPEC(nomePEC, aprovada) {
        if (aprovada) {
            return `A PEC ${nomePEC} foi aprovada pelo Deputado`;
        }
        else {
            return `A PEC ${nomePEC} não foi aprovada pelo Deputado`;
        }
    }
    criarCPI(nomeCPI, data, local) {
        return `A CPI ${nomeCPI} foi criada em ${data}, no local ${local}, pelo Deputado Federal.`;
    }
    votarPPA(nomePPA, aprovado) {
        if (aprovado) {
            return `O deputado ${this.getNome()} aprovou a ${nomePPA}`;
        }
        else {
            return `O deputado ${this.getNome()} não aprovou a ${nomePPA}`;
        }
    }
    votarLDO(nomeLDO, aprovado) {
        if (aprovado) {
            return `O deputado ${this.getNome()} aprovou a ${nomeLDO}`;
        }
        else {
            return `O deputado ${this.getNome()} não aprovou a ${nomeLDO}`;
        }
    }
    votarLOA(nomeLOA, aprovado) {
        if (aprovado) {
            return `O deputado ${this.getNome()} aprovou a ${nomeLOA}`;
        }
        else {
            return `O deputado Federal ${this.getNome()} não aprovou a ${nomeLOA}`;
        }
    }
    proporLeiComplementar(leiComplementar) {
        return `O deputado Federal ${this.getNome()} propôs a lei complementar ${leiComplementar}.`;
    }
    exercerMandato() {
        return `O Deputado Federal ${this.getNome()} exerce seu mandato por meio da elaboração de leis sobre o Código Penal, o Código Tributário e as leis trabalhistas, além da fiscalização do Presidente da República.`;
    }
    getBancada() {
        return this.bancada;
    }
}
exports.DeputadoFederal = DeputadoFederal;
//# sourceMappingURL=deputadoFederal.js.map