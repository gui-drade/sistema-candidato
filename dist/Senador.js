"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Senador = void 0;
const Politico_1 = require("./Politico");
class Senador extends Politico_1.Politico {
    nomeEstado;
    anoEleito;
    constructor(nome, partido, esfera, remuneracao, poder, projetos, nomeTrabalho, enderecoTrabalho, nomeEstado, anoEleito) {
        super(nome, partido, esfera, remuneracao, poder, projetos, nomeTrabalho, enderecoTrabalho);
        this.nomeEstado = nomeEstado;
        this.anoEleito = anoEleito;
    }
    aprovarAutoridade(autoridade, autorizado) {
        if (autorizado) {
            return `A autoridade ${autoridade} foi aprovada pelo senado federal.`;
        }
        else {
            return `A autoridade ${autoridade} não foi aprovada pelo senado federal.`;
        }
    }
    julgarCrimes(crime, condenado) {
        if (condenado) {
            return `O crime ${crime} foi julgado e o réu foi condenado pelo Senado Federal`;
        }
        else {
            return `O crime ${crime} foi julgado e o réu não foi condenado pelo Senado Federal`;
        }
    }
    representarEstado() {
        return `O Senador representa os interesses do Estado de ${this.nomeEstado}.`;
    }
    exercerMandato() {
        return `O Senador exerce seu mandato por meio da sabatina e aprovação de autoridades, da elaboração de leis federais e da autorização de operações financeiras externas.`;
    }
    getNomeEstado() {
        return this.nomeEstado;
    }
    getAnoEleito() {
        return this.anoEleito;
    }
}
exports.Senador = Senador;
//# sourceMappingURL=Senador.js.map