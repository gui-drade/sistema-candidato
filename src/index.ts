import { Esfera, Poder } from './Enum';

import { Presidente } from './presidente';
import { Governador } from './governador';
import { DeputadoFederal } from './deputadoFederal';
import { DeputadoEstadual } from './deputadoEstadual';
import { Senador } from './Senador';



// PRESIDENTE DA REPÚBLICA ATUAL


const presidente = new Presidente(
    "Luiz Inácio Lula da Silva",
    "PT",
    Esfera.Federal,
    46366.19,
    Poder.Executivo,
    [
        "Projeto de desenvolvimento nacional",
        "Projeto de infraestrutura nacional"
    ],
    "Palácio do Planalto",
    "Praça dos Três Poderes, Brasília - DF",
    [
        "Fernando Haddad",
        "José Múcio Monteiro",
        "Rui Costa",
        "Simone Tebet",
        "Camilo Santana"
    ]
);



// Governadores
// Pernambuco e São Paulo


const governadorPernambuco = new Governador(
    "Raquel Lyra",
    "PSD",
    Esfera.Estadual,
    30000,
    Poder.Executivo,
    [
        "Projeto de desenvolvimento de Pernambuco",
        "Projeto de infraestrutura estadual"
    ],
    "Palácio do Campo das Princesas",
    "Praça da República, s/n, Santo Antônio, Recife - PE",
    [
        "Secretário de Educação",
        "Secretário de Saúde",
        "Secretário de Segurança Pública"
    ],
    "Pernambuco"
);

const governadorSaoPaulo = new Governador(
    "Tarcísio de Freitas",
    "Republicanos",
    Esfera.Estadual,
    30000,
    Poder.Executivo,
    [
        "Projeto de infraestrutura de São Paulo",
        "Projeto de desenvolvimento estadual"
    ],
    "Palácio dos Bandeirantes",
    "Av. Morumbi, 4500, Morumbi, São Paulo - SP",
    [
        "Secretário de Educação",
        "Secretário de Saúde",
        "Secretário de Segurança Pública"
    ],
    "São Paulo"
);



// Deputados Federais
// 3 de Pernambuco + 2 de São Paulo


const deputadoFederalPE1 = new DeputadoFederal(
    "Lucas Ramos",
    "PSB",
    Esfera.Federal,
    46366.19,
    Poder.Legislativo,
    ["Projeto de desenvolvimento regional"],
    "Câmara dos Deputados",
    "Praça dos Três Poderes, Brasília - DF",
    "Bancada de Pernambuco"
);

const deputadoFederalPE2 = new DeputadoFederal(
    "Fernando Monteiro",
    "PSD",
    Esfera.Federal,
    46366.19,
    Poder.Legislativo,
    ["Projeto de infraestrutura"],
    "Câmara dos Deputados",
    "Praça dos Três Poderes, Brasília - DF",
    "Bancada de Pernambuco"
);

const deputadoFederalPE3 = new DeputadoFederal(
    "Carlos Veras",
    "PT",
    Esfera.Federal,
    46366.19,
    Poder.Legislativo,
    ["Projeto de desenvolvimento social"],
    "Câmara dos Deputados",
    "Praça dos Três Poderes, Brasília - DF",
    "Bancada de Pernambuco"
);

const deputadoFederalSP1 = new DeputadoFederal(
    "Antonio Carlos Rodrigues",
    "PODE",
    Esfera.Federal,
    46366.19,
    Poder.Legislativo,
    ["Projeto de infraestrutura nacional"],
    "Câmara dos Deputados",
    "Praça dos Três Poderes, Brasília - DF",
    "Bancada de São Paulo"
);

const deputadoFederalSP2 = new DeputadoFederal(
    "Alencar Santana",
    "PT",
    Esfera.Federal,
    46366.19,
    Poder.Legislativo,
    ["Projeto de desenvolvimento social"],
    "Câmara dos Deputados",
    "Praça dos Três Poderes, Brasília - DF",
    "Bancada de São Paulo"
);



// Deputados Estaduais
// 3 de Pernambuco + 2 de São Paulo


const deputadoEstadualPE1 = new DeputadoEstadual(
    "Cayo Albino",
    "PSB",
    Esfera.Estadual,
    34000,
    Poder.Legislativo,
    ["Projeto de desenvolvimento estadual"],
    "Assembleia Legislativa de Pernambuco",
    "Rua da União, 439, Boa Vista, Recife - PE",
    "Pernambuco",
    ["Comissão de Finanças"]
);

const deputadoEstadualPE2 = new DeputadoEstadual(
    "Junior Matuto",
    "Republicanos",
    Esfera.Estadual,
    34000,
    Poder.Legislativo,
    ["Projeto de desenvolvimento regional"],
    "Assembleia Legislativa de Pernambuco",
    "Rua da União, 439, Boa Vista, Recife - PE",
    "Pernambuco",
    ["Comissão de Administração Pública"]
);

const deputadoEstadualPE3 = new DeputadoEstadual(
    "Edson Vieira",
    "Podemos",
    Esfera.Estadual,
    34000,
    Poder.Legislativo,
    ["Projeto de desenvolvimento econômico"],
    "Assembleia Legislativa de Pernambuco",
    "Rua da União, 439, Boa Vista, Recife - PE",
    "Pernambuco",
    ["Comissão de Desenvolvimento Econômico"]
);

const deputadoEstadualSP1 = new DeputadoEstadual(
    "Carlos Giannazi",
    "PSOL",
    Esfera.Estadual,
    34000,
    Poder.Legislativo,
    ["Projeto de educação pública"],
    "Assembleia Legislativa de São Paulo",
    "Av. Pedro Álvares Cabral, 201, São Paulo - SP",
    "São Paulo",
    ["Comissão de Educação"]
);

const deputadoEstadualSP2 = new DeputadoEstadual(
    "Eduardo Suplicy",
    "PT",
    Esfera.Estadual,
    34000,
    Poder.Legislativo,
    ["Projeto de desenvolvimento social"],
    "Assembleia Legislativa de São Paulo",
    "Av. Pedro Álvares Cabral, 201, São Paulo - SP",
    "São Paulo",
    ["Comissão de Direitos Humanos"]
);



// Senadores
// 2 de Pernambuco + 1 de São Paulo


const senadorPE1 = new Senador(
    "Fernando Dueire",
    "PSD",
    Esfera.Federal,
    46366.19,
    Poder.Legislativo,
    ["Projeto de desenvolvimento de Pernambuco"],
    "Senado Federal",
    "Praça dos Três Poderes, Brasília - DF",
    "Pernambuco",
    2019
);

const senadorPE2 = new Senador(
    "Humberto Costa",
    "PT",
    Esfera.Federal,
    46366.19,
    Poder.Legislativo,
    ["Projeto de desenvolvimento social"],
    "Senado Federal",
    "Praça dos Três Poderes, Brasília - DF",
    "Pernambuco",
    2019
);

const senadorSP = new Senador(
    "Astronauta Marcos Pontes",
    "PL",
    Esfera.Federal,
    46366.19,
    Poder.Legislativo,
    ["Projeto de desenvolvimento tecnológico"],
    "Senado Federal",
    "Praça dos Três Poderes, Brasília - DF",
    "São Paulo",
    2023
);

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