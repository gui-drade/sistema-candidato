"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presidente = void 0;
const Politico_1 = require("./Politico");
class Presidente extends Politico_1.Politico {
    ministros;
    constructor(nome, partido, esfera, remuneracao, poder, projetos, nomeTrabalho, enderecoTrabalho, ministros) {
        super(nome, partido, esfera, remuneracao, poder, projetos, nomeTrabalho, enderecoTrabalho);
        this.ministros = ministros;
    }
    comandarForcasArmadas() {
        return "Comanda forças armadas";
    }
    exercerMandato() {
        return "O presidente exerce o mandato propondo, sancionando ou vetando leis e editando medidas provisórias.";
    }
    nomearMinistro(ministroNovo) {
        this.ministros.push(ministroNovo);
        return 'O presidente nomeou ' + ministroNovo + ' como ministro';
    }
    exonerarMinistro(ministroExonerado) {
        if (this.ministros.length === 0) {
            return 'não há ministro para ser exonerado';
        }
        const existeMinistro = this.ministros.some(ministro => ministro === ministroExonerado);
        if (existeMinistro === true) {
            this.ministros = this.ministros.filter(ministro => ministro !== ministroExonerado);
            return `O ministro ${ministroExonerado} foi exonerado`;
        }
        else {
            return `O ministro ${ministroExonerado} não pode ser encontrado`;
        }
    }
    representarPais(evento) {
        return `O presidente ${this.getNome()} foi representar o pais em: ` + evento;
    }
    elaborarPPA(PPA) {
        return `O presidente elaborou um PPA ${PPA}`;
    }
    elaborarLDO(LDO) {
        return `O presidente elaborou um LDO ${LDO}`;
    }
    elaborarLOA(LOA) {
        return `O presidente elaborou um LOA ${LOA}`;
    }
    getMinistros() {
        return [...this.ministros];
    }
}
exports.Presidente = Presidente;
//# sourceMappingURL=presidente.js.map