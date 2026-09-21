import React from 'react';
import Reveal from '../Reveal/Reveal';
import './TemasSection.css';

const TemasSection = ({ area }) => (
	<section className="temas-section" id="area-temas" style={{ '--accent': area.accent }}>
		<div className="container temas-container">
			<Reveal as="p" className="section-eyebrow center">
				O que eu resolvo
			</Reveal>
			<Reveal as="h2" className="temas-title">
				Assuntos mais comuns em {area.nome}
			</Reveal>

			<div className="temas-grid">
				{area.temas.map((tema, index) => (
					<Reveal as="article" className="tema-card" key={tema.titulo} delay={index * 60}>
						<span className="tema-index">{String(index + 1).padStart(2, '0')}</span>
						<h3>{tema.titulo}</h3>
						<p>{tema.texto}</p>
					</Reveal>
				))}
			</div>
		</div>
	</section>
);

export default TemasSection;
