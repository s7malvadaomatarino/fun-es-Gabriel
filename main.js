const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Nos tempos de hoje, qual corte se encaixa melhor em você.",
        alternativas: [
            {
                texto: "Tradicional",
                afirmacao: " Pela praticidade, cortes mais simples são geralmente mais Fáceis de se usar no dia a dia.",
            },
            {
                texto: "Sofisticado ",
                afirmacao: " Tendencia de moda, algumas pessoas são influenciadas por tendencias atuais e querer experimentar estilos que estão em alta.",
            }
        ]
    },
    {
        enunciado: " quando você corta seu cabelo, custuma se espelhar em outras pessoas.?",
        alternativas: [
            {
                texto: " Sim, busco referencias.",
                afirmacao: "você custuma se espelhar em outras pessoas e assim busca inspirações para realizar seus cortes.",
            },
            {
                texto: " Não, prefiro manter meu proprio estilo, sem referencias.",
                afirmacao: " Você e uma pessoa que prefere manter seu proprio estilo sem buscar referencias em outras pessoas, isso garante a sua autenticidade.",
            }
        ]
    },
    {
        enunciado: "Qual o tipo de cuidado que você tem com o seu cabelo ?",
        alternativas: [
            {
                texto: " Eu sempre uso um shampoo suave e condicionador hidratante, além de fazer hidratações semanais para manter meu cabelo macio e saudável. ",
                afirmacao: " Acredito que a hidratação regular é fundamental para manter meu cabelo bonito e saudável, por isso faço questão de usar produtos específicos e realizar tratamentos semanais. ",
            },
            {
                texto: " Eu sigo uma rotina de cuidados com óleos nutritivos e protetores térmicos, e evito o calor excessivo para prevenir danos. ",
                afirmacao: " A Priorizar a proteção contra o calor e usar óleos nutritivos realmente fez a diferença na saúde do meu cabelo, ajudando a mantê-lo forte e brilhante. ",
            }
        ]
    },
    {
        enunciado: " Quais produtos você considera essenciais na sua rotina de cuidados capilares?",
        alternativas: [
            {
                texto: " Eu não consigo viver sem um bom shampoo e condicionador hidratantes, além de uma máscara de tratamento semanal. ",
                afirmacao: " Esses produtos são essenciais para mim, pois ajudam a manter a umidade e a suavidade do meu cabelo, tornando-o mais fácil de manejar e menos propenso a danos. ",
            },
            {
                texto: " Uso sempre um óleo capilar para ajudar na nutrição e proteção, além de um spray leave-in para facilitar o desembaraçar. ",
                afirmacao: "Esses produtos são indispensáveis na minha rotina, pois o óleo nutre profundamente e o spray leave-in torna o cabelo mais fácil de pentear, reduzindo a quebra. ",
            }
        ]
    },
    {
        enunciado: "Com que frequência você realiza tratamentos como hidratação ou reparação?",
        alternativas: [
            {
                texto: " Faço uma hidratação profunda a cada duas semanas para manter o cabelo saudável. ",
                afirmacao: "Essa prática regular de hidratação profunda tem sido fundamental para manter meu cabelo hidratado e livre de frizz, garantindo que ele esteja sempre com um aspecto saudável.",
            },
            {
                texto: " Eu costumo fazer um tratamento reparador toda vez que sinto que meu cabelo está seco ou danificado, que pode ser a cada semana ou a cada 10 dias.",
                afirmacao: " Isso me ajuda a manter a vitalidade dos fios, garantindo que meu cabelo permaneça forte e brilhante, mesmo após dias de uso de calor ou exposição a agentes externos. ",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiafinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();

}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativas);
        botaoAlternativas.addEventListener("click", () => repostaselecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function repostaselecionada(opcaoselecionada) {
    const afirmacoes = opcaoselecionada.afirmacao;
    historiafinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = " Em 2024... ";
    textoResultado.textContent = historiafinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();