import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importa os ícones

import './Duvidas.css';

// --- DADOS DAS 15 PERGUNTAS ---
const faqs = [
    {
        id: 1,
        question: "Fui preso(a) em flagrante. O que acontece agora?",
        answer: "Você será levado(a) à delegacia para ser ouvido(a) e, em até 24 horas, será apresentado(a) a um juiz para a audiência de custódia. É fundamental entrar em contato com um advogado criminalista imediatamente para garantir que seus direitos sejam respeitados desde o início."
    },
    {
        id: 2,
        question: "O que é uma audiência de custódia?",
        answer: "É uma audiência rápida (feita em até 24h após a prisão) onde o juiz avalia a legalidade da sua prisão. O juiz decidirá se você poderá responder ao processo em liberdade (com ou sem medidas cautelares) ou se será necessário decretar sua prisão preventiva."
    },
    {
        id: 3,
        question: "Posso responder ao processo em liberdade?",
        answer: "Sim, esta é a regra no sistema legal brasileiro. A prisão durante o processo (prisão preventiva) é uma exceção. Um advogado de defesa atuará para demonstrar ao juiz que não existem motivos para a prisão, solicitando sua liberdade provisória."
    },
    {
        id: 4,
        question: "Fui intimado(a) a depor na delegacia. Preciso de um advogado?",
        answer: "Embora não seja obrigatório por lei para a pessoa que vai depor (seja como testemunha ou investigado), é altamente recomendável. Um advogado garante que você não se autoincrimine, entenda as perguntas e que todo o procedimento siga a lei, evitando abusos."
    },
    {
        id: 5,
        question: "Qual a diferença entre regime fechado, semiaberto e aberto?",
        answer: "São as formas de cumprir a pena. No fechado, a pena é cumprida integralmente em estabelecimento penal. No semiaberto, o condenado pode trabalhar ou estudar fora durante o dia e retorna à noite. No aberto, o condenado cumpre a pena em casa, devendo seguir certas condições."
    },
    {
        id: 6,
        question: "O que é um 'Habeas Corpus' (HC)?",
        answer: "O Habeas Corpus é uma ação constitucional usada para proteger o direito de 'ir e vir' (liberdade). Ele é utilizado para 'trancar' investigações ilegais, pedir a soltura de alguém preso indevidamente ou anular um ato judicial que ameace a liberdade de forma ilegal ou abusiva."
    },
    {
        id: 7,
        question: "O que é a Lei Maria da Penha e medidas protetivas?",
        answer: "É uma lei criada para proteger mulheres contra violência doméstica e familiar. As 'medidas protetivas' são ordens judiciais (como afastamento do agressor) para garantir a segurança da vítima de forma imediata, antes mesmo do processo principal."
    },
    {
        id: 8,
        question: "Qual a diferença entre tráfico de drogas e posse para uso?",
        answer: "A posse é para consumo pessoal e tem penas mais brandas (advertência, prestação de serviços). O tráfico envolve vender, transportar ou fornecer drogas a terceiros, sendo um crime grave com penas de prisão. A lei não define uma quantidade; a diferença é analisada pela autoridade com base nas circunstâncias da apreensão."
    },
    {
        id: 9,
        question: "Posso ser preso por não pagar pensão alimentícia?",
        answer: "Sim. Esta é a única forma de 'prisão civil' (prisão por dívida) permitida no Brasil. Se houver uma ordem judicial e o devedor não pagar ou justificar, o juiz pode decretar a prisão, que visa forçar o pagamento da dívida."
    },
    {
        id: 10,
        question: "Fui vítima de um crime. O que eu faço?",
        answer: "Você deve procurar a delegacia de polícia mais próxima para registrar um Boletim de Ocorrência (B.O.). Isso dá início formal à investigação policial. Se for um crime que depende de representação (como ameaça), você terá 6 meses para autorizar o Estado a processar o autor."
    },
    {
        id: 11,
        question: "O que é transação penal ou 'sursis' processual?",
        answer: "São benefícios da Lei 9.099 (Juizados Especiais Criminais) para crimes de menor potencial. A Transação Penal é um acordo para crimes de pena até 2 anos, onde o autor paga uma multa ou presta serviços e o processo é arquivado. O 'Sursis' (suspensão do processo) ocorre em crimes com pena mínima de 1 ano, onde o processo é suspenso por 2 a 4 anos sob certas condições."
    },
    {
        id: 12,
        question: "Um menor de idade pode ser preso?",
        answer: "Não. Menores de 18 anos não cometem 'crimes', mas sim 'atos infracionais'. Eles não são 'presos', mas podem ser 'apreendidos'. O processo é diferente (ECA - Estatuto da Criança e do Adolescente) e as punições são 'medidas socioeducativas', que podem ir de uma advertência até a internação em uma fundação (como a FUNDAC)."
    },
    {
        id: 13,
        question: "O que é prescrição?",
        answer: "A prescrição é a perda do direito do Estado de punir alguém devido à passagem do tempo. Se o Estado demora muito para investigar, processar ou executar a pena, ele perde esse direito. O prazo varia conforme a pena máxima do crime."
    },
    {
        id: 14,
        question: "Fui condenado. Ainda posso recorrer?",
        answer: "Sim. Toda condenação em primeira instância (pelo juiz) dá direito a, no mínimo, um recurso (Apelação) para o Tribunal de Justiça. O seu advogado analisará a sentença em busca de erros ou injustiças para pedir a absolvição ou a redução da pena."
    },
    {
        id: 15,
        question: "O que faz um advogado na Execução Penal?",
        answer: "A execução penal começa *depois* da condenação final. O advogado atua para garantir os direitos do preso, como progressão de regime (do fechado para o semiaberto, por exemplo), saídas temporárias, remição de pena (desconto por trabalho ou estudo) e pedidos de liberdade condicional."
    }
];

