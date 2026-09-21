import React from 'react';
import Reveal from '../Reveal/Reveal';
import './TrustBar.css';

const pontos = [
	{ numero: '4', label: 'Áreas de atuação especializadas' },
	{ numero: '3+', label: 'Estados atendidos: PB, PE e RN' },
	{ numero: '100%', label: 'Atendimento também remoto, para todo o Brasil' },
	{ numero: '24h', label: 'Canal de WhatsApp para o primeiro contato' },
];

const TrustBar = () => (
	<section className="trust-bar">
		<div className="container trust-container">
			{pontos.map((ponto, index) => (
				<Reveal as="div" className="trust-item" key={ponto.label} delay={index * 80}>
					<strong>{ponto.numero}</strong>
					<span>{ponto.label}</span>
				</Reveal>
			))}
		</div>
	</section>
);

export default TrustBar;
