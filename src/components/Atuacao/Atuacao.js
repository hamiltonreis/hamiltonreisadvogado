import React from 'react';

import './Atuacao.css'; // Importa o novo CSS

// Renomeia o componente
const Atuacao = () => {
    return (
        <section className="atuacao" id="anchor-atuacao">
            <div className="container">
                <h1>Atuação</h1>
                <p className="atuacao-intro">
                    Uma defesa completa, da delegacia até a execução da pena.
                    A atuação no Direito Criminal exige agilidade e conhecimento técnico em todas as fases.
                </p>

                <div className="flexbox box-atuacao">
                    
                    {/* --- PILAR 1: FASE POLICIAL --- */}
                    <div className="atuacao-single">
                        <h2>1. Resposta Imediata <p>(Fase Policial)</p></h2>
                        <p>
                            A atuação imediata nas primeiras horas é crucial para definir o rumo do processo. Garanto a presença ágil para:
                        </p>
                        <ul>
                            <li>Acompanhamento de Prisão em Flagrante</li>
                            <li>Assistência em Interrogatórios e Depoimentos</li>
                            <li>Atuação decisiva em Audiência de Custódia</li>
                            <li>Pedidos de Liberdade Provisória</li>
                            <li>Restituição de Bens Apreendidos</li>
                        </ul>
                    </div>

                    {/* --- PILAR 2: FASE JUDICIAL --- */}
                    <div className="atuacao-single">
                        <h2>2. Defesa Processual <p>(Fase Judicial)</p></h2>
                        <p>
                            A fase processual exige uma defesa técnica e minuciosa, buscando ativamente as provas, nulidades e teses que garantam os direitos do cliente.
                        </p>
                        <ul>
                            <li>Defesa e Resposta à Acusação</li>
                            <li>Pedidos de Revogação de Prisão e Habeas Corpus</li>
                            <li>Atuação combativa na instrução processual (audiências)</li>
                            <li>Defesa especializada no Tribunal do Júri</li>
                            <li>Interposição de Recursos para Tribunais (TJ, STJ, STF)</li>
                        </ul>
                    </div>
                    
                    {/* --- PILAR 3: EXECUÇÃO PENAL --- */}
                    <div className="atuacao-single">
                        <h2>Com você até o fim <p>(Execução Penal)</p></h2>
                        <p>
                            O compromisso não termina com a sentença. Na fase de Execução Penal, o foco é garantir que a pena seja cumprida de forma justa e dentro da lei.
                        </p>
                        <ul>
                            <li>Cálculo e Pedidos de Progressão de Regime</li>
                            <li>Análise para Livramento Condicional</li>
                            <li>Defesa em Faltas Disciplinares</li>
                            <li>Pedidos de Remição (desconto da pena)</li>
                            <li>Atendimento e suporte em Presídios</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Exporta o novo nome
export default Atuacao;