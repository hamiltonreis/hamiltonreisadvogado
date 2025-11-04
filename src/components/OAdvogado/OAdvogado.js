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
            <h3>Advogado Criminalista, Pós-graduado em Advocacia Criminal</h3>
            <p>
              Minha atuação é dedicada exclusivamente à defesa de pessoas em investigações e processos criminais. Compreendo a complexidade e a urgência que envolvem uma acusação criminal, e por isso, meu compromisso é oferecer uma defesa técnica, combativa e intransigente na garantia dos seus direitos.
            </p>
            <p>
              Ofereço um atendimento direto e humanizado, focado em oferecer segurança e tranquilidade não apenas ao cliente, mas também aos seus familiares, explicando cada etapa do processo com clareza e honestidade.
            </p>
            <p>
              A prática do escritório é pautada pela total discrição, seriedade e pelo compromisso absoluto com a melhor estratégia jurídica para cada caso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OAdvogado;