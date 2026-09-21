"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Governador = void 0;
const Politico_1 = require("./Politico");
class Governador extends Politico_1.Politico {
    secretarios;
    nomeEstado;
    constructor(nome, partido, esfera, remuneracao, poder, projetos, nomeTrabalho, enderecoTrabalho, secretarios, nomeEstado) {
        super(nome, partido, esfera, remuneracao, poder, projetos, nomeTrabalho, enderecoTrabalho);
        this.secretarios = secretarios;
        this.nomeEstado = nomeEstado;
    }
    decretarEstadoCalamidade(motivo) {
        return `O Governador declarou estado de calamidade devido a ${motivo}`;
    }
    enviarPEC(nomePEC) {
        return `O Governador encaminhou a Proposta de Emenda à Constituição (PEC) ${nomePEC}.`;
    }
    gerirPM() {
        return `O Governador exerce a gestão e o acompanhamento das atividades da Polícia Militar.`;
    }
    administrarRodovias() {
        return `O Governador realiza a administração e a manutenção das rodovias estaduais.`;
    }
    coordenarEducacao() {
        return "O Governador coordena as políticas e ações relacionadas à educação pública estadual.";
    }
    coordenarSaude() {
        return "O Governador coordena as políticas e ações relacionadas à saúde pública estadual.";
    }
    elaborarPPA(PPA) {
        return `O Governador elaborou o Plano Plurianual (PPA): ${PPA}.`;
    }
    elaborarLDO(LDO) {
        return `O Governador elaborou a Lei de Diretrizes Orçamentárias (LDO): ${LDO}.`;
    }
    elaborarLOA(LOA) {
        return `O Governador elaborou a Lei Orçamentária Anual (LOA): ${LOA}.`;
    }
    exercerMandato() {
        return `O Governador exerce seu mandato por meio das seguintes atribuições:
- Sancionar leis estaduais;
- Vetar leis estaduais;
- Decretar estado de calamidade;
- Enviar PEC à Assembleia Legislativa.`;
    }
    getSecretarios() {
        return [...this.secretarios];
    }
    getNomeEstado() {
        return this.nomeEstado;
    }
}
exports.Governador = Governador;
//# sourceMappingURL=governador.js.map