const ITENS_POR_VEZ = 5; // Constante para controlar quantos itens carregar

const Duvidas = () => {
    // Estado para controlar qual ID de pergunta está aberto
    const [openId, setOpenId] = useState(null);
    // Estado para controlar quantos itens são visíveis
    const [visibleCount, setVisibleCount] = useState(ITENS_POR_VEZ);

    // Função para abrir ou fechar uma pergunta
    const toggleFaq = (id) => {
        if (openId === id) {
            setOpenId(null); // Se clicar na que já está aberta, fecha
        } else {
            setOpenId(id); // Se clicar em outra, abre
        }
    };

    // Função para mostrar mais perguntas
    const showMore = () => {
        setVisibleCount(prevCount => prevCount + ITENS_POR_VEZ);
    };

    // Verifica se todos os itens já estão sendo mostrados
    const allQuestionsShown = visibleCount >= faqs.length;

    return (
        <section className="duvidas" id="anchor-Duvidas">
            <div className="container">
                <h1>Dúvidas Frequentes</h1>
                <p>Clique sobre a pergunta para ver a resposta</p>
                
                <div className="box-duvidas">
                    {/* Mapeia o array 'faqs', mas 'fatia' ele antes, 
                      mostrando apenas a quantidade 'visibleCount' 
                    */}
                    {faqs.slice(0, visibleCount).map((faq) => {
                        const isOpen = faq.id === openId; // Verifica se este item está aberto

                        return (
                            <div 
                                key={faq.id} 
                                className={`art-single ${isOpen ? 'active' : ''}`}
                            >
                                <div className="faq-question" onClick={() => toggleFaq(faq.id)}>
                                    <p>{faq.question}</p>
                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                                
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* --- BOTÃO DE "MAIS PERGUNTAS" --- */}
                {/* Ele só aparece se 'allQuestionsShown' for falso */}
                {!allQuestionsShown && (
                    <div className="nav-duvidas">
                        <button onClick={showMore} className="btn-mais">
                            Mais Perguntas
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}

export default Duvidas;