import React from 'react';
import './OAdvogado.css';

const OAdvogado = () => {

  return (
    <section className="o-advogado" id="anchor-advogado">
      <div className="container">
        <h1>O Advogado</h1>
        <div className="advogado-content">
          <div className="advogado-img">
            <img src={require("../../media/equipe02.jpg").default} alt="Dr. Hamilton Reis" />
          </div>
          <div className="advogado-text">
            <h2>Dr. Hamilton Reis</h2>
            <h3>Advogado Especialista em Direito Criminal</h3>
            <p>
              Sou advogado especialista em Direito Criminal, com atuação dedicada à defesa e à orientação de pessoas envolvidas em investigações e processos criminais — seja na condição de réu ou de vítima.
            </p>
            <p>
              Se você enfrenta uma situação de flagrante, busca e apreensão, mandado de prisão ou já cumpre pena, meu compromisso é oferecer uma defesa técnica, estratégica e incansável, utilizando todos os instrumentos legais possíveis para preservar sua liberdade e garantir a plena proteção dos seus direitos.
            </p>
            <p>
              Cada cliente é atendido com respeito, humanidade e absoluta discrição. Acompanho de perto todas as fases do processo — da delegacia ao tribunal — garantindo que você e sua família compreendam cada etapa e se sintam amparados em todas as decisões.
            </p>
            <p>
              Entendo que um processo criminal não afeta apenas quem responde a ele, mas também quem está ao redor. Por isso, meu trabalho se estende aos familiares, oferecendo apoio, clareza e segurança durante todo o percurso.
            </p>
            <p>
              No meu escritório, clareza, honestidade e dedicação não são apenas princípios — são compromissos reais com cada pessoa que me confia sua defesa. <strong>Estarei ao seu lado em cada passo, até o fim.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OAdvogado;
