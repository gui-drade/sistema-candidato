"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enum_1 = require("./Enum");
const presidente_1 = require("./presidente");
const governador_1 = require("./governador");
const deputadoFederal_1 = require("./deputadoFederal");
const deputadoEstadual_1 = require("./deputadoEstadual");
const Senador_1 = require("./Senador");
// PRESIDENTE DA REPÚBLICA ATUAL
const presidente = new presidente_1.Presidente("Luiz Inácio Lula da Silva", "PT", Enum_1.Esfera.Federal, 46366.19, Enum_1.Poder.Executivo, [
    "Projeto de desenvolvimento nacional",
    "Projeto de infraestrutura nacional"
], "Palácio do Planalto", "Praça dos Três Poderes, Brasília - DF", [
    "Fernando Haddad",
    "José Múcio Monteiro",
    "Rui Costa",
    "Simone Tebet",
    "Camilo Santana"
]);
// Governadores
// Pernambuco e São Paulo
const governadorPernambuco = new governador_1.Governador("Raquel Lyra", "PSD", Enum_1.Esfera.Estadual, 30000, Enum_1.Poder.Executivo, [
    "Projeto de desenvolvimento de Pernambuco",
    "Projeto de infraestrutura estadual"
], "Palácio do Campo das Princesas", "Praça da República, s/n, Santo Antônio, Recife - PE", [
    "Secretário de Educação",
    "Secretário de Saúde",
    "Secretário de Segurança Pública"
], "Pernambuco");
const governadorSaoPaulo = new governador_1.Governador("Tarcísio de Freitas", "Republicanos", Enum_1.Esfera.Estadual, 30000, Enum_1.Poder.Executivo, [
    "Projeto de infraestrutura de São Paulo",
    "Projeto de desenvolvimento estadual"
], "Palácio dos Bandeirantes", "Av. Morumbi, 4500, Morumbi, São Paulo - SP", [
    "Secretário de Educação",
    "Secretário de Saúde",
    "Secretário de Segurança Pública"
], "São Paulo");
// Deputados Federais
// 3 de Pernambuco + 2 de São Paulo
const deputadoFederalPE1 = new deputadoFederal_1.DeputadoFederal("Lucas Ramos", "PSB", Enum_1.Esfera.Federal, 46366.19, Enum_1.Poder.Legislativo, ["Projeto de desenvolvimento regional"], "Câmara dos Deputados", "Praça dos Três Poderes, Brasília - DF", "Bancada de Pernambuco");
const deputadoFederalPE2 = new deputadoFederal_1.DeputadoFederal("Fernando Monteiro", "PSD", Enum_1.Esfera.Federal, 46366.19, Enum_1.Poder.Legislativo, ["Projeto de infraestrutura"], "Câmara dos Deputados", "Praça dos Três Poderes, Brasília - DF", "Bancada de Pernambuco");
const deputadoFederalPE3 = new deputadoFederal_1.DeputadoFederal("Carlos Veras", "PT", Enum_1.Esfera.Federal, 46366.19, Enum_1.Poder.Legislativo, ["Projeto de desenvolvimento social"], "Câmara dos Deputados", "Praça dos Três Poderes, Brasília - DF", "Bancada de Pernambuco");
const deputadoFederalSP1 = new deputadoFederal_1.DeputadoFederal("Antonio Carlos Rodrigues", "PODE", Enum_1.Esfera.Federal, 46366.19, Enum_1.Poder.Legislativo, ["Projeto de infraestrutura nacional"], "Câmara dos Deputados", "Praça dos Três Poderes, Brasília - DF", "Bancada de São Paulo");
const deputadoFederalSP2 = new deputadoFederal_1.DeputadoFederal("Alencar Santana", "PT", Enum_1.Esfera.Federal, 46366.19, Enum_1.Poder.Legislativo, ["Projeto de desenvolvimento social"], "Câmara dos Deputados", "Praça dos Três Poderes, Brasília - DF", "Bancada de São Paulo");
// Deputados Estaduais
// 3 de Pernambuco + 2 de São Paulo
const deputadoEstadualPE1 = new deputadoEstadual_1.DeputadoEstadual("Cayo Albino", "PSB", Enum_1.Esfera.Estadual, 34000, Enum_1.Poder.Legislativo, ["Projeto de desenvolvimento estadual"], "Assembleia Legislativa de Pernambuco", "Rua da União, 439, Boa Vista, Recife - PE", "Pernambuco", ["Comissão de Finanças"]);
const deputadoEstadualPE2 = new deputadoEstadual_1.DeputadoEstadual("Junior Matuto", "Republicanos", Enum_1.Esfera.Estadual, 34000, Enum_1.Poder.Legislativo, ["Projeto de desenvolvimento regional"], "Assembleia Legislativa de Pernambuco", "Rua da União, 439, Boa Vista, Recife - PE", "Pernambuco", ["Comissão de Administração Pública"]);
const deputadoEstadualPE3 = new deputadoEstadual_1.DeputadoEstadual("Edson Vieira", "Podemos", Enum_1.Esfera.Estadual, 34000, Enum_1.Poder.Legislativo, ["Projeto de desenvolvimento econômico"], "Assembleia Legislativa de Pernambuco", "Rua da União, 439, Boa Vista, Recife - PE", "Pernambuco", ["Comissão de Desenvolvimento Econômico"]);
const deputadoEstadualSP1 = new deputadoEstadual_1.DeputadoEstadual("Carlos Giannazi", "PSOL", Enum_1.Esfera.Estadual, 34000, Enum_1.Poder.Legislativo, ["Projeto de educação pública"], "Assembleia Legislativa de São Paulo", "Av. Pedro Álvares Cabral, 201, São Paulo - SP", "São Paulo", ["Comissão de Educação"]);
const deputadoEstadualSP2 = new deputadoEstadual_1.DeputadoEstadual("Eduardo Suplicy", "PT", Enum_1.Esfera.Estadual, 34000, Enum_1.Poder.Legislativo, ["Projeto de desenvolvimento social"], "Assembleia Legislativa de São Paulo", "Av. Pedro Álvares Cabral, 201, São Paulo - SP", "São Paulo", ["Comissão de Direitos Humanos"]);
// Senadores
// 2 de Pernambuco + 1 de São Paulo
const senadorPE1 = new Senador_1.Senador("Fernando Dueire", "PSD", Enum_1.Esfera.Federal, 46366.19, Enum_1.Poder.Legislativo, ["Projeto de desenvolvimento de Pernambuco"], "Senado Federal", "Praça dos Três Poderes, Brasília - DF", "Pernambuco", 2019);
const senadorPE2 = new Senador_1.Senador("Humberto Costa", "PT", Enum_1.Esfera.Federal, 46366.19, Enum_1.Poder.Legislativo, ["Projeto de desenvolvimento social"], "Senado Federal", "Praça dos Três Poderes, Brasília - DF", "Pernambuco", 2019);
const senadorSP = new Senador_1.Senador("Astronauta Marcos Pontes", "PL", Enum_1.Esfera.Federal, 46366.19, Enum_1.Poder.Legislativo, ["Projeto de desenvolvimento tecnológico"], "Senado Federal", "Praça dos Três Poderes, Brasília - DF", "São Paulo", 2023);
// ======================================================
// TESTANDO O POLIMORFISMO
// ======================================================
const politicos = [
    presidente,
    governadorPernambuco,
    governadorSaoPaulo,
    deputadoFederalPE1,
    deputadoFederalPE2,
    deputadoFederalPE3,
    deputadoFederalSP1,
    deputadoFederalSP2,
    deputadoEstadualPE1,
    deputadoEstadualPE2,
    deputadoEstadualPE3,
    deputadoEstadualSP1,
    deputadoEstadualSP2,
    senadorPE1,
    senadorPE2,
    senadorSP
];
for (const politico of politicos) {
    console.log(politico.exercerMandato());
}
//# sourceMappingURL=index.js.map